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
import rule from '../rules/prefer-tagged-variants.js'

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

ruleTester.run('prefer-tagged-variants', rule, {
  valid: [
    `export type QueryType = BoolQuery | TermQuery | RangeQuery`,
    `class MyClass {
      seed: long | string
    }`,
    `interface Config {
      value: string | number
    }`,
    `class Container {
      query: BoolQuery
    }`,
    `class MyClass {
      items: QueryContainer[]
    }`,
    `type QueryOrArray = QueryContainer | QueryContainer[]
     class MyClass {
       filter: QueryOrArray
     }`,
    `class MyClass {
      config: SamplingConfiguration | null
    }`,
    `interface Status {
      state: 'active' | 'inactive' | 'pending'
    }`,
    `class SearchRequest {
      knn?: KnnSearch | KnnSearch[]
    }`,
    `class EqlRequest {
      filter?: QueryContainer[] | QueryContainer
    }`,
    `interface MyInterface {
      data: MyClass[] | MyClass
    }`,
  ],
  invalid: [
    {
      code: `class Container {
        query: BoolQuery | TermQuery | RangeQuery
      }`,
      errors: [{ messageId: 'preferTaggedVariants' }]
    },
    {
      code: `interface Response {
        result: SuccessResult | ErrorResult
      }`,
      errors: [{ messageId: 'preferTaggedVariants' }]
    },
    {
      code: `class MyClass {
        content: TextContent | ImageContent | VideoContent
      }`,
      errors: [{ messageId: 'preferTaggedVariants' }]
    },
    {
      code: `interface Config {
        processor?: SetProcessor | RemoveProcessor | AppendProcessor
      }`,
      errors: [{ messageId: 'preferTaggedVariants' }]
    },
    {
      code: `export class SearchRequest {
        query: MatchQuery | TermQuery | BoolQuery | RangeQuery
      }`,
      errors: [{ messageId: 'preferTaggedVariants' }]
    },
  ],
})

