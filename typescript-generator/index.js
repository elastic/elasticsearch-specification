'use strict'

const { writeFileSync } = require('fs')
const { join } = require('path')
const { types, endpoints } = require('../output/schema/schema.json')

let definitions = `/*
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

import { Readable as ReadableStream } from 'stream'\n\n`
for (const type of types) {
  definitions += buildType(type) + '\n'
}

writeFileSync(
  join(__dirname, '..', 'output', 'typescript', 'types.ts'),
  definitions,
  'utf8'
)

function buildType (type) {
  switch (type.kind) {
    case 'instance_of':
      return createInstance(type)
    case 'array_of':
      return createArray(type)
    case 'union_of':
      return createUnionOf(type)
    case 'union':
      return createUnion(type)
    case 'dictionary_of':
      return createDictionary(type)
    case 'named_value_of':
      return createNamedValue(type)
    case 'user_defined_value':
      return createUserDefinedValue(type)
    case 'interface':
      return createInterface(type)
    case 'request':
      return createRequest(type)
    case 'enum':
      return createEnum(type)
    case 'type_alias':
      return createAlias(type)
    case 'value':
      return buildType(type.value)
    default:
      throw new Error(`Unhandled kind: ${type.kind}`)
  }
}

function createInstance (type) {
  return `${type.type.name}${buildGenerics(type)}`
}

function createArray (type) {
  return `Array<${buildType(type.value)}>`
}

function createUnionOf (type) {
  return type.items.map(buildType).join(' | ')
}

function createUnion (type) {
  return `export type ${type.name.name} = ${createUnionOf(type)}`
}

function createDictionary (type) {
  return `Record<${buildType(type.key)}, ${buildType(type.value)}>`
}

function createNamedValue (type) {
  return `Record<string, ${buildType(type.value)}>`
}

function createUserDefinedValue () {
  return 'any'
}

function createInterface (type) {
  if (isSpecialInterface(type)) {
    return serializeSpecialInterface(type)
  }
  const isResponse = type.name.name.endsWith('Response')
  let code = `export interface ${type.name.name}${buildGenerics(type)}${buildInherits(type)} {\n`
  for (const property of type.properties) {
    code += `  ${cleanPropertyName(property.name)}${required(property)}: ${buildType(property.type)}\n`
  }
  code += '}\n'
  return code

  function required (property) {
    if (isResponse) return ''
    return property.required ? '' : '?'
  }
}

function createRequest (type) {
  let code = `export interface ${type.name.name}${buildGenerics(type)}${buildInherits(type)} {\n`
  for (const property of type.path) {
    code += `  ${cleanPropertyName(property.name)}${property.required ? '' : '?'}: ${buildType(property.type)}\n`
  }
  for (const property of type.query) {
    code += `  ${cleanPropertyName(property.name)}${property.required ? '' : '?'}: ${buildType(property.type)}\n`
  }
  if (type.body && type.body.kind === 'properties') {
    code += `  body${isBodyRequired() ? '' : '?'}: {\n`
    for (const property of type.body.properties) {
      code += `    ${cleanPropertyName(property.name)}${property.required ? '' : '?'}: ${buildType(property.type)}\n`
    }
    code += '  } | string | Buffer | ReadableStream\n'
  } else if (type.body != null) {
    code += `  body${isBodyRequired() ? '' : '?'}: ${buildType(type.body)} | string | Buffer | ReadableStream\n`
  }
  code += '}\n'
  return code

  function isBodyRequired () {
    for (const endpoint of endpoints) {
      if (endpoint.request.name === type.name.name) {
        return endpoint.requestBodyRequired
      }
    }
    return false
  }
}

function createEnum (type) {
  return `export type ${type.name.name} = ${type.members.map(m => `'${m.name}'`).join(' | ')}\n`
}

function createAlias (type) {
  return `export type ${type.name.name} = ${buildType(type.type)}\n`
}

function buildInherits (type) {
  if (!Array.isArray(type.inherits)) return ''
  return ` extends ${type.inherits.map(buildInheritType).join(', ')}`

  function buildInheritType (type) {
    return `${type.type.name}${buildGenerics(type)}`
  }
}

function buildGenerics (type) {
  if (!Array.isArray(type.generics)) return ''
  return `<${type.generics.map(buildGeneric).join(', ')}>`

  // generics can either be a value/instance_of or a named generics
  function buildGeneric (type) {
    return typeof type === 'string' ? `${type} = unknown` : buildType(type)
  }
}

function cleanPropertyName (name) {
  return name.includes('.') || name.includes('-') || name.match(/^(\d|\W)/)
    ? `'${name}'`
    : name
}

function isSpecialInterface (type) {
  switch (type.name.name) {
    case 'DictionaryResponseBase':
      return true
    default:
      return false
  }
}

function serializeSpecialInterface (type) {
  switch (type.name.name) {
    case 'DictionaryResponseBase':
      return `export interface DictionaryResponseBase<TKey = unknown, TValue = unknown> extends ResponseBase {
  [key: string]: TValue
}\n`
    default:
      throw new Error(`Unknown interface ${type.name.name}`)
  }
}
