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

import {
  Interface,
  Model,
  TypeAlias,
  TypeDefinition,
  TypeName,
  ValueOf,
  Request,
  Response,
  Body,
  InstanceOf, Inherits, Property
} from '../model/metamodel'
import { readFile, writeFile } from 'fs/promises'
import stringify from 'safe-stable-stringify'
import { sortTypeDefinitions } from '../model/utils'
import { argv } from 'zx'
import { join } from 'path'

/**
 * Expand all generics by creating new concrete types for every instanciation of a generic type.
 *
 * The resulting model has no generics anymore. Top-level generic parameters (e.g. SearchRequest's TDocument) are
 * replaced by user_defined_data.
 *
 * @param inputModel the input model
 * @return a new model with generics expanded
 */
export function expandGenerics (inputModel: Model): Model {
  const typesSeen = new Set<string>()

  const types = new Array<TypeDefinition>()

  const inputTypeByName = new Map<string, TypeDefinition>()

  for (const type of inputModel.types) {
    inputTypeByName.set(nameKey(type), type)
  }

  /**
   * If a type has not already been seen, create it.
   * Note: this also set the `name` property of the result of `build()` (you don't have to care about setting it when
   * cloning a type definition).
   */
  function addIfNotSeen (name: TypeName, build: () => TypeDefinition): TypeName {
    const key = nameKey(name)
    if (!typesSeen.has(key)) {
      typesSeen.add(key)
      const type = build()
      type.name = name
      types.push(type)
    }

    return name
  }

  /**
   * Get a type by name in the input model, and fails if it doesn't exist
   */
  function getType (name: TypeName): TypeDefinition {
    const result = inputTypeByName.get(nameKey(name))
    if (result === undefined) {
      throw Error(`Type ${nameKey(name)} does not exist.`)
    } else {
      return result
    }
  }

  /**
   * Expand a root type (request or response) by replacing its generic parameters with user defined data
   */
  function expandRootType (name: TypeName | null): void {
    if (name == null) {
      return
    }

    const type = getType(name)
    if (type.kind !== 'request' && type.kind !== 'response') {
      throw Error(`${nameKey(name)} should be a request or a response`)
    }

    const userDefined: ValueOf = {
      kind: 'user_defined_value'
    }

    const typeParams = (type.generics ?? []).map(x => userDefined)
    expandType(type.name, typeParams)
  }

  /**
   * Expand a type, given concrete values for its generic parameters
   */
  function expandType (name: TypeName, params: ValueOf[]): TypeName {
    if (name.namespace === '_builtins') {
      return name
    }

    const type = getType(name)

    switch (type.kind) {
      case 'enum':
        // Nothing to do
        return addIfNotSeen(type.name, () => type)

      case 'type_alias':
        return expandTypeAlias(type, params)

      case 'request':
        return expandRequest(type, params)

      case 'response':
        return expandResponse(type, params)

      case 'interface':
        return expandInterface(type, params)
    }
  }

  /**
   * Expand an interface definition.
   *
   * @param type the type definition
   * @param params concrete values for the type's generic parameters, if any
   */
  function expandInterface (type: Interface, params: ValueOf[]): TypeName {
    return addIfNotSeen(expandedName(type, params), () => {
      const result = { ...type }

      const mappings = genericParamMapping(type.generics, params)

      result.inherits = expandInherits(result.inherits, mappings)

      if (result.behaviors != null) {
        // We keep the generic parameters, but expand their value
        result.behaviors = result.behaviors.map(b => {
          return {
            type: b.type,
            generics: (b.generics ?? []).map(g => expandValueOf(g, mappings))
          }
        })
      }

      result.properties = expandProperties(result.properties, mappings)
      result.generics = undefined
      return result
    })
  }

  /**
   * Expand an inherits clause.
   *
   * @param inherits the inherits clause
   * @param mappings mapping of generic parameter names to concrete values
   */
  function expandInherits (inherits: Inherits | undefined, mappings: Map<string, ValueOf>): Inherits | undefined {
    if (inherits == null) {
      return undefined
    }
    // Similar to InstanceOf
    const expanded = expandValueOf(
      {
        kind: 'instance_of',
        type: inherits.type,
        generics: inherits.generics
      },
      mappings
    ) as InstanceOf

    return {
      type: expanded.type,
      generics: undefined
    }
  }

  /**
   * Expand a type alias
   *
   * @param alias the type definition
   * @param params concrete values for the type's generic parameters, if any
   */
  function expandTypeAlias (alias: TypeAlias, params: ValueOf[]): TypeName {
    return addIfNotSeen(expandedName(alias, params), () => {
      const result = { ...alias }
      result.type = expandValueOf(alias.type, genericParamMapping(alias.generics, params))
      result.generics = undefined
      return result
    })
  }

  /**
   * Expand a request definition
   *
   * @param req the type definition
   * @param params concrete values for the type's generic parameters, if any
   */
  function expandRequest (req: Request, params: ValueOf[]): TypeName {
    // Do not rename requests, even if they have generic params
    return addIfNotSeen(req.name, () => {
      const mappings = genericParamMapping(req.generics, params)
      const result = { ...req }
      result.inherits = expandInherits(result.inherits, mappings)
      result.path = expandProperties(result.path, mappings)
      result.query = expandProperties(result.query, mappings)
      result.body = expandBody(req.body, genericParamMapping(req.generics, params))
      result.generics = undefined
      return result
    })
  }

  /**
   * Expand a response definition
   *
   * @param resp the type definition
   * @param params concrete values for the type's generic parameters, if any
   */
  function expandResponse (resp: Response, params: ValueOf[]): TypeName {
    // Do not rename responses, even if they have generic params
    return addIfNotSeen(resp.name, () => {
      const result = { ...resp }
      result.body = expandBody(resp.body, genericParamMapping(resp.generics, params))
      result.generics = undefined
      return result
    })
  }

  /**
   * Expand an array of properties
   *
   * @param properties the properties
   * @param mappings mapping of generic parameter names to concrete values
   */
  function expandProperties (properties: Property[], mappings: Map<string, ValueOf>): Property[] {
    return properties.map(prop => {
      const newProp = { ...prop }
      newProp.type = expandValueOf(prop.type, mappings)
      return newProp
    })
  }

  /**
   * Expand a request or response body
   *
   * @param body the body definition
   * @param mappings mapping of generic parameter names to concrete values
   */
  function expandBody (body: Body, mappings: Map<string, ValueOf>): Body {
    switch (body.kind) {
      case 'no_body':
        return body

      case 'properties': {
        return {
          kind: 'properties',
          properties: expandProperties(body.properties, mappings)
        }
      }

      case 'value': {
        return {
          kind: 'value',
          value: expandValueOf(body.value, mappings),
          codegenName: body.codegenName
        }
      }
    }
  }

  /**
   * Expand a value
   *
   * @param value the value
   * @param mappings mapping of generic parameter names to concrete values
   */
  function expandValueOf (value: ValueOf, mappings: Map<string, ValueOf>): ValueOf {
    switch (value.kind) {
      case 'array_of':
        return {
          kind: 'array_of',
          value: expandValueOf(value.value, mappings)
        }

      case 'dictionary_of':
        return {
          kind: 'dictionary_of',
          key: expandValueOf(value.key, mappings),
          value: expandValueOf(value.value, mappings),
          singleKey: value.singleKey
        }

      case 'instance_of': {
        // If this is a generic parameter, return its mapping
        const mapping = mappings.get(nameKey(value.type))
        if (mapping !== undefined) {
          return mapping
        }

        // If the type is instanciated with generic parameters, expand them
        const params = (value.generics ?? []).map(g => expandValueOf(g, mappings))

        return {
          kind: 'instance_of',
          type: expandType(value.type, params),
          generics: undefined
        }
      }

      case 'literal_value':
        return value

      case 'union_of':
        return {
          kind: 'union_of',
          items: value.items.map(item => expandValueOf(item, mappings))
        }

      case 'user_defined_value':
        return value
    }
  }

  /**
   * Return a name with generic parameter names inlined
   */
  function expandedName (type: Interface | TypeAlias, params: ValueOf[]): TypeName {
    let localName = type.name.name

    type.generics?.forEach((paramName, i) => {
      const param = params[i]
      if (param.kind === 'user_defined_value') {
        return
      }
      localName = localName + valueTypeName(params[i])
    })

    return {
      namespace: type.name.namespace,
      name: localName
    }
  }

  for (const endpoint of inputModel.endpoints) {
    expandRootType(endpoint.request)
    expandRootType(endpoint.response)
  }

  sortTypeDefinitions(types)

  return {
    _info: inputModel._info,
    endpoints: inputModel.endpoints,
    types: types
  }
}

/**
 * Create a mapping from generic type names to concrete values
 */
function genericParamMapping (generics: TypeName[] | undefined, params: ValueOf[]): Map<string, ValueOf> {
  const mapping = new Map<string, ValueOf>();
  (generics ?? []).forEach((name, i) => {
    mapping.set(nameKey(name), params[i])
  })

  return mapping
}

/**
 * A value's name, to be appended to the name of a type that has generic parameters
 */
function valueTypeName (value: ValueOf): string {
  switch (value.kind) {
    case 'literal_value':
      return value.value.toString()

    case 'user_defined_value':
      return 'UserDefined'

    case 'array_of':
      return 'Array' + valueTypeName(value.value)

    case 'dictionary_of':
      // Don't care about key, it's always aliased to string
      return 'Dict' + valueTypeName(value.value)

    case 'union_of':
      return 'Union' + value.items.map(v => valueTypeName(v)).join()

    case 'instance_of':
      return value.type.name
  }
}

/**
 * Return a string representing a type name, to be used as Map keys
 */
function nameKey (t: TypeDefinition | TypeName): string {
  if (isTypeDef(t)) {
    return nameKey(t.name)
  } else {
    return t.namespace + ':' + t.name
  }
}

function isTypeDef (t: any): t is TypeDefinition {
  return t.kind !== undefined
}

async function expandGenericsFromFile (inPath: string, outPath: string): Promise<void> {
  const inputText = await readFile(
    inPath,
    { encoding: 'utf8' }
  )

  const inputModel = JSON.parse(inputText)
  const outputModel = expandGenerics(inputModel)

  await writeFile(
    outPath,
    stringify(outputModel, null, 2),
    'utf8'
  )
}

const inputPath = argv.input ?? join(__dirname, '..', '..', '..', 'output', 'schema', 'schema.json')
const outputPath = argv.output ?? join(__dirname, '..', '..', '..', 'output', 'schema', 'schema-no-generics.json')

expandGenericsFromFile(inputPath, outputPath)
  .catch(reason => console.error(reason))
  .finally(() => console.log('Done, expanded schema is at', outputPath))
