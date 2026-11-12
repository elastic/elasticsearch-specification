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
import { enumMemberValue, enumMembers } from '../utils/spec.js'

export default createRule({
  name: 'enum-boolean-requires-quirk',
  meta: {
    type: 'problem',
    docs: {
      description: 'An enum with the members `true` or `false` is a boolean that became an enum. It needs `@es_quirk`, so that code generators read and write those two members as JSON booleans.'
    },
    messages: {
      missingQuirk: "The enum '{{name}}' has the members 'true' or 'false' but no '@es_quirk'. Add the tag and say that these members are JSON booleans. See https://github.com/elastic/elasticsearch-specification/blob/main/docs/modeling-guide.md#tracking-elasticsearch-quirks"
    },
    schema: []
  },
  defaultOptions: [],
  create
})

function create (context) {
  return {
    TSEnumDeclaration (node) {
      const values = enumMembers(node).map(enumMemberValue)
      if (!values.includes('true') && !values.includes('false')) return

      if (tagValue(getJsDoc(context.sourceCode, node), 'es_quirk') == null) {
        context.report({ node: node.id, messageId: 'missingQuirk', data: { name: node.id.name } })
      }
    }
  }
}
