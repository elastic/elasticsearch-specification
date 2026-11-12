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
import { createRule } from '../utils/rule.js'
import { enumMemberName } from '../utils/spec.js'

export default createRule({
  name: 'no-enum-identifier-recasing',
  meta: {
    type: 'suggestion',
    docs: {
      description: 'An enum member gets a custom identifier only when its value cannot be one or does not explain itself. An identifier that only changes the case or the underscores of the value hides the value that users see in the Elasticsearch documentation, and each code generator applies the casing of its language anyway.'
    },
    fixable: 'code',
    messages: {
      recasedIdentifier: "The identifier '{{name}}' only changes the case or the underscores of the value '{{value}}'. Use the value as the member. See https://github.com/elastic/elasticsearch-specification/blob/main/docs/modeling-guide.md#enum",
      redundantValue: "The value of '{{name}}' repeats the identifier. Remove the value."
    },
    schema: []
  },
  defaultOptions: [],
  create
})

const normalize = (text) => text.replace(/_/g, '').toLowerCase()

function create (context) {
  return {
    TSEnumMember (node) {
      const initializer = node.initializer
      if (initializer?.type !== 'Literal' || typeof initializer.value !== 'string') return

      const name = enumMemberName(node)
      const value = initializer.value
      if (name === value) {
        context.report({
          node,
          messageId: 'redundantValue',
          data: { name },
          fix: (fixer) => fixer.removeRange([node.id.range[1], initializer.range[1]])
        })
      } else if (/^[A-Za-z_][A-Za-z0-9_]*$/.test(value) && normalize(name) === normalize(value)) {
        context.report({ node, messageId: 'recasedIdentifier', data: { name, value } })
      }
    }
  }
}
