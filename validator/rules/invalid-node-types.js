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
  name: 'invalid-node-types',
  create(context) {
    return {
      'ArrowFunctionExpression, FunctionDeclaration, FunctionExpression, TSFunctionType, TSEmptyBodyFunctionExpression, TSDeclareFunction, MethodDefinition'(node) {
        context.report({ node, messageId: 'function' })
      },
      'DoWhileStatement, ForInStatement,  ForOfStatement, ForStatement, WhileStatement'(node) {
        context.report({ node, messageId: 'loop' })
      },
      'CatchClause, ThrowStatement, TryStatement'(node) {
        context.report({ node, messageId: 'exception' })
      },
      'TSAsyncKeyword, AwaitExpression'(node) {
        context.report({ node, messageId: 'async' })
      },
      'SwitchStatement, SwitchCase, ConditionalExpression, IfStatement, TSConditionalType'(node) {
        context.report({ node, messageId: 'condition' })
      },
      TSUndefinedKeyword(node) {
        context.report({ node, messageId: 'undefined' })
      },
      TSNeverKeyword(node) {
        context.report({ node, messageId: 'never' })
      },
    }
  },
  meta: {
    docs: {
      description: 'The Elasticsearch specification only uses a subset of the TypeScript language, primarily classes, interfaces, enums and type aliases.',
    },
    messages: {
      function: 'Functions are not supported by the Elasticsearch specification',
      loop: 'Loops are not supported by the Elasticsearch specification',
      exception: 'Exception management is not supported by the Elasticsearch specification',
      async: 'Async/await syntax is not supported by the Elasticsearch specification',
      condition: 'Conditional expressions are not supported by the Elasticsearch specification',
      undefined: '`undefined` is not a valid type in the Elasticsearch specification',
      never: '`never` is not a valid type in the Elasticsearch specification',
    },
    type: 'suggestion',
  },
  defaultOptions: []
})
