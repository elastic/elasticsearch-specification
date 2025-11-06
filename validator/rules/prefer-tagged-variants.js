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
import { ESLintUtils, TSESTree } from '@typescript-eslint/utils';

const createRule = ESLintUtils.RuleCreator(name => `https://example.com/rule/${name}`)

/**
 * Heuristic to identify class types by checking if the type name is PascalCase
 * and not a known primitive or utility type.
 */
function isLikelyClassType(typeNode) {
  if (typeNode.type === 'TSTypeReference' && typeNode.typeName.type === 'Identifier') {
    const name = typeNode.typeName.name;
    
    const knownNonClassTypes = [
      'string', 'number', 'boolean', 'null', 'undefined',
      'integer', 'long', 'short', 'byte', 'float', 'double', 'uint', 'ulong',
      'Array', 'Dictionary', 'SingleKeyDictionary', 'UserDefinedValue',
      'Field', 'Id', 'IndexName', 'Name'
    ];
    
    if (knownNonClassTypes.includes(name)) {
      return false;
    }
    
    const hasUpperStart = /^[A-Z]/.test(name);
    const hasLowercase = /[a-z]/.test(name);
    
    return hasUpperStart && hasLowercase;
  }
  
  return false;
}

export default createRule({
  name: 'prefer-tagged-variants',
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
        
        // skip Type | Type[] pattern
        if (node.types.length === 2) {
          const [first, second] = node.types;
          
          // check Type | Type[]
          if (second.type === 'TSArrayType' && 
              first.type === 'TSTypeReference' &&
              second.elementType?.type === 'TSTypeReference') {
            const firstName = first.typeName?.name;
            const secondName = second.elementType.typeName?.name;
            if (firstName && firstName === secondName) {
              return;
            }
          }
          
          // check Type[] | Type
          if (first.type === 'TSArrayType' &&
              first.elementType?.type === 'TSTypeReference' &&
              second.type === 'TSTypeReference') {
            const firstName = first.elementType.typeName?.name;
            const secondName = second.typeName?.name;
            if (firstName && firstName === secondName) {
              return;
            }
          }
        }
        
        const allMembersAreClasses = node.types.every(typeNode => {
          if (typeNode.type === 'TSArrayType') {
            return isLikelyClassType(typeNode.elementType);
          }
          return isLikelyClassType(typeNode);
        });
        
        if (allMembersAreClasses && node.types.length >= 2) {
          context.report({ 
            node, 
            messageId: 'preferTaggedVariants',
            data: {
              suggestion: 'Use tagged variants with @variants internal or @variants container (external). See modeling guide: https://github.com/elastic/elasticsearch-specification/blob/main/docs/modeling-guide.md#variants'
            }
          })
        }
      },
    }
  },
  meta: {
    docs: {
      description: 'Union of class types should use tagged variants (internal or external) instead of inline unions for better code generation in statically-typed languages.',
    },
    messages: {
      preferTaggedVariants: 'Union of class types is not allowed. {{suggestion}}.'
    },
    type: 'problem',
    schema: []
  },
  defaultOptions: []
})

