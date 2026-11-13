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
import { PROPERTY_SELECTOR, propertyName, propertyType } from '../utils/spec.js'
import { enumAcceptedValues, enumSymbol, typeServices } from '../utils/types.js'

export default createRule({
  name: 'valid-server-default',
  meta: {
    type: 'problem',
    docs: {
      description: 'A `@server_default` must have a value, and on a property with an enum type each value must be a member or an alias of that enum. The compiler checks the defaults of booleans and numbers only.'
    },
    messages: {
      emptyDefault: "The '@server_default' of '{{name}}' has no value.",
      notAnEnumMember: "The '@server_default' contains '{{value}}', which the enum '{{enum}}' does not have as a member or an alias.",
      quotedDefault: "The '@server_default' value {{value}} has quotes, which become part of the default. Write {{unquoted}}."
    },
    schema: []
  },
  defaultOptions: [],
  create
})

const unquote = (item) => item.replace(/^(['"])(.*)\1$/, '$2')

/** The values of a default: the items of `['a', 'b']`, or of `a,b` as a URL parameter sends a list. */
function defaultValues (value) {
  const isArray = value.startsWith('[') && value.endsWith(']')
  const items = (isArray ? value.slice(1, -1) : value)
    .split(',')
    .map((item) => item.trim())
    .filter((item) => item !== '')
  // Quotes belong to the array syntax. In a plain value they become part of the default.
  return isArray ? items.map(unquote) : items
}

function create (context) {
  const { checker, typeOf } = typeServices(context)

  return {
    [PROPERTY_SELECTOR] (node) {
      const value = tagValue(getJsDoc(context.sourceCode, node), 'server_default')
      if (value == null) return
      if (value === '') {
        context.report({ node, messageId: 'emptyDefault', data: { name: propertyName(node) } })
        return
      }

      const type = propertyType(node)
      const symbol = type == null ? undefined : enumSymbol(checker, typeOf(type))
      if (symbol == null) return

      const members = enumAcceptedValues(checker, symbol)
      const unknown = []
      for (const item of defaultValues(value)) {
        if (members.has(item)) continue

        const unquoted = unquote(item)
        if (members.has(unquoted)) {
          context.report({ node, messageId: 'quotedDefault', data: { value: item, unquoted } })
        } else {
          unknown.push(item)
        }
      }
      if (unknown.length > 0) {
        context.report({
          node,
          messageId: 'notAnEnumMember',
          data: { value: unknown.join(', '), enum: symbol.getName() }
        })
      }
    }
  }
}
