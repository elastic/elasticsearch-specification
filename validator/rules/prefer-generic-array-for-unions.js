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

export default createRule({
  name: 'prefer-generic-array-for-unions',
  meta: {
    type: 'layout',
    docs: {
      description: 'The style guide keeps the short array syntax for simple types. A list of a union is written as `Array<A | B>` and not as `(A | B)[]`.'
    },
    fixable: 'code',
    messages: {
      preferGenericArray: "Write a list of a union as 'Array<A | B>'. See https://github.com/elastic/elasticsearch-specification/blob/main/docs/style-guide.md#arrays"
    },
    schema: []
  },
  defaultOptions: [],
  create
})

function create (context) {
  return {
    TSArrayType (node) {
      if (node.elementType.type !== 'TSUnionType') return

      const union = context.sourceCode.getText(node.elementType)
      context.report({
        node,
        messageId: 'preferGenericArray',
        fix: (fixer) => fixer.replaceText(node, `Array<${union}>`)
      })
    }
  }
}
