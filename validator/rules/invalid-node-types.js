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
