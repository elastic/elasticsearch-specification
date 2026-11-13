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
import { specFile, specRuleTester } from './_tester.js'
import rule from '../rules/rest-spec-name-matches-location.js'

specRuleTester.run('rest-spec-name-matches-location', rule, {
  valid: [
    {
      name: 'global endpoint, which has no namespace in its name',
      filename: specFile('_global/search/SearchRequest.ts'),
      code: `/** @rest_spec_name search */
      export interface Request {}`
    },
    {
      name: 'endpoint in a namespace',
      filename: specFile('indices/create/IndicesCreateRequest.ts'),
      code: `/** @rest_spec_name indices.create */
      export interface Request {}`
    }
  ],
  invalid: [
    {
      name: 'name of a different endpoint',
      filename: specFile('indices/create/IndicesCreateRequest.ts'),
      code: `/** @rest_spec_name indices.delete */
      export interface Request {}`,
      errors: [{ messageId: 'mismatch', data: { name: 'indices.delete', expected: 'indices.create' } }]
    }
  ]
})
