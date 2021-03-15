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
import * as errors from '../validation-errors'

enum TypeDefKind {
  type,
  behavior
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
export default async function validateModel (apiModel: model.Model): Promise<model.Model> {
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
      for (const parent of (type.implements ?? []).concat(type.inherits ?? [])) {
        parentTypes.add(fqn(parent.type))
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
      namespace: 'internal',
      name: name
    }
    typeDefByName.set(fqn(typeName), {
      kind: 'interface',
      name: typeName,
      properties: []
    })
  }

  // FIXME: could we get rid of this and use an 'array_of' value?
  typeDefByName.set('internal:Array', {
    kind: 'interface',
    name: {
      namespace: 'internal',
      name: 'Array'
    },
    generics: ['Item'],
    properties: []
  })

  // ErrorResponse is not referenced anywhere, but any API could return it if an error happens.
  validateTypeRef({ namespace: 'common_abstractions.response', name: 'ErrorResponse' }, undefined, new Set())

  // -----  Alright, let's go!

  // Validate all endpoints
  apiModel.endpoints.forEach(validateEndpoint)

  // Removes types that we've not seen
  apiModel.types = apiModel.types.filter(type => typesSeen.has(fqn(type.name)))

  // Re-add visited behaviors to model types
  for (const [bhn, bh] of behaviorByName) {
    if (typesSeen.has(bhn)) {
      apiModel.types.push(bh)
    }
  }

  const danglingTypesCount = initialTypeCount - apiModel.types.length
  console.info(`Model validation: ${errorCount} errors. ${typesSeen.size} types visited, ${danglingTypesCount} dangling types.`)

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
      modelError('Missing request')
    } else {
      const reqType = getTypeDef(endpoint.request)

      if (reqType == null) {
        modelError(`Type ${fqn(endpoint.request)} not found`)
      } else if (reqType.kind !== 'request') {
        modelError(`Type ${fqn(endpoint.request)} is not a request definition`)
      } else {
        validateTypeDef(reqType)
        validateIsLeafType(endpoint.request)

        // Request path properties and url template properties should be the same
        const reqProperties = new Set(reqType.path.map(p => p.name))

        const urlProperties = new Set<string>()
        for (const url of endpoint.urls) {
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
        validateIsLeafType(endpoint.response)
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
    if (typeDef.url != null) {
      try {
        new URL(typeDef.url) // eslint-disable-line no-new
      } catch (error) {
        modelError('Description URL is malformed')
      }
    }

    switch (typeDef.kind) {
      case 'request':
        validateRequest(typeDef)
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

      case 'union':
        validateUnion(typeDef)
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
    validateImplements(typeDef.implements, openGenerics)
    validateBehaviors(typeDef, openGenerics)

    // Note: we validate identifier/name uniqueness independently in the path, query and body as there are some
    // valid overlaps, with some parameters that can also be represented as body properties.
    // Client generators will have to take care of this.

    context.push('path')
    validateProperties(typeDef.path, openGenerics)
    context.pop()

    context.push('query')
    validateProperties(typeDef.query, openGenerics)
    context.pop()

    if (typeDef.body != null) {
      context.push('body')
      switch (typeDef.body.kind) {
        case 'properties':
          validateProperties(typeDef.body.properties, openGenerics)
          break
        case 'value':
          validateValueOf(typeDef.body.value, openGenerics)
          break
        default:
          // @ts-expect-error
          // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
          throw new Error(`Unknown kind: ${typeDef.body.kind}`)
      }
      context.pop()
    }
  }

  function validateInterface (typeDef: model.Interface): void {
    const openGenerics = openGenericSet(typeDef)

    validateImplements(typeDef.implements, openGenerics)
    validateInherits(typeDef.inherits, openGenerics)
    validateBehaviors(typeDef, openGenerics)
    validateProperties(typeDef.properties, openGenerics)
  }

  function validateEnum (typeDef: model.Enum): void {
    const allIdentifiers = new Set<string>()
    const allNames = new Set<string>()

    for (const item of typeDef.members) {
      // Identifier must be unique among all items (case insensitive)
      const identifier = (item.identifier ?? item.name).toLowerCase()
      if (allIdentifiers.has(identifier)) {
        modelError(`Duplicate enum member identifier '${item.name}'`)
      }
      allIdentifiers.add(identifier)

      // Name must be unique among all items (case sensitive)
      if (allNames.has(item.name)) {
        modelError(`Duplicate enum member name '${item.name}'`)
      }
      allNames.add(item.name)
    }
  }

  function validateTypeAlias (typeDef: model.TypeAlias): void {
    // FIXME: type_alias.generics should be of the same type as other type definitions
    const openGenerics = new Set(typeDef.generics?.map(t => {
      if (t.kind !== 'instance_of') {
        throw new Error('Expecting instance_of for alias generic parameter')
      } else {
        return fqn(t.type)
      }
    }))

    validateValueOf(typeDef.type, openGenerics)
  }

  function validateUnion (typeDef: model.Union): void {
    // FIXME: union should have open generics
    for (const item of typeDef.items) {
      validateValueOf(item, new Set())
    }
  }

  // -----------------------------------------------------------------------------------------------
  // Constituents of type definitions

  function openGenericSet (typeDef: model.Request | model.Interface): Set<string> {
    return new Set((typeDef.generics ?? []).map(name => fqn({
      namespace: typeDef.name.namespace,
      name: name
    })))
  }

  function validateInherits (parents: (model.Inherits[] | undefined), openGenerics: Set<string>): void {
    if (parents == null || parents.length === 0) return

    context.push('Inherits')
    // FIXME: remove this check once metamodel only allows 1 inherit
    if (parents.length > 1) {
      modelError('Multiple inheritance is not allowed')
    }

    for (const parent of parents) {
      validateTypeRef(parent.type, parent.generics, openGenerics)
    }
    context.pop()
  }

  function validateImplements (parents: (model.Implements[] | undefined), openGenerics: Set<string>): void {
    if (parents == null || parents.length === 0) return

    context.push('Implements')
    for (const parent of parents) {
      validateTypeRef(parent.type, parent.generics, openGenerics)
    }
    context.pop()
  }

  function validateBehaviors (typeDef: model.Request | model.Interface, openGenerics: Set<string>): void {
    if (typeDef.behaviors != null && typeDef.behaviors.length > 0) {
      context.push('Behaviors')
      for (const parent of typeDef.behaviors) {
        validateTypeRef(parent.type, parent.generics, openGenerics)
      }
      context.pop()
    }

    // Each attached behavior must be in the behaviors attached to this class or an ancestor
    if (typeDef.attachedBehaviors != null) {
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
    const parents = (type.implements ?? []).concat(type.inherits ?? [])
    for (const parent of parents) {
      const parentDef = getTypeDef(parent.type)
      if (parentDef == null) {
        modelError(`No type definition for parent '${fqn(parent.type)}'`)
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

  function validateProperties (props: model.Property[], openGenerics: Set<string>): void {
    const allIdentifiers = new Set<string>()
    const allNames = new Set<string>()

    for (const prop of props) {
      // Identifier must be unique among all items (case insensitive)
      const identifier = (prop.identifier ?? prop.name).toLowerCase()
      if (allIdentifiers.has(identifier)) {
        modelError(`Duplicate property identifier: '${prop.name}'`)
      }
      allIdentifiers.add(identifier)

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
      context.pop()
    }
  }

  // Validates that use of non-leaf types (i.e. those who are inherited or implemented) are used either
  // in contexts that are distinct from that of their children, or are abstract parent classes providing a way
  // way to identify actual concrete implementations in strongly typed languages.
  function validateIsLeafType (type: model.TypeName): void {
    if (parentTypes.has(fqn(type))) {
      // Aggregations are disambiguated with the 'typed_keys' parameter
      if (type.namespace === 'aggregations') return

      const fqName = fqn(type)

      switch (fqName) {
        // Base type also used as property, no polymorphic usage
        case 'internal:ErrorCause':
        case 'x_pack.enrich:EnrichPolicy':
        case 'x_pack.info.x_pack_usage:XPackUsage':
        case 'x_pack.info.x_pack_usage:SecurityFeatureToggle':
        case 'x_pack.watcher.watcher_stats:WatchRecordQueuedStats':
        case 'x_pack.security.user.get_user:XPackUser':
        case 'cluster.nodes_stats:MemoryStats':
        case 'search.search:SearchResponse':
          return

        // Have a "type" attribute that identifies the variant
        case 'mapping.types:PropertyBase':
        case 'analysis.token_filters:TokenFilterBase':
          return

        // Single subclass with no additional properties, can probably be removed
        case 'x_pack.watcher.input:HttpInputRequestDefinition':
          return
      }

      modelError(`Non-leaf type cannot be used here: '${fqName}'`)
    }
  }

  // -----------------------------------------------------------------------------------------------
  // Value_Of validations

  function validateValueOf (valueOf: model.ValueOf, openGenerics: Set<string>): void {
    context.push(valueOf.kind)
    switch (valueOf.kind) {
      case 'instance_of':
        validateTypeRef(valueOf.type, valueOf.generics, openGenerics)
        validateIsLeafType(valueOf.type)
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

      case 'named_value_of':
        validateValueOf(valueOf.value, openGenerics)
        break

      case 'user_defined_value':
        // Nothing to validate
        break

      default:
        // @ts-expect-error
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        throw new Error(`Unknown kind: ${valueOf.kind}`)
    }
    context.pop()
  }
}
