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
import rule from '../rules/single-definition-in-endpoint-files.js'

ruleTester.run('single-definition-in-endpoint-files', rule, {
  valid: [
    {
      name: 'several types in a file without a request or a response',
      code: `export class Foo {}
      export enum Mode { fast, slow }`
    }
  ],
  invalid: [
    {
      name: 'enum next to a request',
      code: `export interface Request extends RequestBase {}
      export enum Mode { fast, slow }`,
      errors: [{ messageId: 'extraDefinition', data: { name: 'Mode', main: 'Request' } }]
    },
    {
      name: 'class next to a response',
      code: `export class Response { body: ResponseBody }
      export class ResponseBody {}`,
      errors: [{ messageId: 'extraDefinition', data: { name: 'ResponseBody', main: 'Response' } }]
    }
  ]
})
