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
import { CLASS_SELECTOR } from '../utils/spec.js'
import { typeServices } from '../utils/types.js'

export default createRule({
  name: 'shortcut-property-exists',
  meta: {
    type: 'problem',
    docs: {
      description: 'The property that `@shortcut_property` names must exist in the class or in one of its parents. The compiler copies the name into the schema without a check.'
    },
    messages: {
      unknownProperty: "'@shortcut_property {{name}}' names no property of '{{type}}' or of its parents."
    },
    schema: []
  },
  defaultOptions: [],
  create
})

function create (context) {
  const { declaredType } = typeServices(context)

  return {
    [CLASS_SELECTOR] (node) {
      const name = tagValue(getJsDoc(context.sourceCode, node), 'shortcut_property')
      if (name == null) return

      // The properties of the type include those of its parents.
      if (declaredType(node).getProperty(name) == null) {
        context.report({ node: node.id, messageId: 'unknownProperty', data: { name, type: node.id.name } })
      }
    }
  }
}
