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
import rule from '../rules/prefer-shortcut-property.js'

ruleTester.run('prefer-shortcut-property', rule, {
  valid: [
    {
      name: 'object with two required properties',
      code: `class RerankInputObject {
        value: string
        mode: string
      }
      /** @codegen_names text, object */
      type RerankQuery = string | RerankInputObject`
    },
    {
      name: 'object whose required property has a different type than the short form',
      code: `class Slices {
        count: number
      }
      /** @codegen_names text, object */
      type SlicesOrText = string | Slices`
    }
  ],
  invalid: [
    {
      name: 'short form with the type of the only required property',
      code: `class RerankInputObject {
        value: string
        id?: string
      }
      /** @codegen_names text, object */
      type RerankQuery = string | RerankInputObject`,
      errors: [{
        messageId: 'preferShortcut',
        data: { name: 'RerankQuery', type: 'RerankInputObject', property: 'value' }
      }]
    }
  ]
})
