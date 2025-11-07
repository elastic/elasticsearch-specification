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
import rule from '../rules/no-native-types.js'

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

ruleTester.run('no-native-types', rule, {
  valid: [
    `type MyDict = Dictionary<string, object>`,
    `type MyMapping = Dictionary<string, any>`,
    `type MyArray = string[]`,
    `type MyType = { field: string }`,
    `class MyClass { prop: integer }`,
  ],
  invalid: [
    {
      code: `type MyRecord = Record<string, object>`,
      errors: [{ messageId: 'noNativeType' }]
    },
    {
      code: `type MyPart = Partial<SomeType>`,
      errors: [{ messageId: 'noNativeType' }]
    },
    {
      code:  `type MyReq = Required<SomeType>`,
      errors: [{ messageId: 'noNativeType' }]
    },
    {
      code: `type MyPick = Pick<SomeType, "field">`,
      errors: [{ messageId: 'noNativeType' }]
    },
    {
      code: `type MyOmit = Omit<SomeType, "field">`,
      errors: [{ messageId: 'noNativeType' }]
    },
    {
      code: `type MyMap = Map<string, object>`,
      errors: [{ messageId: 'noNativeType' }]
    },
    {
      code: `type MySet = Set<string>`,
      errors: [{ messageId: 'noNativeType' }]
    },
    {
      code: `type MyWeakMap = WeakMap<object, string>`,
      errors: [{ messageId: 'noNativeType' }]
    },
    {
      code: `type MyWeakSet = WeakSet<object>`,
      errors: [{ messageId: 'noNativeType' }]
    },
    {
      code: `class MyClass { items: Map<string, number> }`,
      errors: [{ messageId: 'noNativeType' }]
    },
    {
      code: `type MyList = Array<integer>`,
      errors: [{ messageId: 'noNativeType' }]
    },
  ],
})
