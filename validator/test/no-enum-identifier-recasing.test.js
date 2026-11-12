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
import rule from '../rules/no-enum-identifier-recasing.js'

ruleTester.run('no-enum-identifier-recasing', rule, {
  valid: [
    {
      name: 'identifier that explains a short value',
      code: "enum IntervalUnit { second = 's' }"
    },
    {
      name: 'value that cannot be an identifier',
      code: "enum FingerprintDigest { sha1 = 'SHA-1' }"
    }
  ],
  invalid: [
    {
      name: 'identifier that only changes the case of the value',
      code: "enum Foo { FOO = 'foo' }",
      output: null,
      errors: [{ messageId: 'recasedIdentifier', data: { name: 'FOO', value: 'foo' } }]
    },
    {
      name: 'identifier that only changes the case and the underscores of the value',
      code: "enum EventType { PageView = 'page_view' }",
      output: null,
      errors: [{ messageId: 'recasedIdentifier', data: { name: 'PageView', value: 'page_view' } }]
    },
    {
      name: 'value that repeats the identifier',
      code: "enum DiversifyType { mmr = 'mmr' }",
      output: 'enum DiversifyType { mmr }',
      errors: [{ messageId: 'redundantValue', data: { name: 'mmr' } }]
    }
  ]
})
