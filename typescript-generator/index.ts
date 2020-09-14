import fs from 'fs'
import path from 'path'
import { Specification } from '../specification/src/api-specification'
import Domain from '../specification/src/domain'

const specification = Specification.load()
const stableApis = [
  'IndexRequest',
  'IndexResponse',
  'CreateRequest',
  'CreateResponse',
  'DeleteRequest',
  'DeleteResponse',
  'UpdateRequest',
  'UpdateResponse',
  'GetRequest',
  'GetResponse',
  'SearchRequest'
]
const skipInterface = [
  'ResponseBase',
  'DictionaryResponseBase'
]

let typeDefinitions = `/*
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

declare namespace T {\n`

for (const type of specification.types) {
  if (skipInterface.includes(type.name)) {
    continue
  } else if (type instanceof Domain.StringAlias) {
    typeDefinitions += buildStringAlias(type) + '\n\n'
  } else if (type instanceof Domain.NumberAlias) {
    typeDefinitions += buildNumberAlias(type) + '\n\n'
  } else if (type instanceof Domain.UnionAlias) {
    typeDefinitions += buildUnionAlias(type) + '\n\n'
  } else if (type instanceof Domain.RequestInterface) {
    typeDefinitions += buildRequestInterface(type) + '\n\n'
  } else if (type instanceof Domain.Interface) {
    typeDefinitions += buildInterface(type) + '\n\n'
  } else if (type instanceof Domain.Enum) {
    typeDefinitions += buildEnum(type) + '\n\n'
  }
}

typeDefinitions = typeDefinitions.slice(0, -2)
typeDefinitions += '\n}\n\nexport default T'

const exportName = 'types-' + process.env.ENUM_AS_UNION ? 'for-validation' : '';

fs.writeFileSync(
  path.join(__dirname, '..', 'output', 'typescript', `${exportName}.ts`),
  typeDefinitions
)

function buildStringAlias (type: Domain.StringAlias): string {
  return `  export type ${type.name} = string`
}

function buildNumberAlias (type: Domain.NumberAlias): string {
  return `  export type ${type.name} = number`
}

function buildUnionAlias (type: Domain.UnionAlias): string {
  return `  export type ${type.name} = ${unwrapType(type.wraps)}`
}

function buildInterface (type: Domain.Interface): string {
  let code = generateComment(type)
  code += `  export interface ${type.name}${buildGeneric(type)}${buildInherits(type)} {\n`
  for (const property of type.properties) {
    if (property.type === undefined) continue
    code += `    ${cleanPropertyName(property.name)}${property.nullable ? '?' : ''}: ${unwrapType(property.type)}\n`
  }
  code += '  }'
  return code
}

function buildRequestInterface (type: Domain.RequestInterface): string {
  let code = generateComment(type)
  code += `  export interface ${type.name}${buildGeneric(type)}${buildInherits(type)} {\n`
  if (type.path !== undefined) {
    for (const property of type.path) {
      if (property.type === undefined) continue
      code += `    ${cleanPropertyName(property.name)}${property.nullable ? '?' : ''}: ${unwrapType(property.type)}\n`
    }
  }

  if (type.queryParameters !== undefined) {
    for (const property of type.queryParameters) {
      if (property.type === undefined) continue
      code += `    ${cleanPropertyName(property.name)}${property.nullable ? '?' : ''}: ${unwrapType(property.type)}\n`
    }
  }

  if (type.body !== undefined) {
    if (Array.isArray(type.body)) {
      code += '    body?: {\n'
      for (const property of type.body) {
        if (property.type === undefined) continue
        code += `      ${cleanPropertyName(property.name)}${property.nullable ? '?' : ''}: ${unwrapType(property.type)}\n`
      }
      code += '    }\n'
    } else {
      code += `    body?: ${unwrapType(type.body)}\n`
    }
  }

  code += '  }'
  return code
}

function buildEnum (type: Domain.Enum): string {
  const types = type.members.map(member => {
    if (member.stringRepresentation === 'true' || member.stringRepresentation === 'false') {
      return member.stringRepresentation
    }
    return `"${member.stringRepresentation}"`
  })
  return `  export type ${type.name} = ${types.join(' | ')}`
}

function unwrapType (type: Domain.ArrayOf | Domain.Dictionary | Domain.Type | Domain.UnionOf | Domain.ImplementsReference | Domain.SingleKeyDictionary): string {
  if (type instanceof Domain.ArrayOf) {
    return `${unwrapType(type.of)}[]`
  } else if (type instanceof Domain.Dictionary) {
    return `Record<${unwrapType(type.key)}, ${unwrapType(type.value)}>`
  } else if (type instanceof Domain.SingleKeyDictionary) {
    return `Record<string, ${unwrapType(type.value)}>`
  } else if (type instanceof Domain.UnionOf) {
    return type.items.map(unwrapType).join(' | ')
  } else if (type instanceof Domain.ImplementsReference) {
    if (type.type.name === 'DictionaryResponseBase') {
      return `Record<${type.closedGenerics.map(unwrapType).join(', ')}>`
    // TODO: if the closedGenerics is 2 more than there is a generic,
    //       otherwise is just a repetition of the type?
    } else if (Array.isArray(type.closedGenerics) && type.closedGenerics.length > 1) {
      return `${type.type.name}<${type.closedGenerics.map(unwrapType).join(', ')}>`
    }
    return type.type.name
  } else {
    if (Array.isArray(type.closedGenerics) && type.closedGenerics.length > 0) {
      return `${type.name}<${type.closedGenerics.map(unwrapType).join(', ')}>`
    }
    return type.name
  }
}

function buildGeneric (type: Domain.Interface | Domain.RequestInterface): string {
  if (Array.isArray(type.openGenerics) && type.openGenerics.length > 0) {
    return `<${type.openGenerics.join(', ')}>`
  }
  return ''
}

function buildInherits (type: Domain.Interface | Domain.RequestInterface): string {
  if (Array.isArray(type.inherits) && type.inherits.length > 0) {
    if (type.inherits.length === 1 && type.inheritsFromUnresolved.ResponseBase) {
      return ''
    }
    let code = ' extends '
    for (const inherit of type.inherits) {
      code += unwrapType(inherit) + ', '
    }
    return code.slice(0, -2)
  }
  return ''
}

function cleanPropertyName (name: string): string {
  return name.includes('.') || name.includes('-') || name.match(/^(\d|\W)/)
    ? `"${name}"`
    : name
}

function generateComment (type: Domain.Interface | Domain.RequestInterface): string {
  if (stableApis.includes(type.name)) {
    let comment = '  /**\n'
    comment += '   * @description Stability: STABLE\n'
    comment += '   */\n'
    return comment
  } else if (type.name.endsWith('Request') ||type.name.endsWith('Response')) {
    let comment = '  /**\n'
    comment += '   * @description Stability: UNSTABLE\n'
    comment += '   */\n'
    return comment
  } else {
    return ''
  }
}
