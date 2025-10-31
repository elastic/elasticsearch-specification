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
import { DateTime, EpochTime, UnitMillis } from '@_types/Time'
import { AsyncSearch } from '@async_search/_types/AsyncSearch'
import { AsyncSearchDocumentResponseBase } from '@async_search/_types/AsyncSearchResponseBase'

export class Response<TDocument> {
  /** @codegen_name result */
  body: AsyncSearchDocumentResponseBase<TDocument>
  exceptions: [
    {
      statusCodes: [404, 400, 500, 429]
      body: {
        is_partial: boolean
        is_running: boolean
        expiration_time?: DateTime
        expiration_time_in_millis: EpochTime<UnitMillis>
        start_time?: DateTime
        start_time_in_millis: EpochTime<UnitMillis>
        completion_time?: DateTime
        completion_time_in_millis?: EpochTime<UnitMillis>
        error?: ErrorCause
        response?: AsyncSearch<TDocument>
      }
    }
  ]
}
