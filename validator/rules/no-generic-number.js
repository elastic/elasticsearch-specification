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
import * as path from 'path';

const createRule = ESLintUtils.RuleCreator(name => `https://example.com/rule/${name}`)

export default createRule({
  name: 'no-generic-number',
  create(context) {
    return {
      TSNumberKeyword(node) {
        const filename = context.filename || context.getFilename();
        const normalizedPath = path.normalize(filename);
        
        // allow number only in _types/Numeric.ts
        if (normalizedPath.includes(path.join('_types', 'Numeric.ts'))) {
          return;
        }

        context.report({ 
          node, 
          messageId: 'noGenericNumber',
          data: {
            types: 'short, byte, integer, uint, long, ulong, float, or double'
          }
        })
      },
    }
  },
  meta: {
    docs: {
      description: 'Force usage of concrete numeric types instead of generic "number" type',
    },
    messages: {
      noGenericNumber: 'Generic "number" type is not allowed. Use concrete numeric types instead: {{types}}. See specification/_types/Numeric.ts for available types.'
    },
    type: 'problem',
    schema: []
  },
  defaultOptions: []
})

