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
  name: 'single-definition-in-endpoint-files',
  meta: {
    type: 'suggestion',
    docs: {
      description: 'The file of a request or a response contains only that definition. The other types of the endpoint go to a `types.ts` file or to a `_types` folder next to it.'
    },
    messages: {
      extraDefinition: "'{{name}}' is in the file of the '{{main}}' definition. Move it to a 'types.ts' file in the same folder. See https://github.com/elastic/elasticsearch-specification/blob/main/docs/add-new-api.md#how-to-add-the-definition-of-an-endpoint"
    },
    schema: []
  },
  defaultOptions: [],
  create
})

const DEFINITIONS = new Set(['ClassDeclaration', 'TSEnumDeclaration', 'TSInterfaceDeclaration', 'TSTypeAliasDeclaration'])
const ENDPOINT_DEFINITIONS = ['Request', 'Response']

function create (context) {
  return {
    Program (node) {
      const definitions = node.body
        .map((statement) => (statement.type === 'ExportNamedDeclaration' ? statement.declaration : statement))
        .filter((statement) => statement != null && DEFINITIONS.has(statement.type))

      const main = definitions.find((definition) => ENDPOINT_DEFINITIONS.includes(definition.id.name))
      if (main == null) return

      for (const definition of definitions) {
        if (!ENDPOINT_DEFINITIONS.includes(definition.id.name)) {
          context.report({
            node: definition.id,
            messageId: 'extraDefinition',
            data: { name: definition.id.name, main: main.id.name }
          })
        }
      }
    }
  }
}
