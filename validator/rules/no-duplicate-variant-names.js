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
import { isClassType, jsDocTagText, typeServices } from '../utils/types.js'

export default createRule({
  name: 'no-duplicate-variant-names',
  meta: {
    type: 'problem',
    docs: {
      description: 'The members of a union with `@variants typed_keys_quirk` must each have a different `@variant name`. The name is the only thing that tells a client which member a response contains, and the compiler does not check that it is unique.'
    },
    messages: {
      duplicateVariantName: "The members '{{member}}' and '{{other}}' have the same '@variant name={{name}}'."
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
      if (tag == null || parseVariants(tag).kind !== 'typed_keys_quirk') return

      const memberOfName = new Map()
      for (const type of unionMembers(node.typeAnnotation)) {
        const variant = isClassType(type) ? jsDocTagText(checker, type.symbol, 'variant') : undefined
        // The compiler reports a member without a variant name.
        const name = variant?.match(/^name=['"]?([^'"\s]+)/)?.[1]
        if (name == null) continue

        const member = type.symbol.getName()
        if (memberOfName.has(name)) {
          context.report({
            node: node.id,
            messageId: 'duplicateVariantName',
            data: { name, member, other: memberOfName.get(name) }
          })
        } else {
          memberOfName.set(name, member)
        }
      }
    }
  }
}
