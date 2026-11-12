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

/** Selector for the two node types that declare a property in the spec. */
export const PROPERTY_SELECTOR = 'PropertyDefinition, TSPropertySignature'

/** Selector for the two node types that declare an object type in the spec. */
export const CLASS_SELECTOR = 'ClassDeclaration, TSInterfaceDeclaration'

export function isProperty (node) {
  return node.type === 'PropertyDefinition' || node.type === 'TSPropertySignature'
}

export function propertyName (node) {
  return node.key.type === 'Identifier' ? node.key.name : String(node.key.value)
}

export function propertyType (node) {
  return node.typeAnnotation?.typeAnnotation
}

/** The properties of a class, an interface or an inline object type. */
export function properties (node) {
  const members = node.type === 'TSTypeLiteral' ? node.members : node.body.body
  return members.filter(isProperty)
}

/** The name of a plain type reference such as `Foo` or `Foo<Bar>`. */
export function referenceName (typeNode) {
  return typeNode?.type === 'TSTypeReference' && typeNode.typeName.type === 'Identifier'
    ? typeNode.typeName.name
    : undefined
}

export function isRequest (node) {
  return node.type === 'TSInterfaceDeclaration' && node.id.name === 'Request'
}

/** The properties declared in the `path_parts`, `query_parameters` or `body` block of a request. */
export function requestSection (request, section) {
  const block = properties(request).find((p) => propertyName(p) === section)
  const type = block == null ? undefined : propertyType(block)
  return type?.type === 'TSTypeLiteral' ? properties(type) : []
}

/** The entries of the `urls` block of a request, with the literal values of `path` and `methods`. */
export function requestUrls (request) {
  const block = properties(request).find((p) => propertyName(p) === 'urls')
  const type = block == null ? undefined : propertyType(block)
  if (type?.type !== 'TSTupleType') return []

  return type.elementTypes
    .filter((entry) => entry.type === 'TSTypeLiteral')
    .map((entry) => {
      const url = { node: entry, path: undefined, methods: [] }
      for (const member of properties(entry)) {
        const value = propertyType(member)
        if (propertyName(member) === 'path' && value?.type === 'TSLiteralType') {
          url.path = String(value.literal.value)
        }
        if (propertyName(member) === 'methods' && value?.type === 'TSTupleType') {
          url.methods = value.elementTypes
            .filter((m) => m.type === 'TSLiteralType')
            .map((m) => ({ node: m, name: String(m.literal.value) }))
        }
      }
      return url
    })
}

export function enumMembers (node) {
  return node.body?.members ?? node.members
}

export function enumMemberName (member) {
  return member.id.type === 'Identifier' ? member.id.name : String(member.id.value)
}

/** The value on the wire: the initializer when the member has one, the name of the member when it has none. */
export function enumMemberValue (member) {
  return member.initializer?.type === 'Literal' && typeof member.initializer.value === 'string'
    ? member.initializer.value
    : enumMemberName(member)
}

/** The folders between `specification/` and the file, or undefined for a file outside the spec. */
export function specNamespace (filename) {
  const parts = filename.split(/[\\/]/)
  const root = parts.lastIndexOf('specification')
  return root === -1 ? undefined : parts.slice(root + 1, -1)
}
