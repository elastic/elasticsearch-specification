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
import noAllStringLiteralUnions from '../rules/no-all-string-literal-unions.js'

const ruleTester = new RuleTester({
  languageOptions: {
    parserOptions: {
      projectService: {
        allowDefaultProject: ['*.ts*']
      },
      tsconfigRootDir: import.meta.dirname
    }
  }
})

const rule = noAllStringLiteralUnions

ruleTester.run('no-all-string-literal-unions', rule, {
  valid: [
    {
      name: 'enum',
      code: `enum MyEnum { foo, bar, baz }
         type MyDict = Dictionary<MyEnum, object>`
    },
    {
      name: 'type',
      code: `type MyType = "foo" | int`
    },
    {
      name: 'single string literal (not a union)',
      code: `type SingleValue = "foo"`
    },
    {
      name: 'union with null/undefined',
      code: `type MaybeString = "active" | null`
    },
    {
      name: 'union with number',
      code: `type StringOrNumber = "default" | number`
    },
    {
      name: 'number literal unions (should only catch string literals)',
      code: `type NumericUnion = 1 | 2 | 3`
    },
    {
      name: 'union with type reference',
      code: `type MyType = string; type Mixed = "literal" | MyType`
    }
  ],
  invalid: [
    {
      name: 'all string literal union',
      code: `type MyType = "foo" | "bar" | "baz"`,
      errors: [{ messageId: 'noAllStringLiteralUnions' }]
    },
    {
      name: 'interface with string literal union',
      code: `export interface MyInterface {
            some?: "foo" | "bar" | "baz"
            other?: 'foo' | 'bar' | 'baz'
            }`,
      errors: [
        { messageId: 'noAllStringLiteralUnions' },
        { messageId: 'noAllStringLiteralUnions' }
      ]
    },
    {
      name: 'function with string literal union',
      code: `function getStatus(): "pending" | "complete" { return "pending" }`,
      errors: [{ messageId: 'noAllStringLiteralUnions' }]
    },
    {
      name: 'class with string literal union',
      code: `class Config { status: "active" | "inactive" }`,
      errors: [{ messageId: 'noAllStringLiteralUnions' }]
    }
  ]
})
