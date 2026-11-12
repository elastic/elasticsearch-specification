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
import rule from '../rules/union-requires-codegen-names.js'

ruleTester.run('union-requires-codegen-names', rule, {
  valid: [
    {
      name: 'union with a name for each member',
      code: `/** @codegen_names text, count */
      type Fuzziness = string | integer`
    },
    {
      name: 'one item or a list of items, in the short array syntax',
      code: 'type Ids = Id | Id[]'
    },
    {
      name: 'one item or a list of items, in the generic array syntax',
      code: 'type TextToAnalyze = string | Array<string>'
    },
    {
      name: 'helper type with its own type parameter as a member',
      code: 'type Stringified<T> = T | string'
    },
    {
      name: 'type that can be null',
      code: 'type MaybeFoo = Foo | null'
    },
    {
      name: 'tagged union',
      code: `/** @variants internal tag='type' */
      type FooOrBar = Foo | Bar`
    }
  ],
  invalid: [
    {
      name: 'union of primitive types without names',
      code: 'type WaitForNodes = string | integer',
      errors: [{ messageId: 'missingCodegenNames', data: { name: 'WaitForNodes' } }]
    },
    {
      name: 'same name for two members',
      code: `/** @codegen_names value, value */
      type WaitForNodes = string | integer`,
      errors: [{ messageId: 'duplicateCodegenName', data: { name: 'value' } }]
    }
  ]
})
