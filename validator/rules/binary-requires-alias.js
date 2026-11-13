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
  name: 'binary-requires-alias',
  meta: {
    type: 'suggestion',
    docs: {
      description: 'Binary data is `ArrayBuffer` behind a type alias with a name that says what the data is. The alias is the only place where `ArrayBuffer` appears.'
    },
    messages: {
      inlineBinary: "Give the binary data a name: declare 'export type MyData = ArrayBuffer' and use that alias. See https://github.com/elastic/elasticsearch-specification/blob/main/docs/modeling-guide.md#binary"
    },
    schema: []
  },
  defaultOptions: [],
  create
})

function create (context) {
  return {
    'TSTypeReference[typeName.name="ArrayBuffer"]' (node) {
      if (node.parent.type !== 'TSTypeAliasDeclaration') {
        context.report({ node, messageId: 'inlineBinary' })
      }
    }
  }
}
