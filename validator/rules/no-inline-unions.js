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
  name: 'no-inline-unions',
  create(context) {
    return {
      TSUnionType(node) {
        const parent = node.parent;
        
        const isPropertyAnnotation = 
          parent?.type === 'TSTypeAnnotation' && 
          parent.parent?.type === 'PropertyDefinition';
          
        const isInterfaceProperty =
          parent?.type === 'TSTypeAnnotation' &&
          parent.parent?.type === 'TSPropertySignature';
        
        if (!isPropertyAnnotation && !isInterfaceProperty) {
          return;
        }
        
        if (node.types.length === 2) {
          const [first, second] = node.types;
          
          // skip Type | null or Type | undefined
          const hasNullOrUndefined = 
            first.type === 'TSNullKeyword' || first.type === 'TSUndefinedKeyword' ||
            second.type === 'TSNullKeyword' || second.type === 'TSUndefinedKeyword';
          if (hasNullOrUndefined) {
            return;
          }
          
          // skip Type | Type[] pattern
          if (second.type === 'TSArrayType') {
            if (first.type === second.elementType?.type) {
              if (first.type === 'TSTypeReference' && second.elementType.type === 'TSTypeReference') {
                // for reference types, check names match
                if (first.typeName?.name === second.elementType.typeName?.name) {
                  return;
                }
              } else if (first.type === second.elementType.type) {
                // for primitive types (string, number, etc.), types already match
                return;
              }
            }
          }
          
          // skip Type[] | Type pattern
          if (first.type === 'TSArrayType') {
            if (first.elementType?.type === second.type) {
              if (first.elementType.type === 'TSTypeReference' && second.type === 'TSTypeReference') {
                // for reference types, check names match
                if (first.elementType.typeName?.name === second.typeName?.name) {
                  return;
                }
              } else if (first.elementType.type === second.type) {
                // for primitive types (string, number, etc.), types already match
                return;
              }
            }
          }
        }
        
        context.report({ 
          node, 
          messageId: 'noInlineUnion',
          data: {
            suggestion: 'Define a named type alias (e.g., "export type MyUnion = A | B") and use that type instead'
          }
        })
      },
    }
  },
  meta: {
    docs: {
      description: 'Inline union types are not allowed in properties/fields. Use a named type alias instead to improve code generation for statically-typed languages.',
    },
    messages: {
      noInlineUnion: 'Inline union types are not allowed. {{suggestion}}.'
    },
    type: 'problem',
    schema: []
  },
  defaultOptions: []
})

