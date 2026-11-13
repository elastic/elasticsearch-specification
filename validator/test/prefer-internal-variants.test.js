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
import rule from '../rules/prefer-internal-variants.js'

ruleTester.run('prefer-internal-variants', rule, {
  valid: [
    {
      name: 'union that is tagged already',
      code: `class Foo { kind: 'foo' }
      class Bar { kind: 'bar' }
      /** @variants internal tag='kind' */
      type FooOrBar = Foo | Bar`
    },
    {
      name: 'property that is a literal in one member only',
      code: `class Foo { kind: 'foo' }
      class Bar { kind: string }
      /** @codegen_names foo, bar */
      type FooOrBar = Foo | Bar`
    }
  ],
  invalid: [
    {
      name: 'members that share a literal property',
      code: `class Foo { kind: 'foo' }
      class Bar { kind: 'bar' }
      /** @codegen_names foo, bar */
      type FooOrBar = Foo | Bar`,
      errors: [{ messageId: 'preferInternal', data: { name: 'FooOrBar', tag: 'kind' } }]
    }
  ]
})
