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

import { IndexName } from '@_types/common'
import { Duration, EpochTime, UnitMillis } from '@_types/Time'
import { DataStreamLifecycleWithRollover } from '@indices/_types/DataStreamLifecycle'
import { Dictionary } from '@spec_utils/Dictionary'

export class Response {
  body: {
    indices: Dictionary<IndexName, DataStreamLifecycleExplain>
  }
}

class DataStreamLifecycleExplain {
  /*
   * The name of the backing index.
   */
  index: IndexName
  /*
   * Indicates if the index is managed by the data stream lifecycle.
   */
  managed_by_lifecycle: boolean
  /*
   * The creation date of the index in milliseconds.
   */
  index_creation_date_millis?: EpochTime<UnitMillis>
  /*
   * The time since the index was created.
   */
  time_since_index_creation?: Duration
  /*
   * The rollover date of the index in milliseconds.
   */
  rollover_date_millis?: EpochTime<UnitMillis>
  /*
   * The time since the index was rolled over.
   */
  time_since_rollover?: Duration
  /*
   * The lifecycle of the index.
   */
  lifecycle?: DataStreamLifecycleWithRollover
  /*
   * The generation time of the index.
   */
  generation_time?: Duration
  error?: string
  /*
   * @availability stack since=9.6.0 stability=stable
   * The status of the frozen transition.
   */
  frozen_transition_status?: string
  /*
   * @availability stack since=9.6.0 stability=stable
   * @availability serverless
   * The reason if the index is not managed by the lifecycle.
   */
  unmanaged_reason?: string
}
