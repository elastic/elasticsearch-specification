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
import { isClassType, literalValue, typeServices } from '../utils/types.js'

export default createRule({
  name: 'prefer-internal-variants',
  meta: {
    type: 'suggestion',
    docs: {
      description: 'A union of classes that all have the same property with a literal type is an internally tagged union. It must say so with `@variants internal`, so that clients read the tag and do not guess the member.'
    },
    messages: {
      preferInternal: "Each member of '{{name}}' has the property '{{tag}}' with a literal type. Use \"@variants internal tag='{{tag}}'\". See https://github.com/elastic/elasticsearch-specification/blob/main/docs/modeling-guide.md#internal"
    },
    schema: []
  },
  defaultOptions: [],
  create
})

function create (context) {
  const { checker, unionMembers } = typeServices(context)

  const hasLiteral = (type, name) => {
    const property = type.getProperty(name)
    return property != null && literalValue(checker, checker.getTypeOfSymbol(property)) != null
  }

  return {
    TSTypeAliasDeclaration (node) {
      if (tagValue(getJsDoc(context.sourceCode, node), 'variants') != null) return

      const members = unionMembers(node.typeAnnotation)
      if (members.length < 2 || !members.every(isClassType)) return

      const tag = members[0]
        .getProperties()
        .map((property) => property.getName())
        .find((name) => members.every((member) => hasLiteral(member, name)))
      if (tag != null) {
        context.report({ node: node.id, messageId: 'preferInternal', data: { name: node.id.name, tag } })
      }
    }
  }
}
