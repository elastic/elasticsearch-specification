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
import rule from '../rules/valid-internal-variant-tags.js'

ruleTester.run('valid-internal-variant-tags', rule, {
  valid: [
    {
      name: 'a different string literal for each member',
      code: `class Foo { type: 'foo' }
      class Bar { type: 'bar' }
      /** @variants internal tag='type' */
      type FooOrBar = Foo | Bar`
    },
    {
      name: 'boolean literals as tag values',
      code: `class Managed { managed: true }
      class Unmanaged { managed: false }
      /** @variants internal tag='managed' */
      type LifecycleExplain = Managed | Unmanaged`
    },
    {
      name: 'optional tag on the default member',
      code: `class ObjectProperty { type?: 'object' }
      class KeywordProperty { type: 'keyword' }
      /** @variants internal tag='type' default='object' */
      type Property = ObjectProperty | KeywordProperty`
    }
  ],
  invalid: [
    {
      name: 'same tag value on two members',
      code: `class Foo { type: 'foo' }
      class Bar { type: 'foo' }
      /** @variants internal tag='type' */
      type FooOrBar = Foo | Bar`,
      errors: [{ messageId: 'duplicateTagValue', data: { value: 'foo', member: 'Bar', other: 'Foo' } }]
    },
    {
      name: 'tag property with a type that is not a literal',
      code: `class Foo { type: 'foo' }
      class Bar { type: string }
      /** @variants internal tag='type' */
      type FooOrBar = Foo | Bar`,
      errors: [{ messageId: 'tagNotLiteral', data: { member: 'Bar', tag: 'type' } }]
    },
    {
      name: 'optional tag on a member that is not the default',
      code: `class ObjectProperty { type?: 'object' }
      class PassthroughProperty { type?: 'passthrough' }
      /** @variants internal tag='type' default='object' */
      type Property = ObjectProperty | PassthroughProperty`,
      errors: [{ messageId: 'optionalTag', data: { member: 'PassthroughProperty', tag: 'type' } }]
    },
    {
      name: 'same tag value in a nested union',
      code: `class Foo { type: 'foo' }
      class Bar { type: 'bar' }
      class Baz { type: 'foo' }
      type FooOrBar = Foo | Bar
      /** @variants internal tag='type' */
      type All = FooOrBar | Baz`,
      errors: [{ messageId: 'duplicateTagValue', data: { value: 'foo', member: 'Baz', other: 'Foo' } }]
    }
  ]
})
