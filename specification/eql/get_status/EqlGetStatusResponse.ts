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

import { Id } from '@_types/common'
import { integer } from '@_types/Numeric'
import { EpochMillis } from '@_types/Time'

export class Response {
  '200': {
    body: {
      /**
       * Identifier for the search.
       */
      id: Id
      /**
       * If true, the search request is still executing. If false, the search is completed.
       */
      is_partial: boolean
      /**
       * If true, the response does not contain complete search results. This could be because either the search is still running (is_running status is false), or because it is already completed (is_running status is true) and results are partial due to failures or timeouts.
       */
      is_running: boolean
      /**
       * For a running search shows a timestamp when the eql search started, in milliseconds since the Unix epoch.
       */
      start_time_in_millis?: EpochMillis
      /**
       * Shows a timestamp when the eql search will be expired, in milliseconds since the Unix epoch. When this time is reached, the search and its results are deleted, even if the search is still ongoing.
       */
      expiration_time_in_millis?: EpochMillis
      /**
       * For a completed search shows the http status code of the completed search.
       */
      completion_status?: integer
    }
  }
}
