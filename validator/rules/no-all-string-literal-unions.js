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
import { ESLintUtils } from '@typescript-eslint/utils'
import ts from 'typescript'

export const noAllStringLiteralUnions = ESLintUtils.RuleCreator.withoutDocs({
  name: 'no-all-string-literal-unions',
  meta: {
    type: 'problem',
    docs: {
      description: 'Disallow all string literal unions',
      recommended: 'error'
    },
    messages: {
      noAllStringLiteralUnions:
        'All string literal unions are not allowed. Use an enum of string literals instead (e.g., export enum MyEnum { A = "a", B = "b" })'
    },
    schema: []
  },
  defaultOptions: [],
  create(context) {
    const services = ESLintUtils.getParserServices(context)

    function isStringLiteralType(type) {
      if (type.type !== 'TSLiteralType') {
        return false
      }

      const tsNode = services.esTreeNodeToTSNodeMap.get(type)
      return tsNode.literal.kind === ts.SyntaxKind.StringLiteral
    }

    return {
      TSUnionType(node) {
        const allMembersAreStringLiterals =
          node.types.every(isStringLiteralType)

        if (allMembersAreStringLiterals) {
          context.report({
            node,
            messageId: 'noAllStringLiteralUnions'
          })
        }
      }
    }
  }
})

export default noAllStringLiteralUnions
