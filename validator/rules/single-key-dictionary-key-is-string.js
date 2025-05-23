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
      description: 'SingleKeyDictionary keys must be strings',
    },
    messages: {
      stringKey: "SingleKeyDictionary's key must be a string"
    },
    type: 'suggestion',
  },
  defaultOptions: []
})
