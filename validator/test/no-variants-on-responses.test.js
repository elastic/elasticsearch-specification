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
import rule from '../rules/no-variants-on-responses.js'

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

ruleTester.run('no-variants-on-responses', rule, {
  valid: [
    `export class Response {
      /** @codegen_name result */
      body: ResponseBody
    }
    
    /** @variants container */
    export class ResponseBody {
      classification?: ClassificationSummary
      regression?: RegressionSummary
    }`,

    `export class Request {
      path_parts: {}
      query_parameters: {}
      body: RequestBody
    }
    
    /** @variants internal tag='type' */
    export type RequestBody = TypeA | TypeB`,

    `/** @variants container */
    export interface MyContainer {
      option_a?: OptionA
      option_b?: OptionB
    }`,

    `export class Response {
      body: {
        count: integer
        results: string[]
      }
    }`,
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
      code: `/** @variants container */
      export class Response {
        body: {
          classification?: ClassificationSummary
          regression?: RegressionSummary
        }
      }`,
      errors: [{ messageId: 'noVariantsOnResponses' }]
    },
    {
      code: `/** @variants internal tag='type' */
      export class Request {
        path_parts: {}
        query_parameters: {}
        body: SomeType
      }`,
      errors: [{ messageId: 'noVariantsOnResponses' }]
    },
    {
      code: `/** @variants container */
      export class Response {
        body: ResponseData
      }`,
      errors: [{ messageId: 'noVariantsOnResponses' }]
    },
    {
      name: 'Request has variants tag',
      code: `/** @variants container */
export class Request {}`,
      errors: [{ messageId: 'noVariantsOnResponses' }]
    },
    {
      name: 'Response has variants tag',
      code: `/** @variants container */
export class Response {}`,
      errors: [{ messageId: 'noVariantsOnResponses' }]
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
