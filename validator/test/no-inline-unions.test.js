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
import rule from '../rules/no-inline-unions.js'

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

ruleTester.run('no-inline-unions', rule, {
  valid: [
    `export type MyUnion = string | number`,
    `export type Result = Success | Error`,
    `type Status = 'active' | 'inactive' | 'pending'`,
    `type InputType = string | string[]
     class MyClass {
       input: InputType
     }`,
    `type QueryOrArray = QueryContainer | QueryContainer[]
     interface MyInterface {
       filter?: QueryOrArray
     }`,
    `class MyClass {
       name: string
       count: integer
       items: string[]
     }`,
    `type Item = string | number
     class MyClass {
       items: Array<Item>
     }`,
    `class MyClass {
       id: string | null
     }`,
    `interface Config {
       value: integer | undefined
     }`,
  ],
  invalid: [
    {
      code: `class MyClass {
        filter: QueryContainer | QueryContainer[]
      }`,
      errors: [{ messageId: 'noInlineUnion' }]
    },
    {
      code: `interface MyInterface {
        input: string | string[]
      }`,
      errors: [{ messageId: 'noInlineUnion' }]
    },
    {
      code: `export class Request {
        value: string | number | boolean
      }`,
      errors: [{ messageId: 'noInlineUnion' }]
    },
    {
      code: `class Container {
        content: Success | Error | Pending
      }`,
      errors: [{ messageId: 'noInlineUnion' }]
    },
    {
      code: `interface Config {
        seed?: long | string
      }`,
      errors: [{ messageId: 'noInlineUnion' }]
    },
  ],
})

