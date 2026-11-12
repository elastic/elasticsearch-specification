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
import { CLASS_SELECTOR, properties, propertyName, propertyType, referenceName } from '../utils/spec.js'

export default createRule({
  name: 'prefer-container-variants',
  meta: {
    type: 'suggestion',
    docs: {
      description: 'Finds classes that look like a container of variants but have no `@variants container`: a class with a name that ends with `Container`, or a class whose properties are all optional and have types made of the property name and one common suffix, such as `term?: TermQuery`. The second check is a heuristic. Elasticsearch decides if the properties exclude each other.'
    },
    messages: {
      containerName: "The name of '{{name}}' says that it is a container, but it has no '@variants container'. See https://github.com/elastic/elasticsearch-specification/blob/main/docs/modeling-guide.md#container",
      containerShape: "Each property of '{{name}}' is optional and has a type that ends with '{{suffix}}'. If Elasticsearch accepts only one of them at a time, add '@variants container'. See https://github.com/elastic/elasticsearch-specification/blob/main/docs/modeling-guide.md#container"
    },
    schema: []
  },
  defaultOptions: [],
  create
})

/** What follows the property name in the type name: `Query` for `term?: TermQuery`. */
function typeSuffix (property) {
  const type = referenceName(propertyType(property))
  const prefix = propertyName(property).replace(/_/g, '')
  if (type == null || !type.toLowerCase().startsWith(prefix.toLowerCase())) return undefined
  return type.slice(prefix.length)
}

function create (context) {
  return {
    [CLASS_SELECTOR] (node) {
      const name = node.id.name
      if (name === 'Request' || name === 'Response') return
      if (tagValue(getJsDoc(context.sourceCode, node), 'variants') != null) return

      if (name.endsWith('Container')) {
        context.report({ node: node.id, messageId: 'containerName', data: { name } })
        return
      }

      const members = properties(node)
      if (members.length < 2 || members.some((member) => !member.optional)) return

      // An empty suffix means that the type only repeats the property name, as in `time_zone?: TimeZone`.
      const suffix = typeSuffix(members[0])
      if (suffix != null && suffix !== '' && members.every((member) => typeSuffix(member) === suffix)) {
        context.report({ node: node.id, messageId: 'containerShape', data: { name, suffix } })
      }
    }
  }
}
