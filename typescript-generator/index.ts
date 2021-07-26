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

/* eslint-disable @typescript-eslint/restrict-template-expressions */

import assert from 'assert'
import { writeFileSync, readFileSync } from 'fs'
import { join } from 'path'
import * as M from '../compiler/model/metamodel'

const model: M.Model = JSON.parse(readFileSync(join(__dirname, '..', 'output', 'schema', 'schema.json'), 'utf8'))

// We don't skip `CommonQueryParameters` and `CommonCatQueryParameters`
// behaviors because we ue them for sharing common query parameters
// among most requests.
const skipBehaviors = [
  'AdditionalProperties', 'AdditionalProperty'
]

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

`

for (const type of model.types) {
  definitions += buildType(type) + '\n'
}

writeFileSync(
  join(__dirname, '..', 'output', 'typescript', 'types.ts'),
  definitions,
  'utf8'
)

function buildType (type: M.TypeDefinition): string {
  switch (type.kind) {
    case 'interface':
      return buildInterface(type)
    case 'request':
      return buildRequest(type)
    case 'response':
      return buildResponse(type)
    case 'enum':
      return buildEnum(type)
    case 'type_alias':
      return buildTypeAlias(type)
  }
}

// This function always returns a string, unless we are visiting
// a literal_value, which can also be a number or boolean.
// The 'origin' parameter is used to control recursion when generating shortcut property unions.
function buildValue (type: M.ValueOf, openGenerics?: string[], origin?: M.TypeName): string | number | boolean {
  function equalTypeNames (t1: M.TypeName, t2?: M.TypeName): boolean {
    return t2 != null && (t1.name === t2.name && t1.namespace === t2.namespace)
  }

  function getShortcutType (value: M.ValueOf): M.ValueOf | undefined {
    if (value.kind === 'instance_of') {
      const def = model.types.find(t => equalTypeNames(t.name, value.type))
      if (def?.kind === 'interface' && def.shortcutProperty != null) {
        const shortcutProp = def.properties.find(p => p.name === def.shortcutProperty)
        return shortcutProp?.type
      }
    }
  }

  switch (type.kind) {
    case 'instance_of':
      if (Array.isArray(openGenerics) && openGenerics.includes(type.type.name)) {
        return type.type.name
      }

      if (!equalTypeNames(type.type, origin)) {
        // If this type has a shortcut property, generate it as a union of [type, property's type]
        const shortcutType = getShortcutType(type)
        if (shortcutType != null) {
          const union: M.UnionOf = {
            kind: 'union_of',
            items: [type, shortcutType]
          }
          return buildValue(union, openGenerics, type.type)
        }
      }

      return `${createName(type.type)}${buildGenerics(type.generics, openGenerics)}`
    case 'array_of':
      return type.value.kind === 'union_of' || getShortcutType(type.value) != null
        ? `(${buildValue(type.value, openGenerics)})[]`
        : `${buildValue(type.value, openGenerics)}[]`
    case 'union_of':
      return type.items.map(t => buildValue(t, openGenerics, origin)).join(' | ')
    case 'dictionary_of':
      return `Record<${buildValue(type.key, openGenerics)}, ${buildValue(type.value, openGenerics)}>`
    case 'user_defined_value':
      return 'any'
    case 'literal_value':
      return typeof type.value === 'string' ? `'${type.value}'` : type.value
  }
}

function buildGenerics (types: M.ValueOf[] | M.TypeName[] | undefined, openGenerics?: string[], noDefault = false): string {
  if (!Array.isArray(types) || types.length === 0) return ''
  return `<${types.map(buildGeneric).join(', ')}>`

  // generics can either be a value/instance_of or a named generics
  function buildGeneric (type: M.ValueOf | M.TypeName): string | number | boolean {
    if (isTypeName(type)) {
      return noDefault ? type.name : `${type.name} = unknown`
    } else {
      if (type.kind === 'instance_of' && Array.isArray(openGenerics) && openGenerics.includes(type.type.name)) {
        return type.type.name
      }
      return buildValue(type, openGenerics)
    }
  }

  function isTypeName (type: any): type is M.TypeName {
    return typeof type.name === 'string' && typeof type.namespace === 'string'
  }
}

function buildInherits (type: M.Interface | M.Request | M.Response, openGenerics?: string[]): string {
  const inherits = (type.inherits != null ? [type.inherits] : []).filter(type => !skipBehaviors.includes(type.type.name))
  const interfaces = (type.implements ?? []).filter(type => !skipBehaviors.includes(type.type.name))
  const behaviors = (type.behaviors ?? []).filter(type => !skipBehaviors.includes(type.type.name))
  const extendAll = inherits.concat(interfaces).concat(behaviors)
  if (extendAll.length === 0) return ''
  return ` extends ${extendAll.map(buildInheritType).join(', ')}`

  function buildInheritType (type: M.Inherits): string {
    return `${createName(type.type)}${buildGenerics(type.generics, openGenerics)}`
  }
}

function buildInterface (type: M.Interface): string {
  if (implementsBehavior(type)) {
    return buildBehaviorInterface(type)
  }

  const openGenerics = type.generics?.map(t => t.name) ?? []
  let code = `export interface ${createName(type.name)}${buildGenerics(type.generics, openGenerics)}${buildInherits(type, openGenerics)} {\n`
  for (const property of type.properties) {
    code += `  ${cleanPropertyName(property.name)}${required(property)}: ${buildValue(property.type, openGenerics)}\n`
    if (Array.isArray(property.aliases)) {
      for (const alias of property.aliases) {
        code += `  ${cleanPropertyName(alias)}${required(property)}: ${buildValue(property.type, openGenerics)}\n`
      }
    }
  }
  code += '}\n'

  return code

  function required (p: M.Property): string {
    return p.required ? '' : '?'
  }
}

function implementsBehavior (type: M.Interface): boolean {
  if (Array.isArray(type.attachedBehaviors)) {
    // assume types ending with Base are abstract
    // and are not the ones doing the implements
    if (type.name.name.endsWith('Base')) {
      return false
    }
    return type.attachedBehaviors.length > 0
  }
  return type.name.name === 'DictionaryResponseBase'
}

function buildBehaviorInterface (type: M.Interface): string {
  if (Array.isArray(type.attachedBehaviors)) {
    if (type.attachedBehaviors.includes('AdditionalProperties') || type.attachedBehaviors.includes('AdditionalProperty')) {
      return serializeAdditionalPropertiesType(type)
    }
  }

  switch (type.name.name) {
    case 'DictionaryResponseBase':
      return `export interface DictionaryResponseBase<TKey = unknown, TValue = unknown> {
  [key: string]: TValue
}\n`
    default:
      throw new Error(`Unknown interface ${type.name.name}`)
  }
}

function serializeAdditionalPropertiesType (type: M.Interface): string {
  const dictionaryOf = lookupBehavior(type, 'AdditionalProperties') ?? lookupBehavior(type, 'AdditionalProperty')
  if (dictionaryOf == null) throw new Error(`Unknown implements ${type.name.name}`)
  let code = `export interface ${createName(type.name)}Keys${buildGenerics(type.generics)}${buildInherits(type)} {\n`

  function required (property: M.Property): string {
    return property.required ? '' : '?'
  }

  const openGenerics = type.generics?.map(t => t.name) ?? []
  for (const property of type.properties) {
    code += `  ${cleanPropertyName(property.name)}${required(property)}: ${buildValue(property.type, openGenerics)}\n`
  }
  code += '}\n'
  code += `export type ${createName(type.name)}${buildGenerics(type.generics, openGenerics)} = ${createName(type.name)}Keys${buildGenerics(type.generics, openGenerics, true)} |\n`
  code += `    { ${buildIndexer(dictionaryOf, openGenerics)} }\n`
  return code

  function buildIndexer (type: M.Inherits, openGenerics: string[]): string {
    if (!Array.isArray(type.generics)) return ''
    assert(type.generics.length === 2)
    return `[property: string]: ${buildGeneric(type.generics[1])}`

    // generics can either be a value/instance_of or a named generics
    function buildGeneric (type: M.ValueOf): string | number | boolean {
      const t = typeof type === 'string' ? type : buildValue(type, openGenerics)
      // indexers do not allow type aliases so here we translate known
      // type aliases back to string
      return t === 'AggregateName' ? 'string' : t
    }
  }
}

function lookupBehavior (type: M.Interface, name: string): M.Inherits | null {
  if (!type.attachedBehaviors?.includes(name)) return null // eslint-disable-line
  if (Array.isArray(type.behaviors)) {
    const behavior = type.behaviors.find(i => i.type.name === name)
    if (behavior != null) return behavior
  }
  if (type.inherits == null) return null
  const parentType = model.types.find(t => t.name.name === type.inherits?.type.name)
  if (parentType == null) return null
  if (parentType.kind === 'interface') {
    return lookupBehavior(parentType, name)
  }
  throw new Error('Should inherit from an interface')
}

function buildRequest (type: M.Request): string {
  const openGenerics = type.generics?.map(t => t.name) ?? []
  let code = `export interface ${createName(type.name)}${buildGenerics(type.generics, openGenerics)}${buildInherits(type, openGenerics)} {\n`
  for (const property of type.path) {
    code += `  ${cleanPropertyName(property.name)}${property.required ? '' : '?'}: ${buildValue(property.type, openGenerics)}\n`
  }

  // It might happen that the same property is present in both
  // path and query parameters, we should keep only one
  const pathPropertiesNames = type.path.map(property => property.name)
  for (const property of type.query) {
    if (pathPropertiesNames.includes(property.name)) continue
    code += `  ${cleanPropertyName(property.name)}${property.required ? '' : '?'}: ${buildValue(property.type, openGenerics)}\n`
  }
  if (type.body.kind === 'properties' && type.body.properties.length > 0) {
    code += `  body${isBodyRequired() ? '' : '?'}: {\n`
    for (const property of type.body.properties) {
      code += `    ${cleanPropertyName(property.name)}${property.required ? '' : '?'}: ${buildValue(property.type, openGenerics)}\n`
    }
    code += '  }\n'
  } else if (type.body.kind === 'value') {
    code += `  body${isBodyRequired() ? '' : '?'}: ${buildValue(type.body.value, openGenerics)}\n`
  }
  code += '}\n'
  return code

  function isBodyRequired (): boolean {
    for (const endpoint of model.endpoints) {
      if ((endpoint.request != null) && endpoint.request.name === type.name.name) {
        return endpoint.requestBodyRequired
      }
    }
    return false
  }
}

function buildResponse (type: M.Response): string {
  const openGenerics = type.generics?.map(t => t.name) ?? []

  if (type.body.kind === 'properties') {
    let code = `export interface ${createName(type.name)}${buildGenerics(type.generics, openGenerics)}${buildInherits(type, openGenerics)} {\n`
    for (const property of type.body.properties) {
      code += `  ${cleanPropertyName(property.name)}${property.required ? '' : '?'}: ${buildValue(property.type, openGenerics)}\n`
    }
    code += '}\n'
    return code
  } else if (type.body.kind === 'no_body') {
    return `export type ${createName(type.name)}${buildGenerics(type.generics, openGenerics)} = boolean\n`
  } else {
    return `export type ${createName(type.name)}${buildGenerics(type.generics, openGenerics)} = ${buildValue(type.body.value, openGenerics)}\n`
  }
}

function buildEnum (type: M.Enum): string {
  return `export type ${createName(type.name)} = ${type.members.map(m => `'${m.name}'`).join(' | ')}\n`
}

function buildTypeAlias (type: M.TypeAlias): string {
  const openGenerics = type.generics?.map(t => t.name) ?? []
  return `export type ${createName(type.name)}${buildGenerics(type.generics)} = ${buildValue(type.type, openGenerics)}\n`
}

function createName (type: M.TypeName): string {
  if (type.namespace === 'internal') return type.name
  const namespace = strip(type.namespace).replace(/_([a-z])/g, k => k[1].toUpperCase())
  return `${namespace.split('.').map(TitleCase).join('')}${type.name}`

  function strip (namespace: string): string {
    if (namespace.startsWith('_global')) {
      if (namespace.includes('_types')) {
        return namespace.slice(8).split('.').filter(n => n !== '_types').join('.')
      }
      return namespace.slice(8)
    }
    if (namespace.includes('_types')) {
      return namespace.split('.').filter(n => n !== '_types').join('.')
    }
    return namespace
  }

  function TitleCase (str: string): string {
    if (str.length === 0) return ''
    return str[0].toUpperCase() + str.slice(1)
  }
}

function cleanPropertyName (name: string): string {
  return name.includes('.') || name.includes('-') || (name.match(/^(\d|\W)/) != null)
    ? `'${name}'`
    : name
}
