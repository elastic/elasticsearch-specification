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
import { createRule } from '../utils/rule.js'
import { isRequest, propertyName, propertyType, requestSection } from '../utils/spec.js'
import { isClassType, isInlineObjectType, typeServices } from '../utils/types.js'

export default createRule({
  name: 'no-object-url-parameters',
  meta: {
    type: 'problem',
    docs: {
      description: 'A path part or a query parameter must be a string, a number, a boolean, an enum or a list of those. An object has no representation in a URL.'
    },
    messages: {
      objectParameter: "The parameter '{{name}}' is part of the URL, but its type contains the object type '{{type}}'. Move it to the body or give it a scalar type."
    },
    schema: []
  },
  defaultOptions: [],
  create
})

/** The name of the first object type that a type contains, or undefined for a type made of scalars. */
function objectTypeName (checker, type) {
  if (checker.isArrayType(type)) return objectTypeName(checker, checker.getTypeArguments(type)[0])
  if (type.isUnion()) {
    return type.types.map((member) => objectTypeName(checker, member)).find((name) => name != null)
  }
  if (isClassType(type)) return type.symbol.getName()
  if (isInlineObjectType(type)) return 'inline object'
  return undefined
}

function create (context) {
  const { checker, typeOf } = typeServices(context)

  return {
    TSInterfaceDeclaration (node) {
      if (!isRequest(node)) return

      const parameters = [...requestSection(node, 'path_parts'), ...requestSection(node, 'query_parameters')]
      for (const parameter of parameters) {
        const type = propertyType(parameter)
        const name = type == null ? undefined : objectTypeName(checker, typeOf(type))
        if (name != null) {
          context.report({
            node: parameter,
            messageId: 'objectParameter',
            data: { name: propertyName(parameter), type: name }
          })
        }
      }
    }
  }
}
