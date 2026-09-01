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
import ts from 'typescript';

/**
 * Formats location information for error messages
 * @param {Array} classes - Array of class locations
 * @returns {string} Formatted location string
 */
function formatLocation(classes) {
    const locations = classes.slice(0, 3).map(c =>
        `\n\t${c.fileName}:${c.line}:${c.column}`
    ).join('');

    const additionalCount = classes.length > 3 ? `\n        ... and ${classes.length - 3} more` : '';
    const plural = classes.length > 1 ? 's' : '';

    return `${classes.length} other location${plural}:${locations}${additionalCount}`;
}

const typeCache = new Map();
let clearCache = true;

function getNamespace(context) {
    const filename = context.filename;
    const specIndex = filename.indexOf('/specification/');

    if (specIndex === -1) {
        return filename;
    }

    const pathAfterSpec = filename.substring(specIndex + '/specification/'.length);
    return pathAfterSpec.split('/').slice(0, -1).join('.');
}

export const noDuplicateTypeNamesFactory = (getParserServices) => {
    if (!getParserServices) {
        throw new Error('getParserServices is required');
    }
    return ESLintUtils.RuleCreator.withoutDocs(
        {
            name: 'no-duplicate-type-names',
            meta: {
                type: 'problem',
                docs: {
                    description: 'Ensure type aliases and interfaces have unique names across the package',
                },
                messages: {
                    duplicateTypeName: 'Duplicate: "{{typeName}}" is already declared in {{location}}\nRename this type to avoid conflicts with other types in the specification.'
                },
                schema: [
                    {
                        type: 'object',
                        properties: {
                            ignoreNames: {
                                type: 'array',
                                items: {
                                    type: 'string'
                                },
                                description: 'Array of type names to ignore when checking for duplicates'
                            },
                            existingDuplicates: {
                                type: 'object',
                                additionalProperties: {
                                    type: 'array',
                                    items: {
                                        type: 'string'
                                    }
                                },
                                description: 'Object mapping type names to arrays of locations where duplicates are expected'
                            }
                        },
                        additionalProperties: false
                    }
                ],
            },
            defaultOptions: [{ ignoreNames: [], existingDuplicates: {} }],
            create(context) {
                const parserServices = getParserServices(context);
                const { ignoreNames, existingDuplicates } = context.options[0];
                const kinds = [
                    ts.SyntaxKind.FunctionDeclaration,
                    ts.SyntaxKind.ClassDeclaration,
                    ts.SyntaxKind.InterfaceDeclaration,
                    ts.SyntaxKind.TypeAliasDeclaration,
                    ts.SyntaxKind.EnumDeclaration,
                ];

                if (clearCache) {
                    typeCache.clear();
                    clearCache = false;
                }

                function findDuplicates(node) {
                    try {
                        if (!node.id || !node.id.name) {
                            return;
                        }

                        if (ignoreNames.includes(node.id.name)) {
                            return;
                        }

                        const existingDuplicatesForName = existingDuplicates[node.id.name];
                        if (existingDuplicatesForName && existingDuplicatesForName.includes(getNamespace(context))) {
                            return;
                        }

                        let types = typeCache.get(node.id.name);
                        if (!types) {
                            types = [];
                            parserServices.program.getSourceFiles().forEach(sourceFile => {
                                if (sourceFile.fileName.includes('node_modules')) {
                                    return;
                                }

                                sourceFile.forEachChild(fnDecl => {
                                    if (kinds.includes(fnDecl.kind)) {
                                        fnDecl.forEachChild(identifier => {
                                            if (identifier.kind === ts.SyntaxKind.Identifier &&
                                                identifier.escapedText === node.id.name) {
                                                const { line, character } = sourceFile.getLineAndCharacterOfPosition(identifier.pos);
                                                types.push({
                                                    typeName: identifier.escapedText,
                                                    fileName: sourceFile.fileName,
                                                    line: line + 1,
                                                    column: character + 2
                                                });
                                            }
                                        });
                                    }
                                });
                            });
                            typeCache.set(node.id.name, types);
                        }

                        const filteredClasses = types.filter(c => c.fileName !== context.filename);
                        if (filteredClasses.length > 0) {
                            context.report({
                                node: node.id,
                                messageId: 'duplicateTypeName',
                                data: {
                                    typeName: node.id.name,
                                    location: formatLocation(filteredClasses)
                                }
                            });
                        }
                    } catch (error) {
                        console.error('ERROR in findDuplicates:', error.message, error.stack);
                        throw error;
                    }
                }

                return {
                    'ClassDeclaration, InterfaceDeclaration, TypedAliasDeclaration, TSEnumDeclaration, TSInterfaceDeclaration, TSTypeAliasDeclaration'(node) {
                        findDuplicates(node);
                    },
                }
            }
        }
    )
}

export const noDuplicateTypeNames = noDuplicateTypeNamesFactory(ESLintUtils.getParserServices);

export default noDuplicateTypeNames;

export const ___testing_only = {
    cache: typeCache,
    setClearCache(value) {
        clearCache = value;
    }
}
