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
  index: IndexName
  managed_by_lifecycle: boolean
  index_creation_date_millis?: EpochTime<UnitMillis>
  time_since_index_creation?: Duration
  rollover_date_millis?: EpochTime<UnitMillis>
  time_since_rollover?: Duration
  lifecycle?: DataStreamLifecycleWithRollover
  generation_time?: Duration
  error?: string
}
