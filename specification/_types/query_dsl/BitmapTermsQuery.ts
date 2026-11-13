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

import { Field } from '@_types/common'
import { QueryBase } from './abstractions'

/**
 * @ext_doc_id query-dsl-bitmap-terms-query
 */
export class BitmapTermsQuery extends QueryBase {
  /**
   * The name of the field to search against.
   * It must be an `integer` or a `long` field with `index` enabled.
   */
  field: Field
  /**
   * The values to match, as a base64-encoded serialized roaring bitmap in little-endian byte order.
   * The type of the field determines the expected format: an `integer` field expects a 32-bit roaring bitmap, and a `long` field expects a 64-bit roaring bitmap in the portable format.
   * The bitmap can only contain non-negative values: from `0` to `2^31 - 1` for an `integer` field and from `0` to `2^63 - 1` for a `long` field.
   */
  value: string
}
