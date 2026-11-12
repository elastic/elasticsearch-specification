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
import { isRequest, propertyName, requestSection } from '../utils/spec.js'

export default createRule({
  name: 'require-request-property-docs',
  meta: {
    type: 'suggestion',
    docs: {
      description: 'Each path part, query parameter and body property of a request needs a description. The description is the only text that the API reference and the clients show for the parameter.'
    },
    messages: {
      missingDescription: "The property '{{name}}' in '{{section}}' has no description. See https://github.com/elastic/elasticsearch-specification/blob/main/docs/doc-comments-guide.md"
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

      for (const section of ['path_parts', 'query_parameters', 'body']) {
        for (const property of requestSection(node, section)) {
          if (getJsDoc(context.sourceCode, property).description === '') {
            context.report({
              node: property,
              messageId: 'missingDescription',
              data: { name: propertyName(property), section }
            })
          }
        }
      }
    }
  }
}
