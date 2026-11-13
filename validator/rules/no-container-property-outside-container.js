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
import { PROPERTY_SELECTOR, propertyName } from '../utils/spec.js'

export default createRule({
  name: 'no-container-property-outside-container',
  meta: {
    type: 'problem',
    docs: {
      description: '`@variant container_property` only has a meaning on a property of a class with `@variants container`.'
    },
    messages: {
      notInContainer: "The property '{{name}}' has '@variant container_property', but its class has no '@variants container'."
    },
    schema: []
  },
  defaultOptions: [],
  create
})

function create (context) {
  return {
    [PROPERTY_SELECTOR] (node) {
      if (tagValue(getJsDoc(context.sourceCode, node), 'variant') !== 'container_property') return

      const owner = node.parent.parent
      const isClass = owner.type === 'ClassDeclaration' || owner.type === 'TSInterfaceDeclaration'
      const variants = isClass ? tagValue(getJsDoc(context.sourceCode, owner), 'variants') : undefined
      if (variants?.split(/\s+/)[0] !== 'container') {
        context.report({ node, messageId: 'notInContainer', data: { name: propertyName(node) } })
      }
    }
  }
}
