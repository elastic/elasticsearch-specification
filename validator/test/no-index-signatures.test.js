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
import rule from '../rules/no-index-signatures.js'

ruleTester.run('no-index-signatures', rule, {
  valid: [
    {
      name: 'dynamic keys through Dictionary',
      code: `class NodeUsage {
        since: number
        rest_actions: Dictionary<string, number>
      }`
    }
  ],
  invalid: [
    {
      name: 'index signature in a class',
      code: `class TaskSettings {
        [key: string]: UserDefinedValue
      }`,
      errors: [{ messageId: 'indexSignature', line: 2 }]
    },
    {
      name: 'index signature in an interface',
      code: `interface TaskSettings {
        user?: string
        [key: string]: UserDefinedValue
      }`,
      errors: [{ messageId: 'indexSignature', line: 3 }]
    }
  ]
})
