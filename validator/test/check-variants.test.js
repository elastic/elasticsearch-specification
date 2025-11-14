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
import rule from '../rules/check-variants.js'

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

ruleTester.run('check-variants', rule, {
  valid: [
    {
      name: 'not Request or Response',
      code: `/** @variants container */
export class MyClass {
    body: MyContainer
}`
    },
    {
      name: 'internal tag on type alias',
      code: `/** @variants internal tag='type' */
export type MyType = string | number`
    }
  ],
  invalid: [
    {
      name: 'Request has variants tag',
      code: `/** @variants container */
export class Request {}`,
      errors: [{ messageId: 'variantsOnRequestOrResponse' }]
    },
    {
      name: 'Response has variants tag',
      code: `/** @variants container */
export class Response {}`,
      errors: [{ messageId: 'variantsOnRequestOrResponse' }]
    },
    {
      name: 'Interface has non-container variants tag',
      code: `/** @variants internal */
export class RankContainer {}`,
      errors: [{ messageId: 'interfaceWithNonContainerVariants' }]
    },
    {
      name: 'Type alias has invalid variants tag',
      code: `/** @variants invalid */
export type MyType = string | number`,
      errors: [{ messageId: 'invalidVariantsTag' }]
    }
  ]
})
