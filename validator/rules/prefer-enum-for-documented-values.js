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
import { PROPERTY_SELECTOR, propertyName, propertyType } from '../utils/spec.js'

export default createRule({
  name: 'prefer-enum-for-documented-values',
  meta: {
    type: 'suggestion',
    docs: {
      description: 'A `string` property whose description lists the values that it accepts is an enum that the specification does not model. The rule reads the description, so it is a heuristic.'
    },
    messages: {
      documentedValues: "The description of '{{name}}' lists the values that it accepts, but its type is 'string'. Use an enum, with '@non_exhaustive' if other values are possible. See https://github.com/elastic/elasticsearch-specification/blob/main/docs/modeling-guide.md#enum"
    },
    schema: []
  },
  defaultOptions: [],
  create
})

const VALUE_LIST = /\b(?:accepted|allowed|possible|supported|valid) values (?:are|include)\b|\b(?:can|must|should) be one of\b/i

function create (context) {
  return {
    [PROPERTY_SELECTOR] (node) {
      if (propertyType(node)?.type !== 'TSStringKeyword') return

      const { description } = getJsDoc(context.sourceCode, node)
      const list = description.match(VALUE_LIST)
      if (list == null) return

      // One value in backticks is an example. Two or more are a list.
      const values = description.slice(list.index).match(/`[^`]+`/g) ?? []
      if (values.length >= 2) {
        context.report({ node, messageId: 'documentedValues', data: { name: propertyName(node) } })
      }
    }
  }
}
