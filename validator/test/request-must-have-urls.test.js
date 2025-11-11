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

import { RuleTester } from '@typescript-eslint/rule-tester';
import rule from '../rules/request-must-have-urls.js';

const ruleTester = new RuleTester({
  languageOptions: {
    parserOptions: {
      projectService: {
        allowDefaultProject: ['*.ts*'],
        defaultProject: 'tsconfig.json',
      },
      tsconfigRootDir: new URL('../../specification/', import.meta.url).pathname,
    },
  },
});

ruleTester.run('request-must-have-urls', rule, {
  valid: [
    {
      name: 'Request with urls property',
      code: `
        interface RequestBase {}
        export interface Request extends RequestBase {
          urls: [
            {
              path: '/_search'
              methods: ['GET', 'POST']
            }
          ]
          path_parts: {}
          query_parameters: {}
          body: {}
        }
      `,
    },
    {
      name: 'Request with multiple URL patterns',
      code: `
        interface RequestBase {}
        export interface Request extends RequestBase {
          urls: [
            {
              path: '/_snapshot/{repository}/{snapshot}'
              methods: ['GET']
            },
            {
              path: '/_snapshot/{repository}/_all'
              methods: ['GET']
            }
          ]
          path_parts: {
            repository: string
            snapshot: string
          }
          query_parameters: {}
          body: {}
        }
      `,
    },
    {
      name: 'Non-Request interface without urls',
      code: `
        export interface ResponseBody {
          took: number
          timed_out: boolean
        }
      `,
    },
    {
      name: 'Response interface without urls',
      code: `
        interface RequestBase {}
        export interface Response {
          body: {
            result: string
          }
        }
      `,
    },
  ],
  invalid: [
    {
      name: 'Request without urls property',
      code: `
        interface RequestBase {}
        export interface Request extends RequestBase {
          path_parts: {}
          query_parameters: {}
          body: {}
        }
      `,
      errors: [
        {
          messageId: 'missingUrls',
          data: {
            interfaceName: 'Request'
          }
        },
      ],
    },
    {
      name: 'Named Request without urls',
      code: `
        export interface Request {
          path_parts: {
            index: string
          }
          body: {
            query: any
          }
        }
      `,
      errors: [
        {
          messageId: 'missingUrls',
          data: {
            interfaceName: 'Request'
          }
        },
      ],
    },
    {
      name: 'Request extending RequestBase without urls',
      code: `
        interface RequestBase {}
        export interface SearchRequest extends RequestBase {
          path_parts: {
            index: string
          }
          query_parameters: {
            q: string
          }
        }
      `,
      errors: [
        {
          messageId: 'missingUrls',
          data: {
            interfaceName: 'SearchRequest'
          }
        },
      ],
    },
  ],
});
