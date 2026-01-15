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
    }`
    ],
    invalid: [
        {
            code: `
/**
 * @deprecated 7.12.0 Use geo-shape instead.
 * @behavior_meta AdditionalProperty key=field value=polygon
 * @ext_doc_id query-dsl-geo-polygon-query
 */
export class GeoPolygonQuery
  extends QueryBase
  implements AdditionalProperty<Field, GeoPolygonPoints>
{
  /** @server_default 'strict' */
  validation_method?: GeoValidationMethod
  ignore_unmapped?: boolean
}`,
            errors: [{messageId: 'noVariantsOnResponses'}]
        },
        {
            code: `
/**
 * A scalar value.
 * @codegen_names long, double, string, boolean, null
 * @deprecated 9.0.0
 */
export type ScalarValue = long | double | string | boolean | null`,
            errors: [{messageId: 'noVariantsOnResponses'}]
        },
        {
            code: `
/**
 * Byte size units. These units use powers of 1024, so 1 kB means 1024 bytes.
 * @deprecated 9.0.0
 * @doc_id byte-units
 */
export enum Bytes {
  bytes = 'b',
  kilo_bytes = 'kb',
  mega_bytes = 'mb',
  giga_bytes = 'gb',
  tera_bytes = 'tb',
  peta_bytes = 'pb'
}`,

            errors: [{messageId: 'noVariantsOnResponses'}]
        },
        {
            code: `
/**
 * @availability stack stability=stable
 * @behavior_meta AdditionalProperty key=field value=polygon
 * @ext_doc_id query-dsl-geo-polygon-query
 */
export class GeoPolygonQuery
  extends QueryBase
  implements AdditionalProperty<Field, GeoPolygonPoints>
{
  /** @server_default 'strict' */
  validation_method?: GeoValidationMethod
  ignore_unmapped?: boolean
}`,
            errors: [{messageId: 'noVariantsOnResponses'}]
        },
        {
            code: `
/**
 * A scalar value.
 * @codegen_names long, double, string, boolean, null
 * @availability stack stability=stable
 */
export type ScalarValue = long | double | string | boolean | null`,
            errors: [{messageId: 'noVariantsOnResponses'}]
        },
        {
            code: `
/**
 * Byte size units. These units use powers of 1024, so 1 kB means 1024 bytes.
 * @availability stack stability=stable
 * @doc_id byte-units
 */
export enum Bytes {
  bytes = 'b',
  kilo_bytes = 'kb',
  mega_bytes = 'mb',
  giga_bytes = 'gb',
  tera_bytes = 'tb',
  peta_bytes = 'pb'
}`,

            errors: [{messageId: 'noVariantsOnResponses'}]
        }
    ]
})
