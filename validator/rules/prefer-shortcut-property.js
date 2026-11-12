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
import { isClassType, isOptional, typeServices } from '../utils/types.js'

export default createRule({
  name: 'prefer-shortcut-property',
  meta: {
    type: 'suggestion',
    docs: {
      description: 'A union of an object and a primitive, where the object has one required property and that property has the type of the primitive, is the short form of the object. The modeling guide writes it with `@shortcut_property` on the object, which tells clients what the primitive stands for. The rule cannot know that Elasticsearch reads the primitive as that property, so it is a heuristic.'
    },
    messages: {
      preferShortcut: "'{{name}}' accepts '{{type}}' or a value with the type of '{{property}}', its only required property. If the value is a short form of '{{property}}', put '@shortcut_property {{property}}' on '{{type}}' and use that type in place of the union. See https://github.com/elastic/elasticsearch-specification/blob/main/docs/modeling-guide.md#shortcut-properties"
    },
    schema: []
  },
  defaultOptions: [],
  create
})

const PRIMITIVES = new Set(['boolean', 'number', 'string'])

function create (context) {
  const { checker, unionMembers } = typeServices(context)

  return {
    TSTypeAliasDeclaration (node) {
      if (tagValue(getJsDoc(context.sourceCode, node), 'variants') != null) return

      const members = unionMembers(node.typeAnnotation)
      const object = members.find(isClassType)
      const primitive = members.map((member) => checker.typeToString(member)).find((name) => PRIMITIVES.has(name))
      if (members.length !== 2 || object == null || primitive == null) return

      const required = object.getProperties().filter((property) => !isOptional(property))
      if (required.length === 1 && checker.typeToString(checker.getTypeOfSymbol(required[0])) === primitive) {
        context.report({
          node: node.id,
          messageId: 'preferShortcut',
          data: { name: node.id.name, type: object.symbol.getName(), property: required[0].getName() }
        })
      }
    }
  }
}
