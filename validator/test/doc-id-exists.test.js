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
import rule from '../rules/doc-id-exists.js'

const options = [{ table: new URL('./fixtures/doc-ids.csv', import.meta.url).pathname }]

ruleTester.run('doc-id-exists', rule, {
  valid: [
    {
      name: 'identifier that the table contains',
      options,
      code: `class Foo {
        /** @ext_doc_id known-id */
        bar: string
      }`
    }
  ],
  invalid: [
    {
      name: 'identifiers that the table does not contain',
      options,
      code: `class Foo {
        /**
         * @doc_id unknown-id
         * @ext_doc_id unknown-ext-id
         */
        bar: string
      }`,
      errors: [
        { messageId: 'unknownDocId', data: { tag: 'doc_id', id: 'unknown-id' } },
        { messageId: 'unknownDocId', data: { tag: 'ext_doc_id', id: 'unknown-ext-id' } }
      ]
    }
  ]
})
