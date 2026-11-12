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
  name: 'prefer-user-defined-value',
  meta: {
    type: 'problem',
    docs: {
      description: 'A value without a known type is written as `UserDefinedValue`. The TypeScript keywords `any`, `unknown` and `object` have no representation in the schema.'
    },
    messages: {
      untyped: "'{{type}}' is not a type of the specification. Use 'UserDefinedValue' for a value without a known type."
    },
    schema: []
  },
  defaultOptions: [],
  create
})

function create (context) {
  return {
    'TSAnyKeyword, TSObjectKeyword, TSUnknownKeyword' (node) {
      context.report({ node, messageId: 'untyped', data: { type: context.sourceCode.getText(node) } })
    }
  }
}
