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

// The compiler models an `implements` clause only for the names in `knownBehaviors` of
// compiler/src/model/utils.ts, so this list must have the same names.
const BEHAVIORS = new Set([
  'AdditionalProperties',
  'AdditionalProperty',
  'CommonCatQueryParameters',
  'CommonQueryParameters',
  'OverloadOf'
])

export default createRule({
  name: 'implements-only-behaviors',
  meta: {
    type: 'problem',
    docs: {
      description: 'A class can use `implements` for a behavior only. The compiler ignores each other name in an `implements` clause, so the properties of that type are not in the model of the class.'
    },
    messages: {
      notBehavior: "The compiler reads 'implements' for behaviors only and ignores '{{name}}', so '{{type}}' does not get the properties of '{{name}}'. Use 'extends' to inherit them. A class can extend a class only, so declare '{{name}}' as a class if it is an interface."
    },
    schema: []
  },
  defaultOptions: [],
  create
})

function create (context) {
  return {
    ClassDeclaration (node) {
      for (const clause of node.implements) {
        const name = context.sourceCode.getText(clause.expression)
        if (!BEHAVIORS.has(name)) {
          context.report({ node: clause, messageId: 'notBehavior', data: { name, type: node.id.name } })
        }
      }
    }
  }
}
