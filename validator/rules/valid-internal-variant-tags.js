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
import { getJsDoc, parseVariants, tagValue } from '../utils/jsdoc.js'
import { createRule } from '../utils/rule.js'
import { isClassType, isOptional, literalValue, typeServices } from '../utils/types.js'

export default createRule({
  name: 'valid-internal-variant-tags',
  meta: {
    type: 'problem',
    docs: {
      description: 'In a union with `@variants internal`, the tag property of each member must be a literal that no other member uses. The tag can be optional only on the member that the `default` of the union names. The compiler only checks that the tag property exists.'
    },
    messages: {
      duplicateTagValue: "The members '{{member}}' and '{{other}}' have the same tag value '{{value}}', so a client cannot tell them apart.",
      optionalTag: "The tag '{{tag}}' of the member '{{member}}' is optional, but the member is not the default of the union. Make the tag required.",
      tagNotLiteral: "The tag '{{tag}}' of the member '{{member}}' must have a string or boolean literal type."
    },
    schema: []
  },
  defaultOptions: [],
  create
})

function create (context) {
  const { checker, unionMembers } = typeServices(context)

  return {
    TSTypeAliasDeclaration (node) {
      const tag = tagValue(getJsDoc(context.sourceCode, node), 'variants')
      const variants = tag == null ? undefined : parseVariants(tag)
      if (variants?.kind !== 'internal' || variants.tag == null) return

      const memberOfValue = new Map()
      for (const type of unionMembers(node.typeAnnotation)) {
        const property = isClassType(type) ? type.getProperty(variants.tag) : undefined
        // The compiler reports a member that is not a class or that has no tag property.
        if (property == null) continue

        const member = type.symbol.getName()
        const value = literalValue(checker, checker.getTypeOfSymbol(property))
        if (value == null) {
          context.report({ node: node.id, messageId: 'tagNotLiteral', data: { member, tag: variants.tag } })
          continue
        }
        if (isOptional(property) && value !== variants.default) {
          context.report({ node: node.id, messageId: 'optionalTag', data: { member, tag: variants.tag } })
        }
        if (memberOfValue.has(value)) {
          context.report({
            node: node.id,
            messageId: 'duplicateTagValue',
            data: { value, member, other: memberOfValue.get(value) }
          })
        } else {
          memberOfValue.set(value, member)
        }
      }
    }
  }
}
