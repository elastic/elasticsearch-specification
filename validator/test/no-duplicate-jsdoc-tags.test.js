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
import rule from '../rules/no-duplicate-jsdoc-tags.js'

ruleTester.run('no-duplicate-jsdoc-tags', rule, {
  valid: [
    {
      name: 'one availability tag for each flavor',
      code: `class Foo {
        /**
         * @availability stack since=8.0.0
         * @availability serverless
         */
        bar?: string
      }`
    }
  ],
  invalid: [
    {
      name: 'second server default on a property',
      code: `class Foo {
        /**
         * @server_default 1
         * @server_default 2
         */
        bar?: integer
      }`,
      errors: [{ messageId: 'duplicateTag', data: { tag: 'server_default' } }]
    },
    {
      name: 'second doc id on an exported declaration',
      code: `/**
       * @doc_id first
       * @doc_id second
       */
      export class Foo {}`,
      errors: [{ messageId: 'duplicateTag', data: { tag: 'doc_id' } }]
    },
    {
      name: 'second codegen name on an enum member',
      code: `enum Foo {
        /**
         * @codegen_name a
         * @codegen_name b
         */
        'x-y'
      }`,
      errors: [{ messageId: 'duplicateTag', data: { tag: 'codegen_name' } }]
    }
  ]
})
