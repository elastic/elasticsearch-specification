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
import { ruleTester } from './_tester.js'
import rule from '../rules/request-path-parts-match-urls.js'

ruleTester.run('request-path-parts-match-urls', rule, {
  valid: [
    {
      name: 'required part in each URL and optional part in one URL',
      code: `interface Request extends RequestBase {
        urls: [
          { path: '/_doc/{id}', methods: ['GET'] },
          { path: '/{index}/_doc/{id}', methods: ['GET'] }
        ]
        path_parts: {
          id: Id
          index?: IndexName
        }
      }`
    }
  ],
  invalid: [
    {
      name: 'optional part that each URL contains',
      code: `interface Request extends RequestBase {
        urls: [{ path: '/{index}/_refresh', methods: ['POST'] }]
        path_parts: {
          index?: IndexName
        }
      }`,
      errors: [{ messageId: 'optionalInEveryUrl', data: { name: 'index' } }]
    },
    {
      name: 'required part that one URL does not contain',
      code: `interface Request extends RequestBase {
        urls: [
          { path: '/_refresh', methods: ['POST'] },
          { path: '/{index}/_refresh', methods: ['POST'] }
        ]
        path_parts: {
          index: IndexName
        }
      }`,
      errors: [{ messageId: 'requiredButMissing', data: { name: 'index', path: '/_refresh' } }]
    }
  ]
})
