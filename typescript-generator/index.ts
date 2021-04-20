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

import assert from 'assert'
import { writeFileSync, readFileSync } from 'fs'
import { join } from 'path'
import * as M from '../compiler/model/metamodel'

const model: M.Model = JSON.parse(readFileSync(join(__dirname, '..', 'output', 'schema', 'schema.json'), 'utf8'))

// We don't skip `CommonQueryParameters` and `CommonCatQueryParameters`
// behaviors because we ue them for sharing common query parameters
// among most requests.
const skipBehaviors = [
  'ArrayResponseBase',
  'EmptyResponseBase',
  'AdditionalProperties'
]

const types: Array<{ type: M.TypeName, def: string }> = []
for (const type of model.types) {
  types.push({
    type: type.name,
    def: buildType(type)
  })
}

types.sort((a, b) => {
  if (a.type.namespace > b.type.namespace) return 1
  if (a.type.namespace < b.type.namespace) return -1
  return 0
})

const namespaces = types.reduce((acc, val) => {
  acc[val.type.namespace] = acc[val.type.namespace] ?? []
  acc[val.type.namespace].push(val.def)
  return acc
}, {})

const topLevel = [...new Set(Object.keys(namespaces).map(n => n.split('.').shift()))]
const multiple = Object.keys(namespaces).filter(n => n.split('.').length > 1)
let definitions = ''
for (const ns of topLevel) {
  definitions += buildNamespaces(ns as string, ns as string)
}

writeFileSync(
  join(__dirname, '..', 'output', 'typescript', 'types.ts'),
  definitions,
  'utf8'
)

function buildNamespaces (namespace: string, current: string): string {
  const ns = multiple
    .filter(n => n.startsWith(namespace))
    .map(n => n.split('.').slice(0, namespace.split('.').length + 1).join('.'))
    .filter(n => n !== namespace)
    .filter((n, i, arr) => arr.indexOf(n) === i)

  let code = `\nexport ${namespace.split('.').length === 1 ? 'declare ' : ''}namespace ${createName(current)} {\n`

  if (Array.isArray(namespaces[namespace]) && namespaces[namespace].length > 0) {
    code += namespaces[namespace].join('\n')
  }

  if (ns.length > 0) {
    for (const n of ns) {
      code += buildNamespaces(n, n.split('.').pop() as string)
    }
  }

  code += '\n}\n'

  return code
}

function buildType (type: M.TypeDefinition): string {
  switch (type.kind) {
    case 'interface':
      return buildInterface(type)
    case 'request':
      return buildRequest(type)
    case 'enum':
      return buildEnum(type)
    case 'type_alias':
      return buildTypeAlias(type)
  }
}

// This function always returns a string, unless we are visitin
// a literal_value, which can also be a number or boolean.
function buildValue (type: M.ValueOf, openGenerics?: string[]): string | number | boolean {
  switch (type.kind) {
    case 'instance_of':
      if (Array.isArray(openGenerics) && openGenerics.includes(type.type.name)) {
        return type.type.name
      }
      return `${createName(type.type)}${buildGenerics(type.generics, openGenerics)}`
    case 'array_of':
      return `${buildValue(type.value, openGenerics)}[]`
    case 'union_of':
      return type.items.map(t => buildValue(t, openGenerics)).join(' | ')
    case 'dictionary_of':
      return `Record<${buildValue(type.key, openGenerics)}, ${buildValue(type.value, openGenerics)}>`
    case 'named_value_of':
      return `Record<string, ${buildValue(type.value, openGenerics)}>`
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
  function buildGeneric (type: M.ValueOf | M.TypeName) {
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

function buildInherits (type: M.Interface | M.Request, openGenerics?: string[]): string {
  const inherits = (type.inherits || []).filter(type => !skipBehaviors.includes(type.type.name))
  const interfaces = (type.implements || []).filter(type => !skipBehaviors.includes(type.type.name))
  const behaviors = (type.behaviors || []).filter(type => !skipBehaviors.includes(type.type.name))
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
  let code = `export interface ${type.name.name}${buildGenerics(type.generics, openGenerics)}${buildInherits(type, openGenerics)} {\n`
  for (const property of type.properties) {
    code += `  ${cleanPropertyName(property.name)}${required(property)}: ${buildValue(property.type, openGenerics)}\n`
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
    if (type.attachedBehaviors.includes('AdditionalProperties')) {
      return serializeAdditionalPropertiesType(type)
    }

    if (type.attachedBehaviors.includes('ArrayResponseBase')) {
      const behavior = lookupBehavior(type, 'ArrayResponseBase')
      assert(behavior)
      let generic = behavior.generics?.[0]
      assert(generic?.kind === 'instance_of')
      if (generic.type.name === 'TCatRecord') {
        const g = type.inherits?.[0].generics?.[0]
        assert(g?.kind === 'instance_of')
        generic = g
      }
      // In the input spec the Cat* responses are represented as an object
      // that contains a `records` key, which is an array of the inherited generic.
      // What ES actually sends back, is an array of the inherited generic.
      return `export type ${type.name.name} = ${generic.type.name}[]\n`
    }

    if (type.attachedBehaviors.includes('EmptyResponseBase')) {
      return `export type ${type.name.name} = boolean\n`
    }
  }

  switch (type.name.name) {
    case 'DictionaryResponseBase':
      return `export interface DictionaryResponseBase<TKey = unknown, TValue = unknown> extends ResponseBase {
  [key: string]: TValue
}\n`
    default:
      throw new Error(`Unknown interface ${type.name.name}`)
  }
}

function serializeAdditionalPropertiesType (type: M.Interface): string {
  const dictionaryOf = lookupBehavior(type, 'AdditionalProperties')
  if (!dictionaryOf) throw new Error(`Unknown implements ${type.name.name}`)
  let code = `export interface ${type.name.name}Keys${buildGenerics(type.generics)}${buildInherits(type)} {\n`

  function required (property: M.Property): string {
    return property.required ? '' : '?'
  }

  const openGenerics = type.generics?.map(t => t.name) ?? []
  for (const property of type.properties) {
    code += `  ${cleanPropertyName(property.name)}${required(property)}: ${buildValue(property.type, openGenerics)}\n`
  }
  code += '}\n'
  code += `export type ${type.name.name}${buildGenerics(type.generics, openGenerics)} = ${type.name.name}Keys${buildGenerics(type.generics, openGenerics, true)} |\n`
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
  if (!type.attachedBehaviors?.includes(name)) return null
  if (Array.isArray(type.behaviors)) {
    const behavior = type.behaviors.find(i => i.type.name === name)
    if (behavior) return behavior
  }
  if (!type.inherits) return null
  const parentType = model.types.find(t => t.name.name === type.inherits?.[0].type.name)
  if (!parentType) return null
  if (parentType.kind === 'interface') {
    return lookupBehavior(parentType, name)
  }
  throw new Error('Should inherit from an interface')
}

function buildRequest (type: M.Request): string {
  const openGenerics = type.generics?.map(t => t.name) ?? []
  let code = `export interface ${type.name.name}${buildGenerics(type.generics, openGenerics)}${buildInherits(type, openGenerics)} {\n`
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
  if (type.body && type.body.kind === 'properties') {
    code += `  body${isBodyRequired() ? '' : '?'}: {\n`
    for (const property of type.body.properties) {
      code += `    ${cleanPropertyName(property.name)}${property.required ? '' : '?'}: ${buildValue(property.type, openGenerics)}\n`
    }
    code += '  }\n'
  } else if (type.body != null && type.body.kind === 'value') {
    code += `  body${isBodyRequired() ? '' : '?'}: ${buildValue(type.body.value, openGenerics)}\n`
  }
  code += '}\n'
  return code

  function isBodyRequired (): boolean {
    for (const endpoint of model.endpoints) {
      if (endpoint.request && endpoint.request.name === type.name.name) {
        return endpoint.requestBodyRequired
      }
    }
    return false
  }
}

function buildEnum (type: M.Enum): string {
  return `export type ${type.name.name} = ${type.members.map(m => `'${m.name}'`).join(' | ')}\n`
}

function buildTypeAlias (type: M.TypeAlias): string {
  const openGenerics = type.generics?.map(t => t.name) ?? []
  return `export type ${type.name.name}${buildGenerics(type.generics)} = ${buildValue(type.type, openGenerics)}\n`
}

function createName (type: M.TypeName | string) {
  if (typeof type === 'string') {
    const namespace = type.replace(/_([a-z])/g, k => k[1].toUpperCase())
    return `${namespace.split('.').map(TitleCase).join('.')}`
  } else {
    if (type.namespace === 'internal') return type.name
    const namespace = type.namespace.replace(/_([a-z])/g, k => k[1].toUpperCase())
    return `${namespace.split('.').map(TitleCase).join('.')}.${type.name}`
  }

  function TitleCase (str: string): string {
    return str[0].toUpperCase() + str.slice(1)
  }
}

function cleanPropertyName (name: string): string {
  return name.includes('.') || name.includes('-') || name.match(/^(\d|\W)/)
    ? `'${name}'`
    : name
}
