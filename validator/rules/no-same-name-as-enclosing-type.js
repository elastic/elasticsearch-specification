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
import {ESLintUtils} from '@typescript-eslint/utils';

const createRule = ESLintUtils.RuleCreator(name => `https://example.com/rule/${name}`)

/**
 * Finds if selected field has a @codegen_name comment above
 * @param comments - Array of comments from the class
 * @param field - Definition of the field
 * @returns {boolean}
 */
function commentAboveFieldHasCodegenName(comments, field) {
    for (const comment of comments) {
        if (comment.loc.end.line === field.loc.start.line-1) { // checking the comment is one line above the field
            if (comment.value && comment.value.includes("@codegen_name") && !comment.value.includes(field.name))
            return true
        }
    }
    return false
}

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
                for (const element of node.body.body) {
                    if (element.type === "PropertyDefinition" && element.key.name && element.key.type === "Identifier") {
                        const fieldName = element.key.name
                        const field = element.key;
                        if (String(fieldName).toUpperCase() === className.toUpperCase()) {
                            const sourceCode = context.getSourceCode();
                            const commentsInside = sourceCode.getCommentsInside(node)
                            if (!commentsInside || commentsInside.length === 0 || !commentAboveFieldHasCodegenName(commentsInside, field)) {
                                context.report({
                                    node,
                                    messageId: 'shouldNotUseClassNameForFieldNames',
                                    data: {
                                        class: className,
                                        suggestion: 'Either change the class name, or if it\'s not possible, use a different codegen name for the field by commenting it with /** @codegen_name different_name **/.'
                                    }
                                })
                            }
                        }
                    }
                }
            }
            ,
        }
    },
    meta:
        {
            docs: {
                description: 'Classes having fields with the same name as the class is breaking for some client libraries.'
            }
            ,
            messages: {
                shouldNotUseClassNameForFieldNames: 'Class "{{class}}" has invalid fields. {{suggestion}}.'
            }
            ,
            type: 'suggestion',
        }
    ,
    defaultOptions: []
})
