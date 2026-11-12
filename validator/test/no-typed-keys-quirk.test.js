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
import rule from '../rules/no-typed-keys-quirk.js'

const code = `/** @variants typed_keys_quirk */
type Aggregate = CardinalityAggregate | AvgAggregate`

ruleTester.run('no-typed-keys-quirk', rule, {
  valid: [
    {
      name: 'union on the list of accepted legacy types',
      options: [{ allow: ['Aggregate'] }],
      code
    }
  ],
  invalid: [
    {
      name: 'union that is not on the list',
      options: [{ allow: ['Suggest'] }],
      code,
      errors: [{ messageId: 'typedKeysQuirk', data: { name: 'Aggregate' } }]
    }
  ]
})
