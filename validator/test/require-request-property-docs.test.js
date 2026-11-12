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
import rule from '../rules/require-request-property-docs.js'

ruleTester.run('require-request-property-docs', rule, {
  valid: [
    {
      name: 'parameter with a description',
      code: `interface Request extends RequestBase {
        query_parameters: {
          /**
           * If true, the response includes the settings.
           * @server_default false
           */
          include_settings?: boolean
        }
      }`
    }
  ],
  invalid: [
    {
      name: 'body property without a comment',
      code: `interface Request extends RequestBase {
        body: {
          query?: QueryContainer
        }
      }`,
      errors: [{ messageId: 'missingDescription', data: { name: 'query', section: 'body' } }]
    },
    {
      name: 'path part with tags but no description',
      code: `interface Request extends RequestBase {
        path_parts: {
          /** @codegen_name index_name */
          index: IndexName
        }
      }`,
      errors: [{ messageId: 'missingDescription', data: { name: 'index', section: 'path_parts' } }]
    }
  ]
})
