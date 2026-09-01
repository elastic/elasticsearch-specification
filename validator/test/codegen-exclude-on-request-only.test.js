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

import { RuleTester } from '@typescript-eslint/rule-tester'
import rule from '../rules/codegen-exclude-on-request-only.js'

const ruleTester = new RuleTester({
  languageOptions: {
    parserOptions: {
      projectService: {
        allowDefaultProject: ['*.ts*'],
        defaultProject: 'tsconfig.json'
      },
      tsconfigRootDir: new URL('../../specification/', import.meta.url).pathname
    }
  }
})

ruleTester.run('codegen-exclude-on-request-only', rule, {
  valid: [
    {
      name: 'namespaced Request file with @codegen_exclude',
      filename: new URL('../../specification/ilm/put_lifecycle/PutLifecycleRequest.ts', import.meta.url).pathname,
      code: `
        /**
         * Some endpoint
         * @rest_spec_name ilm.put_lifecycle
         * @codegen_exclude
         */
        export interface Request {}
      `
    },
    {
      name: 'request without tag in any file',
      filename: new URL('../../specification/ilm/put_lifecycle/PutLifecycleRequest.ts', import.meta.url).pathname,
      code: `
        export interface Request {}
      `
    }
  ],
  invalid: [
    {
      name: 'non-namespaced file under specification with @codegen_exclude',
      filename: new URL('../../specification/SomeFile.ts', import.meta.url).pathname,
      code: `
        /**
         * @codegen_exclude
         */
        export interface Something {}
      `,
      errors: [
        { messageId: 'invalidUsage' }
      ]
    },
    {
      name: 'namespaced Response file with @codegen_exclude',
      filename: new URL('../../specification/ilm/put_lifecycle/PutLifecycleResponse.ts', import.meta.url).pathname,
      code: `
        /**
         * @codegen_exclude
         */
        export interface Response {}
      `,
      errors: [
        { messageId: 'invalidUsage' }
      ]
    }
  ]
})
