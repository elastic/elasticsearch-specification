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

const createRule = ESLintUtils.RuleCreator(
  (name) => `https://example.com/rule/${name}`
)

export default createRule({
  name: 'no-deprecated-availability-on-types.js',
  create(context) {
    const sourceCode = context.sourceCode || context.getSourceCode()

    return {
      'TSEnumDeclaration, TSTypeAliasDeclaration, ClassDeclaration'(node) {
        const className = node.id?.name
        const targetNode =
            node.parent?.type === 'ExportNamedDeclaration' ? node.parent : node
        const comments = sourceCode.getCommentsBefore(targetNode)
        const jsdoc = comments
            ?.filter(comment => comment.type === 'Block' && comment.value.startsWith('*'))
            .pop()

        if (jsdoc === undefined) return

        const blockComment = jsdoc.value

        console.log("START_LOG");
        console.log(blockComment)
        console.log("END_LOG");

        const hasDeprecatedTag =
            /@deprecated\s/.test(
                blockComment
            )

        if (hasDeprecatedTag) {
          context.report({
            node,
            messageId: 'noDeprecatedOnTypes',
            data: {
              className,
              suggestion:
                  '@deprecated is only allowed on Request definitions.'
            }
          })
        }

        const hasAvailabilityTag =
            /@availability\s/.test(
                blockComment
            )

        if (hasAvailabilityTag) {
          context.report({
            node,
            messageId: 'noAvailabilityOnTypes',
            data: {
              className,
              suggestion:
                  '@availability is only allowed on Request definitions.'
            }
          })
        }
      }
    }
  },
  meta: {
    docs: {
      description:
        'AAAA'
    },
    messages: {
      noAvailabilityOnTypes:
        '@availability on {{className}} is not supported. {{suggestion}}',
      noDeprecatedOnTypes:
        '@deprecated on {{className}} is not supported. {{suggestion}}'
    },
    type: 'problem',
    schema: []
  },
  defaultOptions: []
})
