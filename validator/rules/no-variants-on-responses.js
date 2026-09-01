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
  name: 'no-variants-on-responses',
  create(context) {
    const sourceCode = context.sourceCode || context.getSourceCode()

    const getJsDocTags = (node) => {
      const targetNode =
        node.parent?.type === 'ExportNamedDeclaration' ? node.parent : node
      const comments = sourceCode.getCommentsBefore(targetNode)

      const jsDocComment = comments
        ?.filter(
          (comment) => comment.type === 'Block' && comment.value.startsWith('*')
        )
        .pop()

      if (!jsDocComment) return []

      return jsDocComment.value
        .split('\n')
        .map((line) => line.trim().match(/^\*?\s*@(\w+)(?:\s+(.*))?$/))
        .filter(Boolean)
        .map(([, tag, value]) => ({ tag, value: value?.trim() || '' }))
    }

    return {
      'TSInterfaceDeclaration, ClassDeclaration'(node) {
        const className = node.id?.name
        if (className === 'Response' || className === 'Request') {
          const fullText = sourceCode.text

          const nodeStart = node.range[0]
          const textBefore = fullText.substring(
            Math.max(0, nodeStart - 200),
            nodeStart
          )

          const hasVariantsTag =
            /@variants\s+(container|internal|external|untagged)/.test(
              textBefore
            )

          if (hasVariantsTag) {
            context.report({
              node,
              messageId: 'noVariantsOnResponses',
              data: {
                className,
                suggestion:
                  'Move @variants to a separate body class and use value_body pattern with @codegen_name. See SearchResponse for an example.'
              }
            })
          }
          return
        }

        const jsDocTags = getJsDocTags(node)

        const nonContainerVariant = jsDocTags.find(
          ({ tag, value }) => tag === 'variants' && value !== 'container'
        )
        if (nonContainerVariant) {
          context.report({
            node,
            messageId: 'interfaceWithNonContainerVariants',
            data: {
              interfaceName: node.id.name,
              variantValue: nonContainerVariant.value
            }
          })
          return
        }
      },
      TSTypeAliasDeclaration(node) {
        const jsDocTags = getJsDocTags(node)
        const allowedVariants = ['internal', 'typed_keys_quirk', 'untagged']

        const invalidVariant = jsDocTags.find(
          ({ tag, value }) =>
            tag === 'variants' &&
            !allowedVariants.some((allowed) => value.startsWith(allowed))
        )

        if (invalidVariant) {
          context.report({
            node,
            messageId: 'invalidVariantsTag',
            data: {
              typeName: node.id.name,
              variantValue: invalidVariant.value,
              allowedValues: allowedVariants.join(', ')
            }
          })
        }
      }
    }
  },
  meta: {
    docs: {
      description:
        '@variants is only supported on Interface types, not on Request or Response classes. Use value_body pattern instead.'
    },
    messages: {
      noVariantsOnResponses:
        '@variants on {{className}} is not supported in metamodel. {{suggestion}}',
      interfaceWithNonContainerVariants:
        "Interface '{{ interfaceName }}' has '@variants {{ variantValue }}' but only 'container' is allowed for interfaces.",
      invalidVariantsTag:
        "Type alias '{{ typeName }}' has invalid '@variants {{ variantValue }}'. Must start with: {{ allowedValues }}."
    },
    type: 'problem',
    schema: []
  },
  defaultOptions: []
})
