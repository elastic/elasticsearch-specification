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

const TYPE_SUGGESTIONS = {
  'Record': 'Use Dictionary instead',
  'Partial': 'Use spec-defined aliases instead',
  'Required': 'Use spec-defined aliases instead',
  'Pick': 'Use spec-defined aliases instead',
  'Omit': 'Use spec-defined aliases instead',
  'Map': 'Use Dictionary instead',
  'Set': 'Use an array type instead (e.g., string[])',
  'WeakMap': 'Use Dictionary instead',
  'WeakSet': 'Use an array type instead',
};

export default createRule({
  name: 'no-same-name-as-enclosing-type',
  create(context) {
    return {
      TSTypeReference(node) {
        console.log("BBBBBBBBBBB")
        const typeName = node.typeName.name;
        if (TYPE_SUGGESTIONS[typeName]) {
          context.report({ 
            node, 
            messageId: 'noNativeType',
            data: {
              type: typeName,
              suggestion: TYPE_SUGGESTIONS[typeName]
            }
          })
        }
      },
    }
  },
  meta: {
    docs: {
      description: 'TypeScript native utility and collection types not allowed, use spec-defined aliases',
    },
    messages: {
      noNativeType: 'Native TypeScript type "{{type}}" is not allowed. {{suggestion}}.'
    },
    type: 'suggestion',
  },
  defaultOptions: []
})
