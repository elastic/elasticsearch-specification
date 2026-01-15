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
        const fullText = sourceCode.text

        const nodeStart = node.range[0]
        const textBefore = fullText.substring(
            Math.max(0, nodeStart - 200),
            nodeStart
        )

        console.log(textBefore)

        const hasDeprecatedTag =
            /@deprecated\s/.test(
                textBefore
            )

        if (hasDeprecatedTag) {
          context.report({
            node,
            messageId: 'noVariantsOnResponses',
            data: {
              className,
              suggestion:
                  'Move @variants to a separate body class and use value_body pattern with @codegen_name. See SearchResponse for an example.'
            }
          })
          return
        }

        const hasAvailabilityTag =
            /@availability\s/.test(
                textBefore
            )

        if (hasAvailabilityTag) {
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
      }
    }
  },
  meta: {
    docs: {
      description:
        'AAAA'
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
