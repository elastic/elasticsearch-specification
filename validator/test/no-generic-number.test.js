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
import rule from '../rules/no-generic-number.js'

const ruleTester = new RuleTester({
  languageOptions: {
    parserOptions: {
      projectService: {
        allowDefaultProject: ['*.ts*'],
      },
      tsconfigRootDir: import.meta.dirname,
    },
  },
})

ruleTester.run('no-generic-number', rule, {
  valid: [
    // Using concrete numeric types is valid
    `type MyType = { count: integer }`,
    `type MyType = { amount: long }`,
    `type MyType = { price: float }`,
    `type MyType = { value: double }`,
    `type MyType = { small: short }`,
    `type MyType = { tiny: byte }`,
    `type MyType = { unsigned: uint }`,
    `type MyType = { bigUnsigned: ulong }`,
    `class MyClass { score: float; count: integer; }`,
    `interface MyInterface { id: long; ratio: double; }`,
    // Union types with concrete types
    `type MyType = { value: integer | string }`,
    `type MyType = { id: long | float }`,
    // Arrays and generics with concrete types
    `type MyType = { numbers: integer[] }`,
    `type MyType = { values: Array<long> }`,
    // Dictionary with concrete types
    `type MyType = Dictionary<string, integer>`,
  ],
  invalid: [
    {
      code: `type MyType = { count: number }`,
      errors: [{ messageId: 'noGenericNumber' }]
    },
    {
      code: `class MyClass { status: number }`,
      errors: [{ messageId: 'noGenericNumber' }]
    },
    {
      code: `interface MyInterface { id: number }`,
      errors: [{ messageId: 'noGenericNumber' }]
    },
    {
      code: `type MyType = { value: string | number }`,
      errors: [{ messageId: 'noGenericNumber' }]
    },
    {
      code: `type MyType = { items: number[] }`,
      errors: [{ messageId: 'noGenericNumber' }]
    },
    {
      code: `type MyType = { items: Array<number> }`,
      errors: [{ messageId: 'noGenericNumber' }]
    },
    {
      code: `type MyType = Dictionary<string, number>`,
      errors: [{ messageId: 'noGenericNumber' }]
    },
    {
      code: `export class Response { body: { count: number } }`,
      errors: [{ messageId: 'noGenericNumber' }]
    }
  ],
})

