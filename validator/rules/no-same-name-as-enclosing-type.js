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
import ts from "typescript";

const createRule = ESLintUtils.RuleCreator(name => `https://example.com/rule/${name}`)

export default createRule({
  name: 'no-same-name-as-enclosing-type',
  create(context) {
    return {
      ClassDeclaration(node) {
        if (!node.id || !node.id.name) {
          return; // anonymous class - nothing to check
        }
        const services = ESLintUtils.getParserServices(context)
        const tsClass = services.esTreeNodeToTSNodeMap.get(node);
        if (!tsClass || !tsClass.members) {
          return; // no fields
        }
        const className = node.id.name;
        for (const member of tsClass.members) {
            // Property declarations on the class (instance or static fields)
            if (ts.isPropertyDeclaration(member) || ts.isPropertySignature?.(member)) {
                const name = member.name;
                if (name && name.kind === ts.SyntaxKind.Identifier) {
                    if (String(name.escapedText).toUpperCase() === className.toUpperCase()) {
                        context.report({
                            node,
                            messageId: 'shouldNotUseClassNameForFieldNames',
                            data: {
                                class: className,
                                suggestion: 'Fields in a class should not have the same name as the class itself.'
                            }
                        })
                    }
                }
            }
        }
      },
    }
  },
  meta: {
    docs: {
      description: 'Classes having fields with the same name as the class is breaking for some client libraries.',
    },
    messages: {
      shouldNotUseClassNameForFieldNames: 'Class "{{class}}" has invalid fields. {{suggestion}}.'
    },
    type: 'suggestion',
  },
  defaultOptions: []
})
