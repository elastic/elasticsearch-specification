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
import rule from '../rules/prefer-enum-for-documented-values.js'

ruleTester.run('prefer-enum-for-documented-values', rule, {
  valid: [
    {
      name: 'list of values on a property with an enum type',
      code: `class Message {
        /** The role of the author. Valid values are \`user\` and \`assistant\`. */
        role: MessageRole
      }`
    },
    {
      name: 'string without a list of values',
      code: `class Message {
        /** The role of the author. */
        role: string
      }`
    }
  ],
  invalid: [
    {
      name: 'string with a list of its valid values',
      code: `class Message {
        /** The role of the author. Valid values are \`user\` and \`assistant\`. */
        role: string
      }`,
      errors: [{ messageId: 'documentedValues', data: { name: 'role' } }]
    }
  ]
})
