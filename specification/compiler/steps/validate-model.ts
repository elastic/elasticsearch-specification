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

enum TypeDefKind {
  type,
  request,
  behavior
}

/**
 * Validates the internal consistency of the model (doesn't check the json spec)
 *
 * Any inconsistency is logged as an error.
 */
export default function validateModel (apiModel: model.Model, failHard: boolean): model.Model {
  console.log('Model validation: start')

  // Returns the fully-qualified name of a type name
  function fqn (name: model.TypeName): string {
    return `${name.namespace}:${name.name}`
  }

  function sameTypeName (n1: model.TypeName, n2: model.TypeName): boolean {
    return n1.namespace === n2.namespace && n1.name === n2.name
  }

  let errorCount = 0

  // Graph traversal context, for logs
  let context: string[] = []

  function modelError (msg: string): void {
    console.log(context.join(' / '), '-', msg)
    errorCount++
  }

  // Type definitions by name
  const typeDefByName = new Map<string, model.TypeDefinition>()

  for (const type of apiModel.types) {
    typeDefByName.set(fqn(type.name), type)
  }

  // Register builtin types
  for (const name of [
    'string', 'boolean', 'number', 'object',
    'Array' // FIXME: could we get rid of this and use an 'array_of' value?

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

  function getTypeDef (name: model.TypeName): model.TypeDefinition | undefined {
    return typeDefByName.get(fqn(name))
  }

  // Top-level types that are referenced with no generic parameters
  const topLevelTypes = new Set<string>()

  for (const endpoint of apiModel.endpoints) {
    if (endpoint.request !== null) topLevelTypes.add(fqn(endpoint.request))
    if (endpoint.response !== null) topLevelTypes.add(fqn(endpoint.response))
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

  // Alright, let's go!
  apiModel.endpoints.forEach(validateEndpoint)

  // Count types that were not visited in the graph traversal
  let danglingTypesCount = 0
  for (const type of apiModel.types) {
    if (!typesSeen.has(fqn(type.name))) {
      danglingTypesCount++
    }
  }
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
    if (endpoint.request == null || endpoint.response == null) {
      modelError(`Endpoint '${endpoint.name}' skipped because of missing request or response`)
      return
    }

    context.push(`Endpoint ${endpoint.name}`)

    context.push('Request')
    validateTypeRef(endpoint.request, undefined, TypeDefKind.request)
    validateIsLeafType(endpoint.request)

    // Request path properties and url template propeties should be the same
    const reqType = getTypeDef(endpoint.request)
    if (reqType?.kind === 'request') {
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

    context.pop()

    context.push('Response')
    validateTypeRef(endpoint.response)
    validateIsLeafType(endpoint.request)
    context.pop()

    context.pop()
  }

  /**
   * Validate a type reference.
   *
   * @param name the type's name
   * @param generics generic parameter for this reference
   * @param kind what do we expect this type to be?
   */
  function validateTypeRef (name: model.TypeName, generics?: model.ValueOf[], kind: TypeDefKind = TypeDefKind.type): void {
    const typeDef = kind === TypeDefKind.behavior ? behaviorByName.get(fqn(name)) : getTypeDef(name)
    if (typeDef == null) {
      modelError(`No type definition for '${fqn(name)}'`)
      return
    }

    validateTypeDef(typeDef, kind)

    // Validate generic parameters
    if (topLevelTypes.has(fqn(name))) {
      // Top-level types are referenced in endpoints with no generic parameters
      if (generics != null && generics.length > 0) {
        modelError('Top level type should not be referenced with generic parameter values')
      }
    } else {
      const genericsCount = generics?.length ?? 0

      // Only request and interface accept generic parameters
      switch (typeDef.kind) {
        case 'request':
        case 'interface': {
          const typeGenericsCount = typeDef.generics?.length ?? 0
          if (genericsCount !== typeGenericsCount) {
            modelError(`Expected ${typeGenericsCount} generic parameters but got ${genericsCount}`)
          }
        }
          break
        default:
          if (genericsCount !== 0) {
            modelError(`Type kind '${typeDef.kind}' doesn't accept generic parameters`)
          }
      }

      context.push('Generics')
      for (const v of generics ?? []) {
        validateValueOf(v)
      }
      context.pop()
    }
  }

  // -----------------------------------------------------------------------------------------------
  // Type definitions validations

  function validateTypeDef (typeDef: model.TypeDefinition, kind: TypeDefKind): void {
    if (typesSeen.has(fqn(typeDef.name))) {
      // Already visited
      return
    }
    typesSeen.add(fqn(typeDef.name))

    if (kind === TypeDefKind.request) {
      if (typeDef.kind !== 'request') {
        modelError(`Expected a request but type is a '${typeDef.kind}'`)
      }
    } else {
      if (typeDef.kind === 'request') {
        modelError('Type is a request, which should not be used for properties')
      }
    }

    // Type definitions are top-level elements
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
    }

    // Restore previous context
    context = oldContext
  }

  function validateRequest (typeDef: model.Request): void {
    validateInherits(typeDef.inherits)
    validateImplements(typeDef.implements)
    validateBehaviors(typeDef)

    // Note: we validate identifier/name uniqueness independently in the path, query and body as there are some
    // valid overlaps, with some parameters that can also be represented as body properties.
    // Client generators will have to take care of this.

    context.push('path')
    validateProperties(typeDef.path)
    context.pop()

    context.push('query')
    validateProperties(typeDef.query)
    context.pop()

    if (typeDef.body != null) {
      context.push('body')
      switch (typeDef.body.kind) {
        case 'properties':
          validateProperties(typeDef.body.properties)
          break
        case 'value':
          validateValueOf(typeDef.body.value)
          break
      }
      context.pop()
    }
  }

  function validateInterface (typeDef: model.Interface): void {
    validateImplements(typeDef.implements)
    validateInherits(typeDef.inherits)
    validateBehaviors(typeDef)
    validateProperties(typeDef.properties)
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
    // FIXME: do we really need generics on a type alias? An alias is semantically similar to a 1-member union
    // and union doesn't have generic parameters for its members. Or is this missing in union?
    validateValueOf(typeDef.type, typeDef.generics)
  }

  function validateUnion (typeDef: model.Union): void {
    for (const item of typeDef.items) {
      validateValueOf(item)
    }
  }

  // -----------------------------------------------------------------------------------------------
  // Constituents of type definitions

  function validateInherits (parents?: model.Inherits[]): void {
    if (parents == null || parents.length === 0) return

    context.push('Inherits')
    // FIXME: remove this check once metamodel only allows 1 inherit
    if (parents.length > 1) {
      modelError('Multiple inheritance is not allowed')
    }

    for (const parent of parents) {
      validateTypeRef(parent.type, parent.generics)
    }
    context.pop()
  }

  function validateImplements (parents?: model.Implements[]): void {
    if (parents == null || parents.length === 0) return

    context.push('Implements')
    for (const parent of parents) {
      validateTypeRef(parent.type, parent.generics)
    }
    context.pop()
  }

  function validateBehaviors (typeDef: model.Request | model.Interface): void {
    if (typeDef.behaviors != null && typeDef.behaviors.length > 0) {
      context.push('Behaviors')
      for (const parent of typeDef.behaviors) {
        validateTypeRef(parent.type, parent.generics)
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

  function validateProperties (props: model.Property[]): void {
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
      validateValueOf(prop.type)
      context.pop()
    }
  }

  //
  function validateIsLeafType (type: model.TypeName): void {
    if (parentTypes.has(fqn(type))) {
      modelError(`Abstract type cannot be used here: '${fqn(type)}'`)
    }
  }

  // -----------------------------------------------------------------------------------------------
  // Value_Of validations

  function validateValueOf (valueOf: model.ValueOf, generics?: model.ValueOf[]): void {
    switch (valueOf.kind) {
      case 'instance_of':
        validateTypeRef(valueOf.type, valueOf.generics)
        validateIsLeafType(valueOf.type)
        break

      case 'array_of':
        validateValueOf(valueOf.value)
        break

      case 'union_of':
        for (const item of valueOf.items) {
          validateValueOf(item)
        }
        break

      case 'dictionary_of':
        validateValueOf(valueOf.key)
        validateValueOf(valueOf.value)
        break

      case 'named_value_of':
        validateValueOf(valueOf.value)
        break

      case 'user_defined_value':
        // Nothing to validate
        break
    }
  }
}
