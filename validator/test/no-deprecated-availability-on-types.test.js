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
import {RuleTester} from '@typescript-eslint/rule-tester'
import rule from '../rules/no-deprecated-availability-on-types.js'

const ruleTester = new RuleTester({
    languageOptions: {
        parserOptions: {
            projectService: {
                allowDefaultProject: ['*.ts*']
            },
            tsconfigRootDir: import.meta.dirname
        }
    }
})

ruleTester.run('no-deprecated-availability-on-types', rule, {
    valid: [
    `
    export class Response {
      /** @codegen_name result */
      body: ResponseBody
    }`,
        `
   /**
   * @deprecated 9.0.0
   */
    export interface Request {
    }`,
    `/**
     * @deprecated 7.12.0
     * @availability
     */
    export interface Something{}    
    
    export class SomethingElse{}`
    ],
    invalid: [
        {
            code: `
     /**
     * @deprecated 7.12.0
     * @availability
     */
    export class Something{} 
        `,
            errors: [{messageId: 'noDeprecatedOnTypes'},{messageId: 'noAvailabilityOnTypes'}]
        },
        {
            code: `
     /**
     * @deprecated 7.12.0
     */
    export enum Something{} 
        `,
            errors: [{messageId: 'noDeprecatedOnTypes'}]
        },
        {
            code: `
     /**
     * @availability
     */
    export enum Something{} 
        `,
            errors: [{messageId: 'noAvailabilityOnTypes'}]
        }
    ]
})
