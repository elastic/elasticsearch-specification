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
import rule from '../rules/single-key-dictionary-key-is-string.js'

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

ruleTester.run('single-key-dictionary-key-is-string', rule, {
  valid: [
    `type MyDict = SingleKeyDictionary<string, object>`,
    `type MyDict = SingleKeyDictionary<string, any>`,
    `type MyDict = SingleKeyDictionary<string, number>`,
    `enum MyEnum { foo, bar, baz }
     type MyDict = SingleKeyDictionary<MyEnum, object>`,
  ],
  invalid: [
    {
      code:
        `type MyKey = string | boolean
         type MyDict = SingleKeyDictionary<MyKey, any>`,
      errors: [{ messageId: 'stringKey' }]
    },
    {
      code: `type MyDict = SingleKeyDictionary<string | number, any>`,
      errors: [{ messageId: 'stringKey' }]
    },
    {
      code: `type MyDict = SingleKeyDictionary<boolean, any>`,
      errors: [{ messageId: 'stringKey' }]
    },
    {
      code: `type MyDict = SingleKeyDictionary<object, any>`,
      errors: [{ messageId: 'stringKey' }]
    }
  ],
})
