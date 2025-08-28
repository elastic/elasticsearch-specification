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

import { uint } from '@_types/Numeric'
import { EpochTime, UnitMillis } from '@_types/Time'

export class Response {
  body: {
    /**
     * The timestamp, in milliseconds since the Unix epoch, when Elasticsearch will delete the search and its results, even if the search is still running.
     */
    expiration_time_in_millis: EpochTime<UnitMillis>
    /**
     * The identifier for the search.
     */
    id: string
    /**
     * If `true`, the search is still running.
     * If `false`, the search has finished.
     */
    is_running: boolean
    /**
     * If `true`, the response does not contain complete search results.
     * If `is_partial` is `true` and `is_running` is `true`, the search is still running.
     * If `is_partial` is `true` but `is_running` is `false`, the results are partial due to a failure or timeout.
     */
    is_partial: boolean
    /**
     * The timestamp, in milliseconds since the Unix epoch, when the search started.
     * The API returns this property only for running searches.
     */
    start_time_in_millis: EpochTime<UnitMillis>
    /**
     * The HTTP status code for the search.
     * The API returns this property only for completed searches.
     */
    completion_status?: uint
  }
}
