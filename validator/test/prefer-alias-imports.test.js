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
import { specFile, specRuleTester } from './_tester.js'
import rule from '../rules/prefer-alias-imports.js'

specRuleTester.run('prefer-alias-imports', rule, {
  valid: [
    {
      name: 'relative import inside the namespace of the file',
      filename: specFile('indices/create/IndicesCreateRequest.ts'),
      code: "import { IndexState } from '../_types/IndexState'"
    }
  ],
  invalid: [
    {
      name: 'relative import of a shared type',
      filename: specFile('indices/create/IndicesCreateRequest.ts'),
      code: "import { IndexName } from '../../_types/common'",
      output: "import { IndexName } from '@_types/common'",
      errors: [{ messageId: 'preferAlias', data: { alias: '@_types/common' } }]
    },
    {
      name: 'relative import of a type of a global endpoint, whose alias has no underscore',
      filename: specFile('indices/create/IndicesCreateRequest.ts'),
      code: "import { Hit } from '../../_global/search/_types/hits'",
      output: "import { Hit } from '@global/search/_types/hits'",
      errors: [{ messageId: 'preferAlias', data: { alias: '@global/search/_types/hits' } }]
    }
  ]
})
