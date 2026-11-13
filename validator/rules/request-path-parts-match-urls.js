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
import { isRequest, propertyName, requestSection, requestUrls } from '../utils/spec.js'

export default createRule({
  name: 'request-path-parts-match-urls',
  meta: {
    type: 'problem',
    docs: {
      description: 'A path part that each URL of a request contains must be required, and a path part that one of the URLs does not contain must be optional.'
    },
    messages: {
      optionalInEveryUrl: "The path part '{{name}}' is optional, but each URL of this request contains it. Make it required.",
      requiredButMissing: "The path part '{{name}}' is required, but the URL '{{path}}' does not contain it. Make it optional."
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

      const paths = requestUrls(node).map((url) => url.path).filter((path) => path != null)
      for (const part of requestSection(node, 'path_parts')) {
        const name = propertyName(part)
        const missing = paths.filter((path) => !path.includes(`{${name}}`))
        // The compiler reports a part that no URL contains.
        if (missing.length === paths.length) continue

        if (part.optional && missing.length === 0) {
          context.report({ node: part, messageId: 'optionalInEveryUrl', data: { name } })
        } else if (!part.optional && missing.length > 0) {
          context.report({ node: part, messageId: 'requiredButMissing', data: { name, path: missing[0] } })
        }
      }
    }
  }
}
