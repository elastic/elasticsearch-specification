/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import * as model from '../model/metamodel'
import { ValidationErrors } from '../validation-errors'
import { JsonSpec } from '../model/json-spec'
import assert from 'assert'
import { TypeName } from '../model/metamodel'

enum TypeDefKind {
  type,
  behavior
}

enum JsonEvent {
  string = 'string',
  number = 'number',
  boolean = 'boolean',
  null = 'null',
  object = 'object',
  array = 'array'
}

/**
 * Validates the internal consistency of the model (doesn't check the json spec)
 *
 * Any inconsistency is logged as an error.
 *
 * Missing validations:
 * - verify uniqueness of property names in the inheritance chain
 * - verify that request parents don't define properties (would they be path/request/body properties?)
 * - verify that unions can be distinguished in a JSON stream (otherwise they should be inheritance trees)
 */
export default async function validateModel (apiModel: model.Model, restSpec: Map<string, JsonSpec>, errors: ValidationErrors): Promise<model.Model> {
  // Fail hard if the FAIL_HARD env var is defined
  const failHard = process.env.FAIL_HARD != null

  const initialTypeCount = apiModel.types.length

  // Returns the fully-qualified name of a type name
  function fqn (name: model.TypeName): string {
    return `${name.namespace}:${name.name}`
  }

  // Are these two type names the same?
  function sameTypeName (n1: model.TypeName, n2: model.TypeName): boolean {
    return n1.namespace === n2.namespace && n1.name === n2.name
  }

  function getTypeDef (name: model.TypeName): model.TypeDefinition | undefined {
    return typeDefByName.get(fqn(name))
  }

  // ----- Error logging and collection

  // Current endpoint context. Start with an undefined one for common type definitions
  let currentEndpoint: string | undefined
  let currentPart: 'request'|'response' = 'request'

  function setRootContext (endpoint: string, what: 'request' | 'response'): void {
    currentEndpoint = endpoint
    currentPart = what
  }

  // Graph traversal context stack
  let context: string[] = []

  let errorCount = 0
  function modelError (msg: string): void {
    const fullMsg = (context.length === 0) ? msg : context.join(' / ') + ' - ' + msg

    if (currentEndpoint != null) {
      errors.addEndpointError(currentEndpoint, currentPart, fullMsg)
    } else {
      errors.addGeneralError(fullMsg)
    }

    errorCount++
  }

  // ----- Type definition management

  // Type definitions by name
  const typeDefByName = new Map<string, model.TypeDefinition>()

  for (const type of apiModel.types) {
    typeDefByName.set(fqn(type.name), type)
  }

  // Behaviors. Filled from the `behaviors` properties from requests and interfaces
  // FIXME: to be revisited once it's moved to a top-level api model property
  const behaviorByName = new Map<string, model.TypeDefinition>()

  // Behaviors by short name
  // FIXME: no more needed once we've changed the metamodel to use fqn's
  const behaviorByShortName = new Map<string, model.TypeName>()

  for (const typeDef of apiModel.types) {
    context.push(`Type definition ${fqn(typeDef.name)}`)
    if (typeDef.kind === 'request' || typeDef.kind === 'interface') {
      for (const bhv of typeDef.behaviors ?? []) {
        const bhvDef = getTypeDef(bhv.type)
        if (bhvDef == null) {
          modelError(`No type definition for '${fqn(bhv.type)}'`)
        } else {
          behaviorByName.set(fqn(bhv.type), bhvDef)
          behaviorByShortName.set(bhv.type.name, bhv.type)
        }
      }
    }
    context.pop()
  }

  // Now remove all behaviors from type definitions
  // FIXME: remove once behaviors are a top-level property
  apiModel.types = apiModel.types.filter(typeDef => !behaviorByName.has(fqn(typeDef.name)))

  // Type definitions that have children (either implements or extends)
  const parentTypes = new Set<string>()
  for (const type of apiModel.types) {
    if (type.kind === 'request' || type.kind === 'interface') {
      if (type.inherits != null) {
        parentTypes.add(fqn(type.inherits.type))
      }
    }
  }

  // Types and behaviors we have actually seen while crawling the reference graph.
  // Used both to avoid re-validating types we already visited and to find dangling types at the end.
  const typesSeen = new Set<string>()

  // ----- Builtin and special types

  // Register builtin types
  for (const name of [
    'string', 'boolean', 'number', 'null'
  ]) {
    const typeName = {
      namespace: '_builtins',
      name: name
    }
    typeDefByName.set(fqn(typeName), {
      kind: 'interface',
      name: typeName,
      properties: [],
      // arbitrary location, it's not written to schema.json
      specLocation: ''
    })
  }

  const additionalRoots: TypeName[] = [
    // ErrorResponse is not referenced anywhere, but any API could return it if an error happens.
    { namespace: '_types', name: 'ErrorResponseBase' }
  ]
  additionalRoots.forEach(t => validateTypeRef(t, undefined, new Set()))

  // -----  Alright, let's go!

  function readyForValidation (ep: model.Endpoint): boolean {
    return ep.request != null && ep.response != null
  }

  // Validate all endpoints. We start by those that are ready for validation so that transitive validation of common
  // data types is associated with these endpoints and their errors are not filtered out in the error report.
  apiModel.endpoints.filter(ep => readyForValidation(ep)).forEach(validateEndpoint)
  apiModel.endpoints.filter(ep => !readyForValidation(ep)).forEach(validateEndpoint)

  // Removes types that we've not seen
  apiModel.types = apiModel.types.filter(type => typesSeen.has(fqn(type.name)))

  // Re-add visited behaviors to model types
  for (const [bhn, bh] of behaviorByName) {
    if (typesSeen.has(bhn)) {
      apiModel.types.push(bh)
    }
  }

  const danglingTypesCount = initialTypeCount - apiModel.types.length
  console.info(`Model validation: ${typesSeen.size} types visited, ${danglingTypesCount} dangling types.`)

  if (errorCount > 0 && failHard) {
    throw new Error('Model is inconsistent. Check logs for details')
  }

  return apiModel

  // -----------------------------------------------------------------------------------------------

  /**
   * Validate an endpoint
   */
  function validateEndpoint (endpoint: model.Endpoint): void {
    setRootContext(endpoint.name, 'request')

    if (endpoint.request == null) {
      if (endpoint.response == null) {
        modelError('Missing request & response')
        return
      } else {
        modelError('Missing request')
      }
    } else {
      const reqType = getTypeDef(endpoint.request)

      if (reqType == null) {
        modelError(`Type ${fqn(endpoint.request)} not found`)
      } else if (reqType.kind !== 'request') {
        modelError(`Type ${fqn(endpoint.request)} is not a request definition`)
      } else {
        validateTypeDef(reqType)

        // Request path properties and url template properties should be the same
        const reqProperties = new Set(reqType.path.map(p => p.name))

        const urlProperties = new Set<string>()
        for (const url of endpoint.urls) {
          // Strip trailing slashes from paths
          if (url.path !== '/' && url.path.endsWith('/')) {
            modelError(`Url path '${url.path}' has a trailing slash`)
            url.path = url.path.replace(/\/$/, '')
          }

          const re = /{([^}]+)}/g
          let m
          while ((m = re.exec(url.path)) != null) { // eslint-disable-line no-cond-assign
            urlProperties.add(m[1])
          }
        }

        for (const urlProp of urlProperties) {
          if (!reqProperties.has(urlProp)) {
            modelError(`Url path property '${urlProp}' is missing in request definition`)
          }
        }

        for (const reqProp of reqProperties) {
          if (!urlProperties.has(reqProp)) {
            modelError(`Request path property '${reqProp}' doesn't exist in endpoint URL templates`)
          }
        }
      }
    }

    setRootContext(endpoint.name, 'response')

    if (endpoint.response == null) {
      modelError('Missing response')
    } else {
      const respType = getTypeDef(endpoint.response)

      if (respType == null) {
        modelError(`Type ${fqn(endpoint.response)} not found`)
      } else {
        validateTypeDef(respType)
      }
    }
  }

  /**
   * Validate a type reference.
   *
   * @param name the type's name
   * @param generics generic parameter for this reference
   * @param openGenerics fully qualified names of open generic parameters in the enclosing scope
   * @param kind what do we expect this type to be?
   */
  function validateTypeRef (name: model.TypeName, generics: (model.ValueOf[] | undefined), openGenerics: Set<string>, kind: TypeDefKind = TypeDefKind.type): void {
    const fqName = fqn(name)

    if (openGenerics.has(fqName)) {
      // This is an open generic parameter coming from the enclosing scope
      return
    }

    const typeDef = kind === TypeDefKind.behavior ? behaviorByName.get(fqName) : getTypeDef(name)
    if (typeDef == null) {
      modelError(`No type definition for '${fqName}'`)
      return
    }

    if (typeDef.kind === 'request') {
      modelError(`'${fqName}' is a request and must only be used in endpoints`)
    }

    validateTypeDef(typeDef)

    // Validate generic parameters
    const genericsCount = generics?.length ?? 0

    if (typeDef.kind !== 'enum') {
      const typeGenericsCount = typeDef.generics?.length ?? 0
      if (genericsCount !== typeGenericsCount) {
        modelError(`Expected ${typeGenericsCount} generic parameters but got ${genericsCount}`)
      }
    } else {
      if (genericsCount !== 0) {
        modelError(`Type kind '${typeDef.kind}' doesn't accept generic parameters`)
      }
    }

    context.push('Generics')
    for (const v of generics ?? []) {
      validateValueOf(v, openGenerics)
    }
    context.pop()
  }

  // -----------------------------------------------------------------------------------------------
  // Type definitions validations

  function validateTypeDef (typeDef: model.TypeDefinition): void {
    if (typesSeen.has(fqn(typeDef.name))) {
      // Already visited
      return
    }
    typesSeen.add(fqn(typeDef.name))

    // Start a new context, type definitions are top-level elements
    const oldContext = context
    context = []
    context.push(`${typeDef.kind} definition ${typeDef.name.namespace}:${typeDef.name.name}`)

    // Validate description URL
    if (typeDef.docUrl != null) {
      try {
        new URL(typeDef.docUrl) // eslint-disable-line no-new
      } catch (error) {
        modelError('Description URL is malformed')
      }
    }

    switch (typeDef.kind) {
      case 'request':
        validateRequest(typeDef)
        break

      case 'response':
        validateResponse(typeDef)
        break

      case 'interface':
        validateInterface(typeDef)
        break

      case 'enum':
        validateEnum(typeDef)
        break

      case 'type_alias':
        validateTypeAlias(typeDef)
        break

      default:
        // @ts-expect-error
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        throw new Error(`Unknown kind: ${typeDef.kind}`)
    }

    // Restore previous context
    context = oldContext
  }

  function validateRequest (typeDef: model.Request): void {
    const openGenerics = openGenericSet(typeDef)

    validateInherits(typeDef.inherits, openGenerics)
    validateBehaviors(typeDef, openGenerics)

    // Note: we validate codegen_name/name uniqueness independently in the path, query and body as there are some
    // valid overlaps, with some parameters that can also be represented as body properties.
    // Client generators will have to take care of this.

    const inheritedProps = inheritedProperties(typeDef)

    context.push('path')
    validateProperties(typeDef.path, openGenerics, inheritedProps)
    context.pop()

    context.push('query')
    validateProperties(typeDef.query, openGenerics, inheritedProps)
    context.pop()

    context.push('body')
    if (typeDef.inherits != null && typeDef.body.kind !== 'properties') {
      if (fqn(typeDef.inherits.type) !== '_types:RequestBase') {
        modelError('A request with inherited properties must have a PropertyBody')
      }
    }
    switch (typeDef.body.kind) {
      case 'properties':
        validateProperties(typeDef.body.properties, openGenerics, inheritedProps)
        break
      case 'value':
        validateValueOf(typeDef.body.value, openGenerics)
        break
      case 'no_body':
        // Nothing to validate
        break
      default:
        // @ts-expect-error
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        throw new Error(`Unknown kind: ${typeDef.body.kind}`)
    }
    context.pop()
  }

  function validateResponse (typeDef: model.Response): void {
    const openGenerics = openGenericSet(typeDef)

    // Note: we validate codegen_name/name uniqueness independently in the path, query and body as there are some
    // valid overlaps, with some parameters that can also be represented as body properties.
    // Client generators will have to take care of this.

    context.push('body')

    switch (typeDef.body.kind) {
      case 'properties':
        validateProperties(typeDef.body.properties, openGenerics, inheritedProperties(typeDef))
        break
      case 'value':
        validateValueOf(typeDef.body.value, openGenerics)
        break
      case 'no_body':
        // Nothing to validate
        break
      default:
        // @ts-expect-error
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        throw new Error(`Unknown kind: ${typeDef.body.kind}`)
    }
    context.pop()
  }

  /** Collects the name of inherited properties. Names are normalized to lower case (see also validateProperties) */
  function inheritedProperties (typeDef: model.Interface | model.Request | model.Response, accum?: Set<string>): Set<string> {
    const result = accum ?? new Set<string>()

    function addProperties (props: model.Property[]): void {
      props.forEach(prop => result.add((prop.codegenName ?? prop.name).toLowerCase()))
    }

    function addInherits (inherits?: model.Inherits): void {
      if (inherits == null) {
        return
      }

      const typeDef = getTypeDef(inherits.type)
      if (typeDef == null) {
        modelError(`No type definition for parent '${fqn(inherits.type)}'`)
        return
      }

      switch (typeDef?.kind) {
        case 'request':
          inheritedProperties(typeDef, result)
          addProperties(typeDef.path)
          addProperties(typeDef.query)
          if (typeDef.body.kind === 'properties') {
            addProperties(typeDef.body.properties)
          }
          break

        case 'response':
          inheritedProperties(typeDef, result)
          if (typeDef.body.kind === 'properties') {
            addProperties(typeDef.body.properties)
          }
          break

        case 'interface':
          inheritedProperties(typeDef, result)
          addProperties(typeDef.properties)
          break
      }
    }

    if (typeDef.kind !== 'response') {
      if (typeDef.inherits != null) {
        addInherits(typeDef.inherits)
      }
      typeDef.behaviors?.forEach(addInherits)
    }

    return result
  }

  function validateInterface (typeDef: model.Interface): void {
    const openGenerics = openGenericSet(typeDef)

    validateInherits(typeDef.inherits, openGenerics)
    validateBehaviors(typeDef, openGenerics)
    validateProperties(typeDef.properties, openGenerics, inheritedProperties(typeDef))

    if (typeDef.variants?.kind === 'container') {
      const variants = typeDef.properties.filter(prop => !(prop.containerProperty ?? false))
      if (variants.length === 1) {
        // Single-variant containers must have a required property
        if (!variants[0].required) {
          modelError(`Property ${variants[0].name} is a single-variant and must be required`)
        }
      } else {
        // Multiple variants must all be optional
        for (const v of variants) {
          if (v.required) {
            modelError(`Variant ${variants[0].name} must be optional`)
          }
        }
      }
    }
  }

  function validateEnum (typeDef: model.Enum): void {
    const allIdentifiers = new Set<string>()
    const allNames = new Set<string>()

    for (const item of typeDef.members) {
      // Identifier must be unique among all items (case insensitive)
      const codegenName = (item.codegenName ?? item.name).toLowerCase()
      if (allIdentifiers.has(codegenName)) {
        modelError(`Duplicate enum member codegen_name '${item.name}'`)
      }
      allIdentifiers.add(codegenName)

      // Name must be unique among all items (case sensitive)
      if (allNames.has(item.name)) {
        modelError(`Duplicate enum member name '${item.name}'`)
      }
      allNames.add(item.name)
    }
  }

  function validateTypeAlias (typeDef: model.TypeAlias): void {
    const openGenerics = new Set(typeDef.generics?.map(t => t.name))

    if (typeDef.variants != null) {
      if (typeDef.generics != null && typeDef.generics.length !== 0) {
        modelError('A tagged union should not have generic parameters')
      }

      if (typeDef.type.kind !== 'union_of') {
        modelError('The "variants" tag only applies to unions')
      } else {
        validateTaggedUnion(typeDef.type, typeDef.variants)
      }
    } else {
      validateValueOf(typeDef.type, openGenerics)
    }
  }

  function validateTaggedUnion (valueOf: model.UnionOf, variants: model.InternalTag | model.ExternalTag): void {
    if (variants.kind === 'external_tag') {
      // All items must have a 'variant' attribute
      const items = flattenUnionMembers(valueOf)

      for (const item of items) {
        if (item.kind !== 'instance_of') {
          modelError('Items of externally tagged unions must be types with a "variant_tag" annotation')
        } else {
          validateTypeRef(item.type, undefined, new Set<string>())
          const type = getTypeDef(item.type)
          if (type == null) {
            modelError(`Type ${fqn(item.type)} not found`)
          } else {
            if (type.variantName == null) {
              modelError(`Type ${fqn(item.type)} is part of a tagged union and should have a "@variant name"`)
            } else {
              // Check uniqueness
            }
          }
        }
      }
    } else if (variants.kind === 'internal_tag') {
      const tagName = variants.tag
      const items = flattenUnionMembers(valueOf)

      for (const item of items) {
        if (item.kind !== 'instance_of') {
          modelError('Items of internally tagged unions must be type references')
        } else {
          validateTypeRef(item.type, undefined, new Set<string>())
          const type = getTypeDef(item.type)
          if (type == null) {
            modelError(`Type ${fqn(item.type)} not found`)
          } else if (type.kind === 'interface') {
            const tagProperty = type.properties.find(prop => prop.name === tagName)
            if (tagProperty == null) {
              modelError(`Type ${fqn(item.type)} should have a "${tagName}" variant tag property`)
            }
          }
        }
      }

      validateValueOf(valueOf, new Set())
    }
  }

  // -----------------------------------------------------------------------------------------------
  // Constituents of type definitions

  function openGenericSet (typeDef: model.Request | model.Response | model.Interface): Set<string> {
    return new Set((typeDef.generics ?? []).map(name => fqn(name)))
  }

  function validateInherits (parent: (model.Inherits | undefined), openGenerics: Set<string>): void {
    if (parent == null) return

    context.push('Inherits')
    validateTypeRef(parent.type, parent.generics, openGenerics)
    context.pop()
  }

  function validateBehaviors (typeDef: model.Request | model.Response | model.Interface, openGenerics: Set<string>): void {
    if (typeDef.kind !== 'response' && typeDef.behaviors != null && typeDef.behaviors.length > 0) {
      context.push('Behaviors')
      for (const parent of typeDef.behaviors) {
        validateTypeRef(parent.type, parent.generics, openGenerics)
      }
      context.pop()
    }

    // Each attached behavior must be in the behaviors attached to this class or an ancestor
    if (typeDef.kind !== 'response' && typeDef.attachedBehaviors != null) {
      for (const abh of typeDef.attachedBehaviors) {
        const bhName = behaviorByShortName.get(abh)
        if (bhName == null) {
          modelError(`No type definition for behavior '${abh}'`)
          continue
        }

        if (!behaviorExists(typeDef, bhName)) {
          modelError(`Attached behavior '${abh}' not found in type or ancestors`)
        }
      }
    }
  }

  /** Recursively looks up a behavior in a type definition or its ancestors */
  function behaviorExists (type: (model.Request | model.Interface), behavior: model.TypeName): boolean {
    // Does the type have this behavior?
    for (const b of (type.behaviors ?? [])) {
      if (sameTypeName(b.type, behavior)) {
        return true
      }
    }

    // Does a parent have this behavior?
    if (type.inherits != null) {
      const parentDef = getTypeDef(type.inherits.type)
      if (parentDef == null) {
        modelError(`No type definition for parent '${fqn(type.inherits.type)}'`)
        return false
      }
      if (parentDef.kind === 'request' || parentDef.kind === 'interface') {
        if (behaviorExists(parentDef, behavior)) {
          return true
        }
      }
    }

    return false
  }

  function validateProperties (props: model.Property[], openGenerics: Set<string>, inheritedProperties: Set<string>): void {
    const allIdentifiers = new Set<string>()
    const allNames = new Set<string>()

    for (const prop of props) {
      // Identifier must be unique among all items (case insensitive)
      const codegenName = (prop.codegenName ?? prop.name).toLowerCase()
      if (allIdentifiers.has(codegenName)) {
        modelError(`Duplicate property codegen_name: '${prop.name}'`)
      }
      allIdentifiers.add(codegenName)

      if (inheritedProperties.has(codegenName)) {
        modelError(`Property '${prop.name}' is already defined in an ancestor class`)
      }

      // Names and aliases must be unique among all items (case sensitive)
      const names = [prop.name].concat(prop.aliases ?? [])
      for (const name of names) {
        if (allNames.has(name)) {
          modelError(`Duplicate property name or alias: '${name}'`)
        }
        allNames.add(name)
      }

      context.push(`Property '${prop.name}'`)
      validateValueOf(prop.type, openGenerics)
      validateValueOfJsonEvents(prop.type)
      context.pop()
    }
  }

  // -----------------------------------------------------------------------------------------------
  // Value_Of validations

  function validateValueOf (valueOf: model.ValueOf, openGenerics: Set<string>): void {
    context.push(valueOf.kind)
    switch (valueOf.kind) {
      case 'instance_of':
        validateTypeRef(valueOf.type, valueOf.generics, openGenerics)
        break

      case 'array_of':
        validateValueOf(valueOf.value, openGenerics)
        break

      case 'union_of':
        for (const item of valueOf.items) {
          validateValueOf(item, openGenerics)
        }
        break

      case 'dictionary_of':
        validateValueOf(valueOf.key, openGenerics)
        validateValueOf(valueOf.value, openGenerics)
        break

      case 'user_defined_value':
        // Nothing to validate
        break

      case 'literal_value':
        // Nothing to validate
        break

      default:
        // @ts-expect-error
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        throw new Error(`Unknown kind: ${valueOf.kind}`)
    }
    context.pop()
  }

  // -----------------------------------------------------------------------------------------------
  // JSON events validation

  function validateValueOfJsonEvents (valueOf: model.ValueOf): void {
    // TODO: disabled for now as it's too noisy until we have fully annotated variants

    // const events = new Set<JsonEvent>()
    // valueOfJsonEvents(events, valueOf)
  }

  function validateEvent (events: Set<JsonEvent>, event: JsonEvent): void {
    if (events.has(event)) {
      modelError('Ambiguous JSON type: ' + event)
    }
    events.add(event)
  }

  function typeDefJsonEvents (events: Set<JsonEvent>, typeDef: model.TypeDefinition): void {
    if (typeDef.name.namespace === '_builtins') {
      switch (typeDef.name.name) {
        case 'string':
          validateEvent(events, JsonEvent.string)
          return

        case 'boolean':
          validateEvent(events, JsonEvent.boolean)
          return

        case 'number':
          validateEvent(events, JsonEvent.number)
          return

        case 'object':
          validateEvent(events, JsonEvent.object)
          return

        case 'null':
          validateEvent(events, JsonEvent.null)
          return

        case 'Array':
          validateEvent(events, JsonEvent.array)
          return
      }
    }

    switch (typeDef.kind) {
      case 'request':
      case 'interface':
        validateEvent(events, JsonEvent.object)
        break

      case 'enum':
        validateEvent(events, JsonEvent.string)
        break

      case 'type_alias':
        if (typeDef.variants == null) {
          valueOfJsonEvents(events, typeDef.type)
        } else {
          // tagged union: the discriminant tells us what to look for, check each member in isolation
          assert(typeDef.type.kind === 'union_of', 'Variants are only allowed on union_of type aliases')
          for (const item of flattenUnionMembers(typeDef.type)) {
            validateValueOfJsonEvents(item)
          }

          // Internally tagged variants will be objects, so check that we can read them
          if (typeDef.variants.kind === 'internal_tag') {
            // variant items will be objects
            validateEvent(events, JsonEvent.object)
          }
        }
        break
    }
  }

  /** Build the flattened item list of potentially nested unions (this is used for large unions) */
  function flattenUnionMembers (union: model.UnionOf): model.ValueOf[] {
    const allItems = new Array<model.ValueOf>()

    function collectItems (items: model.ValueOf[]): void {
      for (const item of items) {
        if (item.kind !== 'instance_of') {
          validateValueOf(item, new Set<string>())
          allItems.push(item)
        } else {
          const itemType = getTypeDef(item.type)
          if (itemType?.kind === 'type_alias' && itemType.type.kind === 'union_of') {
            // Mark it as seen
            typesSeen.add(fqn(item.type))
            // Recurse in nested union
            collectItems(itemType.type.items)
          } else {
            validateValueOf(item, new Set<string>())
            allItems.push(item)
          }
        }
      }
    }

    collectItems(union.items)
    return allItems
  }

  function typeRefJsonEvents (events: Set<JsonEvent>, name: model.TypeName): void {
    const type = getTypeDef(name)
    if (type != null) {
      typeDefJsonEvents(events, type)
    }
  }

  function valueOfJsonEvents (events: Set<JsonEvent>, valueOf: model.ValueOf): void {
    context.push(valueOf.kind)
    switch (valueOf.kind) {
      case 'instance_of':
        typeRefJsonEvents(events, valueOf.type)
        break

      case 'user_defined_value':
        validateEvent(events, JsonEvent.object) // but can be anything
        break

      case 'array_of':
        validateEvent(events, JsonEvent.array)
        validateValueOfJsonEvents(valueOf.value)
        break

      case 'dictionary_of':
        validateEvent(events, JsonEvent.object)
        context.push('key')
        validateValueOfJsonEvents(valueOf.key)
        context.pop()
        context.push('value')
        validateValueOfJsonEvents(valueOf.value)
        context.pop()
        break

      case 'union_of':
        for (const item of valueOf.items) {
          valueOfJsonEvents(events, item)
        }
        break
    }
    context.pop()
  }
}
