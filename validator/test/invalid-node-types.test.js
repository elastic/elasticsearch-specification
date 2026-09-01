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
import rule from '../rules/invalid-node-types.js'

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

ruleTester.run('invalid-node-types', rule, {
  valid: [
    `type MyType = number`,
    `enum MyEnum { foo, bar, baz }`,
    `class MyClass {
       foo: boolean
       bar: object
       baz: any
    }`,
    `interface MyInterface {
  id: number
  data: object
  records: Record<string, number[]>[]
}`
  ],
  invalid: [
    {
      code: `type MyFn = (name: string) => boolean`,
      errors: [{ messageId: 'function' }]
    },
    {
      code: `function foo(bar: string): number { return 1 }`,
      errors: [{ messageId: 'function' }]
    },
    {
      code: `try {
  doThing()
} catch (err: any) {
  logError(err)
}`,
      errors: [
        // two messages because TryStatement and CatchClause get flagged separately
        { messageId: 'exception' },
        { messageId: 'exception' },
      ]
    },
    {
      code: `for (let i = 0; i++; i < 5) { console.log(i) }`,
      errors: [{ messageId: 'loop' }]
    },
    {
      code: `while (true) { console.log('hello') }`,
      errors: [{ messageId: 'loop' }]
    },
    {
      code: `for (const i of myArray) { console.log(i) }`,
      errors: [{ messageId: 'loop' }]
    },
    {
      code: `const val = await myFn()`,
      errors: [{ messageId: 'async' }]
    },
    {
      code: `if (true) console.log('true!')`,
      errors: [{ messageId: 'condition' }]
    },
    {
      code: 'const CondType = someCondition ? TypeOne : TypeTwo',
      errors: [{ messageId: 'condition' }]
    },
    {
      code: 'type Foo = undefined',
      errors: [{ messageId: 'undefined' }]
    },
    {
      code: 'type Foo = never',
      errors: [{ messageId: 'never' }]
    }
  ],
})
