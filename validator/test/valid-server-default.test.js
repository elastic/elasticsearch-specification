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
import rule from '../rules/valid-server-default.js'

const enums = `
enum SortOrder { asc, desc }
enum TimeUnit { seconds = 's', minutes = 'm' }
enum ExpandWildcard { open, closed }
type ExpandWildcards = ExpandWildcard | ExpandWildcard[]
`

ruleTester.run('valid-server-default', rule, {
  valid: [
    {
      name: 'member of the enum',
      code: `${enums}
      class Foo {
        /** @server_default asc */
        order?: SortOrder
      }`
    },
    {
      name: 'value on the wire of a member with a different identifier',
      code: `${enums}
      class Foo {
        /** @server_default s */
        unit?: TimeUnit
      }`
    },
    {
      name: 'list of members for an alias of one member or a list',
      code: `${enums}
      class Foo {
        /** @server_default ['open', 'closed'] */
        expand_wildcards?: ExpandWildcards
      }`
    },
    {
      name: 'comma-separated members, as a URL parameter sends a list',
      code: `${enums}
      class Foo {
        /** @server_default open,closed */
        expand_wildcards?: ExpandWildcards
      }`
    },
    {
      name: 'alias of a member',
      code: `enum CatColumn {
        /** @aliases hp, heapPercent */
        'heap.percent',
        ip
      }
      class Foo {
        /** @server_default ip,hp */
        h?: CatColumn[]
      }`
    },
    {
      name: 'free text for a property that is not an enum',
      code: `class Foo {
        /** @server_default hello */
        greeting?: string
      }`
    }
  ],
  invalid: [
    {
      name: 'value that is not a member of the enum',
      code: `${enums}
      class Foo {
        /** @server_default none */
        order?: SortOrder
      }`,
      errors: [{ messageId: 'notAnEnumMember', data: { value: 'none', enum: 'SortOrder' } }]
    },
    {
      name: 'member of the enum in quotes',
      code: `${enums}
      class Foo {
        /** @server_default 'asc' */
        order?: SortOrder
      }`,
      errors: [{ messageId: 'quotedDefault', data: { value: "'asc'", unquoted: 'asc' } }]
    },
    {
      name: 'list with one value that is not a member',
      code: `${enums}
      class Foo {
        /** @server_default ['open', 'hidden'] */
        expand_wildcards?: ExpandWildcards
      }`,
      errors: [{ messageId: 'notAnEnumMember', data: { value: 'hidden', enum: 'ExpandWildcard' } }]
    },
    {
      name: 'tag without a value',
      code: `class Foo {
        /** @server_default */
        greeting?: string
      }`,
      errors: [{ messageId: 'emptyDefault', data: { name: 'greeting' } }]
    }
  ]
})
