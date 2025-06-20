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
import rule from '../rules/dictionary-key-is-string.js'

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

ruleTester.run('dictionary-key-is-string', rule, {
  valid: [
    `type MyDict = Dictionary<string, object>`,
    `type MyDict = Dictionary<string, any>`,
    `type MyDict = Dictionary<string, number>`,
    `enum MyEnum { foo, bar, baz }
     type MyDict = Dictionary<MyEnum, object>`,
  ],
  invalid: [
    {
      code:
        `type MyKey = string | boolean
         type MyDict = Dictionary<MyKey, any>`,
      errors: [{ messageId: 'stringKey' }]
    },
    {
      code: `type MyDict = Dictionary<string | number, any>`,
      errors: [{ messageId: 'stringKey' }]
    },
    {
      code: `type MyDict = Dictionary<boolean, any>`,
      errors: [{ messageId: 'stringKey' }]
    },
    {
      code: `type MyDict = Dictionary<object, any>`,
      errors: [{ messageId: 'stringKey' }]
    }
  ],
})
