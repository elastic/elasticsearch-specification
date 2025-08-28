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

import { ErrorCause } from '@_types/Errors'
import { long } from '@_types/Numeric'

export class Response {
  /**
   * A successful call returns a JSON structure that contains the number of tokens that were invalidated, the number of tokens that had already been invalidated, and potentially a list of errors encountered while invalidating specific tokens.
   */
  body: {
    /**
     * The number of errors that were encountered when invalidating the tokens.
     */
    error_count: long
    /**
     * Details about the errors.
     * This field is not present in the response when `error_count` is `0`.
     */
    error_details?: ErrorCause[]
    /**
     * The number of the tokens that were invalidated as part of this request.
     */
    invalidated_tokens: long
    /**
     * The number of tokens that were already invalidated.
     */
    previously_invalidated_tokens: long
  }
}
