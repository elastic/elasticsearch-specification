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
import { getJsDoc } from '../utils/jsdoc.js'
import { createRule } from '../utils/rule.js'
import { CLASS_SELECTOR, PROPERTY_SELECTOR } from '../utils/spec.js'

export default createRule({
  name: 'no-duplicate-jsdoc-tags',
  meta: {
    type: 'problem',
    docs: {
      description: 'A JSDoc block must not repeat a tag. The compiler keeps the last value and drops the others without an error.'
    },
    messages: {
      duplicateTag: "The tag '@{{tag}}' appears more than one time in this JSDoc block. The compiler keeps only the last value."
    },
    schema: []
  },
  defaultOptions: [],
  create
})

// The compiler reads all occurrences of these tags.
const REPEATABLE_TAGS = new Set(['UpdateForV10', 'availability'])

function create (context) {
  return {
    [`${CLASS_SELECTOR}, ${PROPERTY_SELECTOR}, TSEnumDeclaration, TSEnumMember, TSTypeAliasDeclaration`] (node) {
      const seen = new Set()
      for (const { tag } of getJsDoc(context.sourceCode, node).tags) {
        if (REPEATABLE_TAGS.has(tag)) continue
        if (seen.has(tag)) {
          context.report({ node, messageId: 'duplicateTag', data: { tag } })
        }
        seen.add(tag)
      }
    }
  }
}
