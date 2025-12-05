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
import { RuleTester } from '@typescript-eslint/rule-tester'
import { noDuplicateTypeNamesFactory, ___testing_only} from '../rules/no-duplicate-type-names.js'

// TypeScript SyntaxKind constants
const TS_SYNTAX_KIND_CLASS = 264
const TS_SYNTAX_KIND_IDENTIFIER = 80

const ruleTester = new RuleTester({
    languageOptions: {
        parserOptions: {
            projectService: {
                allowDefaultProject: ['*.ts*', 'root/specification/*/*/*.ts*'],
            },
            tsconfigRootDir: import.meta.dirname,
        },
    },
})

class MockChild {
    kind;
    escapedText;
    children = [];
    constructor(kind, escapedText, children = []) {
        this.kind = kind
        this.escapedText = escapedText
        this.children = children
    }
    forEachChild(callback) {
        this.children.forEach(child => callback(child))
    }
    getLineAndCharacterOfPosition(position) {
        return { line: 0, character: 0 }
    }

}

class MockSourceFile {
    fileName;
    children = [];
    constructor(fileName, children = []) {
        this.fileName = fileName
        this.children = children
    }
    forEachChild(callback) {
        this.children.forEach(child => callback(child))
    }
    getLineAndCharacterOfPosition(position) {
        return { line: 0, character: 0 }
    }
}

class MockProgram {
    sourceFiles = [];
    constructor(sourceFiles = []) {
        this.sourceFiles = sourceFiles
    }
    getSourceFiles() {
        return this.sourceFiles
    }
}

class MockParserServices {
    program;
    constructor() {
        this.program = new MockProgram();
    }
    getProgram() {
        return this.program
    }
    reset() {
        this.program = new MockProgram();
    }
    setProgram(program) {
        this.program = program
    }
}

const mockParserServices = new MockParserServices()

const mockGetParserServices = (context) => {
    return mockParserServices
}

const rule = noDuplicateTypeNamesFactory(mockGetParserServices)

// Helper functions for creating test data
function createMockType(typeName, fileName, kind = TS_SYNTAX_KIND_CLASS) {
    return new MockSourceFile(fileName, [
        new MockChild(kind, `export class ${typeName} {};`, [
            new MockChild(TS_SYNTAX_KIND_IDENTIFIER, typeName)
        ])
    ])
}

function createTestOptions(existingDuplicates = {}, ignoreNames = []) {
    return [{ ignoreNames, existingDuplicates }]
}

function setupCachedTest(cacheEntries) {
    ___testing_only.setClearCache(false)
    ___testing_only.cache.clear()
    Object.entries(cacheEntries).forEach(([typeName, locations]) => {
        ___testing_only.cache.set(typeName, locations)
    })
}

function setupProgramTest(mockSourceFiles) {
    ___testing_only.setClearCache(true)
    mockParserServices.setProgram(new MockProgram(mockSourceFiles))
}

function cleanupTest() {
    mockParserServices.reset()
}

ruleTester.run('no-duplicate-type-names', rule, {
    valid: [
        {
            before() {
                ___testing_only.setClearCache(true)
            },
            name: 'No duplicate class declaration, empty cache',
            filename: 'root/specification/some/namespace/MyFile.ts',
            code: `export class MyType {};`,
            options: createTestOptions(),
        },
        {
            before() {
                setupCachedTest({
                    MyType: [
                        {typeName: 'MyType', fileName: 'root/specification/some/namespace/MyFile.ts', line: 1, column: 1},
                        {typeName: 'MyType', fileName: 'root/specification/other/namespace/MyOtherFile.ts', line: 1, column: 1},
                    ]
                })
            },
            filename: 'root/specification/other/namespace/MyOtherFile.ts',
            name: 'Cached duplicate class declaration, but in existingDuplicates',
            code: `export class MyType {};`,
            options: createTestOptions({ MyType: ['some.namespace', 'other.namespace'] }),
        },
        {
            before() {
                setupProgramTest([
                    createMockType('MyType', 'root/specification/some/namespace/MyFile.ts')
                ])
            },
            after() {
                cleanupTest()
            },
            filename: 'root/specification/other/namespace/MyOtherFile.ts',
            name: 'Not cached duplicate class declaration, but in existingDuplicates',
            code: `export class MyType {};`,
            options: createTestOptions({ MyType: ['some.namespace', 'other.namespace'] }),
        }
    ],
    invalid: [
        {
            before() {
                setupCachedTest({
                    MyType: [
                        {typeName: 'MyType', fileName: 'root/specification/some/namespace/MyFile.ts', line: 1, column: 1},
                        {typeName: 'MyType', fileName: 'root/specification/other/namespace/MyOtherFile.ts', line: 1, column: 1},
                    ]
                })
            },
            filename: 'root/specification/other/namespace/MyOtherFile.ts',
            name: 'Cached duplicate class declaration, not in existingDuplicates',
            code: `export class MyType {};`,
            options: createTestOptions(),
            errors: [{ messageId: 'duplicateTypeName' }],
        },
        {
            before() {
                setupProgramTest([
                    createMockType('MyType', 'root/specification/some/namespace/MyFile.ts')
                ])
            },
            after() {
                cleanupTest()
            },
            filename: 'root/specification/other/namespace/MyOtherFile.ts',
            name: 'Not cached duplicate class declaration',
            code: `export class MyType {};`,
            options: createTestOptions(),
            errors: [{ messageId: 'duplicateTypeName' }],
        },
        // Parameterized tests for different type kinds
        ...['TypeAlias', 'Enum', 'Interface'].map(typeKind => {
            const codeMap = {
                TypeAlias: 'type MyType = string;',
                Enum: 'enum MyType { A, B, C }',
                Interface: 'interface MyType { a: string; }'
            }
            return {
                before() {
                    setupProgramTest([
                        createMockType('MyType', 'root/specification/some/namespace/MyFile.ts')
                    ])
                },
                after() {
                    cleanupTest()
                },
                filename: 'root/specification/other/namespace/MyOtherFile.ts',
                name: `Not cached duplicate, ${typeKind}`,
                code: codeMap[typeKind],
                options: createTestOptions(),
                errors: [{ messageId: 'duplicateTypeName' }],
            }
        })
    ]
})
