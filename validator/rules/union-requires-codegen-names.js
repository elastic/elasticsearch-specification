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
import { getJsDoc, parseCommaSeparated, tagValue } from '../utils/jsdoc.js'
import { createRule } from '../utils/rule.js'
import { referenceName } from '../utils/spec.js'

export default createRule({
  name: 'union-requires-codegen-names',
  meta: {
    type: 'problem',
    docs: {
      description: 'A union type alias that has no `@variants` needs `@codegen_names`, so that clients can name the members. Unions of the forms `T | T[]` and `T | null` are exempt.'
    },
    messages: {
      duplicateCodegenName: "The name '{{name}}' appears more than one time in '@codegen_names'.",
      missingCodegenNames: "The union '{{name}}' has no '@variants' and no '@codegen_names'. Add '@codegen_names' with one name for each member. See https://github.com/elastic/elasticsearch-specification/blob/main/docs/modeling-guide.md#codegen-names"
    },
    schema: []
  },
  defaultOptions: [],
  create
})

function create (context) {
  const text = (node) => context.sourceCode.getText(node)

  function isArrayOf (array, item) {
    if (array.type === 'TSArrayType') return text(array.elementType) === text(item)
    const argument = referenceName(array) === 'Array' ? array.typeArguments?.params[0] : undefined
    return argument != null && text(argument) === text(item)
  }

  function isExempt (alias, union) {
    // A helper such as `Stringified<T> = T | string` gets its names from the type that uses it.
    const parameters = new Set((alias.typeParameters?.params ?? []).map((p) => p.name.name))
    if (union.types.some((member) => parameters.has(referenceName(member)))) return true

    if (union.types.length !== 2) return false
    const [first, second] = union.types
    if (first.type === 'TSNullKeyword' || second.type === 'TSNullKeyword') return true
    return isArrayOf(first, second) || isArrayOf(second, first)
  }

  return {
    TSTypeAliasDeclaration (node) {
      const union = node.typeAnnotation
      if (union.type !== 'TSUnionType') return

      const jsDoc = getJsDoc(context.sourceCode, node)
      const names = tagValue(jsDoc, 'codegen_names')
      if (names != null) {
        const seen = new Set()
        for (const name of parseCommaSeparated(names)) {
          if (seen.has(name)) {
            context.report({ node: node.id, messageId: 'duplicateCodegenName', data: { name } })
          }
          seen.add(name)
        }
        return
      }

      if (tagValue(jsDoc, 'variants') == null && !isExempt(node, union)) {
        context.report({ node: node.id, messageId: 'missingCodegenNames', data: { name: node.id.name } })
      }
    }
  }
}
