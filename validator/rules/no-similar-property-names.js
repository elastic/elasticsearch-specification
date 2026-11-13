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
import { properties, propertyName } from '../utils/spec.js'

export default createRule({
  name: 'no-similar-property-names',
  meta: {
    type: 'problem',
    docs: {
      description: 'Two properties of one type must not differ only by case or by leading and trailing underscores. Several client languages drop those differences, so the two names become one identifier.'
    },
    messages: {
      similarNames: "The properties '{{name}}' and '{{other}}' differ only by case or underscores. Give one of them a different '@codegen_name'."
    },
    schema: []
  },
  defaultOptions: [],
  create
})

function create (context) {
  return {
    'ClassDeclaration, TSInterfaceDeclaration, TSTypeLiteral' (node) {
      const seen = new Map()
      for (const property of properties(node)) {
        const name = propertyName(property)
        const identifier = tagValue(getJsDoc(context.sourceCode, property), 'codegen_name') ?? name
        const key = identifier.replace(/^_+|_+$/g, '').toLowerCase()
        if (seen.has(key)) {
          context.report({ node: property, messageId: 'similarNames', data: { name, other: seen.get(key) } })
        } else {
          seen.set(key, name)
        }
      }
    }
  }
}
