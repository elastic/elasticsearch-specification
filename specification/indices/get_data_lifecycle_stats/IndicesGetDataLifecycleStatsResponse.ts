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

import { DataStreamName } from '@_types/common'
import { integer } from '@_types/Numeric'
import { DurationValue, UnitMillis } from '@_types/Time'

export class Response {
  body: {
    /**
     * The count of data streams currently being managed by the data stream lifecycle.
     */
    data_stream_count: integer
    /**
     * Information about the data streams that are managed by the data stream lifecycle.
     */
    data_streams: DataStreamStats[]
    /**
     * The duration of the last data stream lifecycle execution.
     */
    last_run_duration_in_millis?: DurationValue<UnitMillis>
    /**
     * The time that passed between the start of the last two data stream lifecycle executions.
     * This value should amount approximately to `data_streams.lifecycle.poll_interval`.
     */
    time_between_starts_in_millis?: DurationValue<UnitMillis>
  }
}

class DataStreamStats {
  /**
   * The count of the backing indices for the data stream.
   */
  backing_indices_in_error: integer
  /**
   * The count of the backing indices for the data stream that have encountered an error.
   */
  backing_indices_in_total: integer
  /**
   * The name of the data stream.
   */
  name: DataStreamName
}
