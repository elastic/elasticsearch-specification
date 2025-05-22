import { ESLintUtils } from '@typescript-eslint/utils';
import ts from 'typescript'

const createRule = ESLintUtils.RuleCreator(name => `https://example.com/rule/${name}`)

export default createRule({
  name: 'single-key-dictionary-key-is-string',
  create(context) {
    return {
      TSTypeReference(node) {
        if (node.typeName.name === 'SingleKeyDictionary') {
          const key = node.typeArguments.params[0]
          switch (key.type) {
            case 'TSTypeReference':
              // trace the reference to its original type definition
              const services = ESLintUtils.getParserServices(context)
              const type = services.getTypeAtLocation(key)

              // check that the type is a string or an enum (enum members evaluate to strings)
              if (type.intrinsicName !== 'string' && !(type.symbol?.flags & ts.SymbolFlags.RegularEnum)) {
                context.report({ node, messageId: 'stringKey' })
              }
              break
            case 'TSStringKeyword':
              // type is string, skip
              break
            default:
              // unknown type!
              context.report({ node, messageId: 'stringKey' })
              break
          }
        }
      },
    }
  },
  meta: {
    docs: {
      description:
        'SingleKeyDictionary keys must be strings',
    },
    messages: {
      stringKey: "SingleKeyDictionary's key must be a string"
    },
    type: 'suggestion',
  },
  defaultOptions: []
})
