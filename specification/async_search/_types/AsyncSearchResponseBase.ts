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
import { ErrorCause } from '@_types/Errors'
import { DateTime, EpochTime, UnitMillis } from '@_types/Time'
import { AsyncSearch } from './AsyncSearch'

export class AsyncSearchResponseBase {
  id?: Id
  /**
   * When the query is no longer running, this property indicates whether the search failed or was successfully completed on all shards.
   * While the query is running, `is_partial` is always set to `true`.
   */
  is_partial: boolean
  /**
   * Indicates whether the search is still running or has completed.
   *
   * > info
   * > If the search failed after some shards returned their results or the node that is coordinating the async search dies, results may be partial even though `is_running` is `false`.
   */
  is_running: boolean
  /**
   * Indicates when the async search will expire.
   */
  expiration_time?: DateTime
  expiration_time_in_millis: EpochTime<UnitMillis>
  start_time?: DateTime
  start_time_in_millis: EpochTime<UnitMillis>
  /**
   * Indicates when the async search completed.
   * It is present only when the search has completed.
   */
  completion_time?: DateTime
  completion_time_in_millis?: EpochTime<UnitMillis>
  error?: ErrorCause
}
export class AsyncSearchDocumentResponseBase<
  TDocument
> extends AsyncSearchResponseBase {
  response: AsyncSearch<TDocument>
}
