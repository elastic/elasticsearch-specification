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
import rule from '../rules/enum-boolean-requires-quirk.js'

ruleTester.run('enum-boolean-requires-quirk', rule, {
  valid: [
    {
      name: 'boolean members with the quirk',
      code: `/** @es_quirk This enum is a boolean that became an enum. Send true and false as JSON booleans. */
      enum DynamicMapping { strict, runtime, true, false }`
    }
  ],
  invalid: [
    {
      name: 'boolean members without the quirk',
      code: 'enum DynamicMapping { strict, runtime, true, false }',
      errors: [{ messageId: 'missingQuirk', data: { name: 'DynamicMapping' } }]
    }
  ]
})
