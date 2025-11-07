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
import { ESLintUtils } from '@typescript-eslint/utils';

const createRule = ESLintUtils.RuleCreator(name => `https://example.com/rule/${name}`)

export default createRule({
  name: 'request-must-have-urls',
  create(context) {
    return {
      TSInterfaceDeclaration(node) {
        const extendsRequestBase = node.extends?.some(
          (heritage) =>
            heritage.expression.type === 'Identifier' &&
            heritage.expression.name === 'RequestBase'
        );

        const isNamedRequest = node.id.name === 'Request';

        if (!extendsRequestBase && !isNamedRequest) {
          return;
        }

        const hasUrls = node.body.body.some(
          (member) =>
            member.type === 'TSPropertySignature' &&
            member.key.type === 'Identifier' &&
            member.key.name === 'urls'
        );

        if (!hasUrls) {
          context.report({
            node,
            messageId: 'missingUrls',
            data: {
              interfaceName: node.id.name,
            },
          });
        }
      },
    }
  },
  meta: {
    docs: {
      description: 'All Request interfaces must have a urls property defining their endpoints',
    },
    messages: {
      missingUrls: 'Request interface "{{interfaceName}}" must have a urls property with endpoint paths and methods'
    },
    type: 'problem',
  },
  defaultOptions: []
})
