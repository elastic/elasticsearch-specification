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

import { ESLintUtils, TSESTree } from '@typescript-eslint/utils'

const IMPLEMENTS_KEYWORD = 119;
const EXTENDS_KEYWORD = 96;

export const noPropertyOverload = ESLintUtils.RuleCreator.withoutDocs({
    name: "no-property-overload",
    meta: {
        type: "problem",
        docs: {
            description: "Disallow properties that shadow or overload properties from a base interface or class.",
            requiresTypeChecking: true,
        },
        messages: {
            propertyOverload: "Property '{{propertyName}}' on {{typeName}} '{{declarationName}}' overloads a property from a base type."
        },
        schema: [],
    },
    defaultOptions: [],

    create(context) {
        const services = ESLintUtils.getParserServices(context);
        if (!services.program) {
            return {};
        }

        const typeChecker = services.program.getTypeChecker();
        const esTreeNodeToTSNodeMap = services.esTreeNodeToTSNodeMap;

        const getPropertyName = (node) => node.name ?? node.value ?? null;

        function collectAllProperties(type, inheritedPropertyNames, visited = new Set()) {
            if (visited.has(type)) return;
            visited.add(type);

            type.getProperties().forEach(prop => inheritedPropertyNames.add(prop.name));

            type.symbol?.declarations?.forEach(declaration => {
                declaration.heritageClauses?.forEach(clause => {
                    if (clause.token === IMPLEMENTS_KEYWORD || clause.token === EXTENDS_KEYWORD) {
                        clause.types.forEach(typeNode => {
                            const relatedType = typeChecker.getTypeAtLocation(typeNode);
                            collectAllProperties(relatedType, inheritedPropertyNames, visited);
                        });
                    }
                });
            });

            (type.getBaseTypes() || []).forEach(baseType => {
                collectAllProperties(baseType, inheritedPropertyNames, visited);
            });
        }

        return {
            'TSInterfaceDeclaration, ClassDeclaration'(node) {
                const isInterface = node.type === 'TSInterfaceDeclaration';
                const hasInheritance = isInterface
                    ? node.extends?.length > 0
                    : node.superClass || node.implements?.length > 0;

                if (!hasInheritance) return;

                const tsNode = esTreeNodeToTSNodeMap.get(node);
                const currentType = typeChecker.getTypeAtLocation(tsNode);
                const baseTypes = currentType.getBaseTypes() || [];

                const inheritedPropertyNames = new Set();
                baseTypes.forEach(baseType => {
                    collectAllProperties(baseType, inheritedPropertyNames, new Set());
                });

                const typeName = isInterface ? 'interface' : 'class';

                node.body.body.forEach(propNode => {
                    if (propNode.type !== 'TSPropertySignature' && propNode.type !== 'PropertyDefinition') {
                        return;
                    }

                    const localPropName = getPropertyName(propNode.key);
                    if (!localPropName || !inheritedPropertyNames.has(localPropName)) return;

                    context.report({
                        node: propNode.key,
                        messageId: "propertyOverload",
                        data: {
                            propertyName: localPropName,
                            typeName,
                            declarationName: node.id.name,
                        },
                    });
                });
            }
        };
    }
});

export default noPropertyOverload;
