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
import rule from '../rules/valid-request-urls.js'

ruleTester.run('valid-request-urls', rule, {
  valid: [
    {
      name: 'two paths that share their methods',
      code: `interface Request extends RequestBase {
        urls: [
          { path: '/_search', methods: ['GET', 'POST'] },
          { path: '/{index}/_search', methods: ['GET', 'POST'] }
        ]
      }`
    }
  ],
  invalid: [
    {
      name: 'same path in two entries',
      code: `interface Request extends RequestBase {
        urls: [
          { path: '/_search', methods: ['GET'] },
          { path: '/_search', methods: ['POST'] }
        ]
      }`,
      errors: [{ messageId: 'duplicatePath', data: { path: '/_search' } }]
    },
    {
      name: 'same method two times in one entry',
      code: `interface Request extends RequestBase {
        urls: [{ path: '/_search', methods: ['GET', 'GET'] }]
      }`,
      errors: [{ messageId: 'duplicateMethod', data: { method: 'GET' } }]
    },
    {
      name: 'method in lower case',
      code: `interface Request extends RequestBase {
        urls: [{ path: '/_search', methods: ['get'] }]
      }`,
      errors: [{ messageId: 'unknownMethod', data: { method: 'get' } }]
    }
  ]
})
