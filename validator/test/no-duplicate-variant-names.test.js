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
import rule from '../rules/no-duplicate-variant-names.js'

ruleTester.run('no-duplicate-variant-names', rule, {
  valid: [
    {
      name: 'a different name for each member',
      code: `/** @variant name=sterms */
      class StringTermsAggregate {}
      /** @variant name=lterms */
      class LongTermsAggregate {}
      /** @variants typed_keys_quirk */
      type Aggregate = StringTermsAggregate | LongTermsAggregate`
    }
  ],
  invalid: [
    {
      name: 'same name on two members',
      code: `/** @variant name=sterms */
      class StringTermsAggregate {}
      /** @variant name='sterms' */
      class LongTermsAggregate {}
      /** @variants typed_keys_quirk */
      type Aggregate = StringTermsAggregate | LongTermsAggregate`,
      errors: [{
        messageId: 'duplicateVariantName',
        data: { name: 'sterms', member: 'LongTermsAggregate', other: 'StringTermsAggregate' }
      }]
    }
  ]
})
