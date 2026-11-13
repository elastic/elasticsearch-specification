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
import { isRequest, propertyType, requestSection } from '../utils/spec.js'
import { typeServices } from '../utils/types.js'

export default createRule({
  name: 'no-stringified-in-requests',
  meta: {
    type: 'problem',
    docs: {
      description: '`Stringified<T>` describes a value that Elasticsearch can return as a string. A request sends the value in its original type, so `Stringified` has no place in a request definition. For path parts and query parameters the rule also looks through the type aliases of the parameter.'
    },
    messages: {
      stringifiedInRequest: "'Stringified' is for values in responses. A request sends the value in its original type. See https://github.com/elastic/elasticsearch-specification/blob/main/docs/modeling-guide.md#stringified-values"
    },
    schema: []
  },
  defaultOptions: [],
  create
})

const BODY = 'TSInterfaceDeclaration[id.name="Request"] > TSInterfaceBody > TSPropertySignature[key.name="body"]'

function create (context) {
  const { referencesAlias } = typeServices(context)

  return {
    TSInterfaceDeclaration (node) {
      if (!isRequest(node)) return

      // The type of a URL parameter belongs to the request alone, so its aliases are checked too.
      // A type in the body can be in a response as well, where `Stringified` is correct.
      const parameters = [...requestSection(node, 'path_parts'), ...requestSection(node, 'query_parameters')]
      for (const parameter of parameters) {
        const type = propertyType(parameter)
        if (type != null && referencesAlias(type, 'Stringified')) {
          context.report({ node: parameter, messageId: 'stringifiedInRequest' })
        }
      }
    },
    [`${BODY} TSTypeReference[typeName.name="Stringified"]`] (node) {
      context.report({ node, messageId: 'stringifiedInRequest' })
    }
  }
}
