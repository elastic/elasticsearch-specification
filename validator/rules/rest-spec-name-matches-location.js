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
import { getJsDoc, tagValue } from '../utils/jsdoc.js'
import { createRule } from '../utils/rule.js'
import { isRequest, specNamespace } from '../utils/spec.js'

export default createRule({
  name: 'rest-spec-name-matches-location',
  meta: {
    type: 'problem',
    docs: {
      description: 'The `@rest_spec_name` of a request must match the folder of its file. A request with the name of a different endpoint replaces that endpoint in the output without an error.'
    },
    messages: {
      mismatch: "The '@rest_spec_name' is '{{name}}', but the location of this file gives '{{expected}}'."
    },
    schema: []
  },
  defaultOptions: [],
  create
})

function create (context) {
  return {
    TSInterfaceDeclaration (node) {
      if (!isRequest(node)) return

      const folders = specNamespace(context.filename)
      const name = tagValue(getJsDoc(context.sourceCode, node), 'rest_spec_name')
      if (folders == null || name == null) return

      // Endpoints without a namespace live in the `_global` folder.
      const expected = (folders[0] === '_global' ? folders.slice(1) : folders).join('.')
      if (name !== expected) {
        context.report({ node: node.id, messageId: 'mismatch', data: { name, expected } })
      }
    }
  }
}
