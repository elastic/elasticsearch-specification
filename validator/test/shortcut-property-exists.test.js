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
import rule from '../rules/shortcut-property-exists.js'

ruleTester.run('shortcut-property-exists', rule, {
  valid: [
    {
      name: 'property of the class',
      code: `/** @shortcut_property value */
      class TermQuery {
        value: string
        case_insensitive?: boolean
      }`
    },
    {
      name: 'property of the parent class',
      code: `class QueryBase { query: string }
      /** @shortcut_property query */
      class MatchQuery extends QueryBase {
        operator?: string
      }`
    }
  ],
  invalid: [
    {
      name: 'name that no property has',
      code: `/** @shortcut_property values */
      class TermQuery {
        value: string
      }`,
      errors: [{ messageId: 'unknownProperty', data: { name: 'values', type: 'TermQuery' } }]
    }
  ]
})
