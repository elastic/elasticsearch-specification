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
import rule from '../rules/no-duplicate-enum-aliases.js'

ruleTester.run('no-duplicate-enum-aliases', rule, {
  valid: [
    {
      name: 'alias that differs from its member by case only',
      code: `enum HealthStatus {
        /** @aliases GREEN */
        green,
        /** @aliases YELLOW */
        yellow
      }`
    }
  ],
  invalid: [
    {
      name: 'same alias on two members',
      code: `enum CatNodeColumn {
        /** @aliases l */
        load_5m,
        /** @aliases l */
        load_15m
      }`,
      errors: [{ messageId: 'duplicateAlias', data: { alias: 'l', other: 'load_5m' } }]
    },
    {
      name: 'alias equal to the value of a later member',
      code: `enum CatRepositoriesColumn {
        /** @aliases t, type */
        id,
        type
      }`,
      errors: [{ messageId: 'aliasIsMember', data: { alias: 'type', other: 'type' } }]
    }
  ]
})
