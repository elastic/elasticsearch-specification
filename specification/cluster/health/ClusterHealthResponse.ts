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

import { HealthStatus, IndexName, Name } from '@_types/common'
import { double, integer } from '@_types/Numeric'
import { Duration, DurationValue, UnitMillis } from '@_types/Time'
import { Dictionary } from '@spec_utils/Dictionary'
import { IndexHealthStats } from './types'

/**
 * @doc_id cluster-health
 */
export class Response {
  body: HealthResponseBody
  exceptions: [
    {
      statusCodes: [408]
      body: HealthResponseBody
    }
  ]
}

export class HealthResponseBody {
  /** The number of active primary shards. */
  active_primary_shards: integer
  /** The total number of active primary and replica shards. */
  active_shards: integer
  /** The ratio of active shards in the cluster expressed as a string formatted percentage. */
  active_shards_percent?: string
  /** The ratio of active shards in the cluster expressed as a percentage. */
  active_shards_percent_as_number: double
  /** The name of the cluster. */
  cluster_name: Name
  /** The number of shards whose allocation has been delayed by the timeout settings. */
  delayed_unassigned_shards: integer
  indices?: Dictionary<IndexName, IndexHealthStats>
  /** The number of shards that are under initialization. */
  initializing_shards: integer
  /** The number of nodes that are dedicated data nodes. */
  number_of_data_nodes: integer
  /** The number of unfinished fetches. */
  number_of_in_flight_fetch: integer
  /** The number of nodes within the cluster. */
  number_of_nodes: integer
  /** The number of cluster-level changes that have not yet been executed. */
  number_of_pending_tasks: integer
  /** The number of shards that are under relocation. */
  relocating_shards: integer
  status: HealthStatus
  /** The time since the earliest initiated task is waiting for being performed. */
  task_max_waiting_in_queue?: Duration
  /** The time expressed in milliseconds since the earliest initiated task is waiting for being performed. */
  task_max_waiting_in_queue_millis: DurationValue<UnitMillis>
  /** If false the response returned within the period of time that is specified by the timeout parameter (30s by default) */
  timed_out: boolean
  /** The number of primary shards that are not allocated. */
  unassigned_primary_shards: integer
  /** The number of shards that are not allocated. */
  unassigned_shards: integer
}
