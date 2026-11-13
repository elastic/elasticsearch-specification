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
import rule from '../rules/no-stringified-in-requests.js'

ruleTester.run('no-stringified-in-requests', rule, {
  valid: [
    {
      name: 'stringified value in a response',
      code: `class Response {
        body: {
          count: Stringified<integer>
        }
      }`
    },
    {
      name: 'path part with an alias that has no stringified value',
      code: `type Names = string | string[]
      interface Request extends RequestBase {
        path_parts: {
          name: Names
        }
      }`
    }
  ],
  invalid: [
    {
      name: 'query parameter with a stringified value',
      code: `interface Request extends RequestBase {
        query_parameters: {
          size?: Stringified<integer>
        }
      }`,
      errors: [{ messageId: 'stringifiedInRequest' }]
    },
    {
      name: 'path part with an alias of a stringified value',
      code: `type Stringified<T> = T | string
      type Size = Stringified<number>
      interface Request extends RequestBase {
        path_parts: {
          size: Size
        }
      }`,
      errors: [{ messageId: 'stringifiedInRequest' }]
    },
    {
      name: 'body property with a stringified value',
      code: `interface Request extends RequestBase {
        body: {
          size?: Stringified<integer>
        }
      }`,
      errors: [{ messageId: 'stringifiedInRequest' }]
    }
  ]
})
