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

import { ByteSize, Name } from '@_types/common'
import { integer, long } from '@_types/Numeric'
import { ShardStatistics } from '@_types/Stats'
import { EpochTime, UnitMillis } from '@_types/Time'

export class Response {
  body: {
    /** Contains information about shards that attempted to execute the request. */
    _shards: ShardStatistics
    /** Total number of backing indices for the selected data streams. */
    backing_indices: integer
    /** Total number of selected data streams. */
    data_stream_count: integer
    /** Contains statistics for the selected data streams. */
    data_streams: DataStreamsStatsItem[]
    /**
     * Total size of all shards for the selected data streams.
     * This property is included only if the `human` query parameter is `true`
     */
    total_store_sizes?: ByteSize
    /** Total size, in bytes, of all shards for the selected data streams. */
    total_store_size_bytes: integer
  }
}

export class DataStreamsStatsItem {
  /** Current number of backing indices for the data stream. */
  backing_indices: integer
  /** Name of the data stream. */
  data_stream: Name
  /**
   * The data stream’s highest `@timestamp` value, converted to milliseconds since the Unix epoch.
   * NOTE: This timestamp is provided as a best effort.
   * The data stream may contain `@timestamp` values higher than this if one or more of the following conditions are met:
   * The stream contains closed backing indices;
   * Backing indices with a lower generation contain higher `@timestamp` values.
   */
  maximum_timestamp: EpochTime<UnitMillis>
  /**
   * Total size of all shards for the data stream’s backing indices.
   * This parameter is only returned if the `human` query parameter is `true`.
   */
  store_size?: ByteSize
  /** Total size, in bytes, of all shards for the data stream’s backing indices. */
  store_size_bytes: integer
}
