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
import { isRequest, requestUrls } from '../utils/spec.js'

// The members of the `HttpMethod` enum in `specification/_types/common.ts`.
const SUPPORTED_METHODS = ['DELETE', 'GET', 'HEAD', 'POST', 'PUT']

export default createRule({
  name: 'valid-request-urls',
  meta: {
    type: 'problem',
    docs: {
      description: 'The `urls` of a request must not repeat a path or a method, and each method must be one that Elasticsearch supports.'
    },
    messages: {
      duplicateMethod: "The method '{{method}}' appears more than one time for this path.",
      duplicatePath: "The path '{{path}}' appears in more than one entry of 'urls'. Put all its methods in one entry.",
      unknownMethod: `'{{method}}' is not an HTTP method that the specification supports (${SUPPORTED_METHODS.join(', ')}).`
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

      const paths = new Set()
      for (const url of requestUrls(node)) {
        if (paths.has(url.path)) {
          context.report({ node: url.node, messageId: 'duplicatePath', data: { path: url.path } })
        }
        paths.add(url.path)

        const methods = new Set()
        for (const method of url.methods) {
          if (!SUPPORTED_METHODS.includes(method.name)) {
            context.report({ node: method.node, messageId: 'unknownMethod', data: { method: method.name } })
          } else if (methods.has(method.name)) {
            context.report({ node: method.node, messageId: 'duplicateMethod', data: { method: method.name } })
          }
          methods.add(method.name)
        }
      }
    }
  }
}
