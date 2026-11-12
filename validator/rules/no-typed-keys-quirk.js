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
import { getJsDoc, parseVariants, tagValue } from '../utils/jsdoc.js'
import { createRule } from '../utils/rule.js'

export default createRule({
  name: 'no-typed-keys-quirk',
  meta: {
    type: 'problem',
    docs: {
      description: '`@variants typed_keys_quirk` exists for early APIs that have no variant tag. New unions must use `@variants internal` or `@variants container`.'
    },
    messages: {
      typedKeysQuirk: "'{{name}}' uses '@variants typed_keys_quirk', which is for legacy APIs only. Use '@variants internal' or '@variants container'. See https://github.com/elastic/elasticsearch-specification/blob/main/docs/modeling-guide.md#typed_keys_quirk"
    },
    schema: [
      {
        type: 'object',
        properties: {
          allow: {
            type: 'array',
            items: { type: 'string' },
            description: 'Names of the legacy unions that keep the quirk'
          }
        },
        additionalProperties: false
      }
    ]
  },
  defaultOptions: [{ allow: [] }],
  create
})

function create (context, [{ allow }]) {
  return {
    TSTypeAliasDeclaration (node) {
      const variants = tagValue(getJsDoc(context.sourceCode, node), 'variants')
      if (variants == null || parseVariants(variants).kind !== 'typed_keys_quirk') return

      if (!allow.includes(node.id.name)) {
        context.report({ node: node.id, messageId: 'typedKeysQuirk', data: { name: node.id.name } })
      }
    }
  }
}
