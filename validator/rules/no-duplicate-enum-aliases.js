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
import { getJsDoc, parseCommaSeparated, tagValues } from '../utils/jsdoc.js'
import { createRule } from '../utils/rule.js'
import { enumMemberName, enumMemberValue, enumMembers } from '../utils/spec.js'

export default createRule({
  name: 'no-duplicate-enum-aliases',
  meta: {
    type: 'problem',
    docs: {
      description: 'An `@aliases` value of an enum member must not be the value or the alias of another member, or a client cannot tell which member it received.'
    },
    messages: {
      aliasIsMember: "The alias '{{alias}}' is also the value of the member '{{other}}'.",
      duplicateAlias: "The alias '{{alias}}' is already an alias of the member '{{other}}'."
    },
    schema: []
  },
  defaultOptions: [],
  create
})

function create (context) {
  return {
    TSEnumDeclaration (node) {
      const members = enumMembers(node)
      const memberOfValue = new Map(members.map((m) => [enumMemberValue(m), enumMemberName(m)]))
      const memberOfAlias = new Map()

      for (const member of members) {
        const aliases = tagValues(getJsDoc(context.sourceCode, member), 'aliases').flatMap(parseCommaSeparated)
        for (const alias of aliases) {
          if (memberOfValue.has(alias)) {
            context.report({ node: member, messageId: 'aliasIsMember', data: { alias, other: memberOfValue.get(alias) } })
          } else if (memberOfAlias.has(alias)) {
            context.report({ node: member, messageId: 'duplicateAlias', data: { alias, other: memberOfAlias.get(alias) } })
          } else {
            memberOfAlias.set(alias, enumMemberName(member))
          }
        }
      }
    }
  }
}
