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

import {
  Id,
  Indices,
  Metadata,
  Name,
  Uuid,
  VersionNumber
} from '@_types/common'
import { integer, long } from '@_types/Numeric'
import {
  DateTime,
  Duration,
  DurationValue,
  EpochTime,
  UnitMillis
} from '@_types/Time'
import { CronExpression } from '@watcher/_types/Schedule'

export class SnapshotLifecycle {
  in_progress?: InProgress
  last_failure?: Invocation
  last_success?: Invocation
  /**
   * The last time the policy was modified.
   */
  modified_date?: DateTime
  modified_date_millis: EpochTime<UnitMillis>
  /**
   * The next time the policy will run.
   */
  next_execution?: DateTime
  next_execution_millis: EpochTime<UnitMillis>
  policy: Policy
  /**
   * The version of the snapshot policy.
   * Only the latest version is stored and incremented when the policy is updated.
   */
  version: VersionNumber
  stats: Statistics
}

export class Statistics {
  retention_deletion_time?: Duration
  retention_deletion_time_millis?: DurationValue<UnitMillis>
  retention_failed?: long
  retention_runs?: long
  retention_timed_out?: long
  policy?: Id
  /**
   * @aliases snapshots_deleted
   */
  total_snapshots_deleted?: long
  /**
   * @aliases snapshot_deletion_failures
   */
  total_snapshot_deletion_failures?: long
  /**
   * @aliases snapshots_failed
   */
  total_snapshots_failed?: long
  /**
   * @aliases snapshots_taken
   */
  total_snapshots_taken?: long
}

export class Policy {
  config?: Configuration
  name: Name
  repository: string
  retention?: Retention
  schedule: CronExpression
}

export class Retention {
  /**
   * Time period after which a snapshot is considered expired and eligible for deletion. SLM deletes expired snapshots based on the slm.retention_schedule.
   */
  expire_after: Duration
  /**
   * Maximum number of snapshots to retain, even if the snapshots have not yet expired. If the number of snapshots in the repository exceeds this limit, the policy retains the most recent snapshots and deletes older snapshots.
   */
  max_count: integer
  /**
   * Minimum number of snapshots to retain, even if the snapshots have expired.
   */
  min_count: integer
}

export class Configuration {
  /**
   * If false, the snapshot fails if any data stream or index in indices is missing or closed. If true, the snapshot ignores missing or closed data streams and indices.
   * @server_default false
   */
  ignore_unavailable?: boolean
  /**
   * A comma-separated list of data streams and indices to include in the snapshot. Multi-index syntax is supported.
   * By default, a snapshot includes all data streams and indices in the cluster. If this argument is provided, the snapshot only includes the specified data streams and clusters.
   */
  indices?: Indices
  /**
   * If true, the current global state is included in the snapshot.
   * @server_default true
   */
  include_global_state?: boolean
  /**
   * A list of feature states to be included in this snapshot. A list of features available for inclusion in the snapshot and their descriptions be can be retrieved using the get features API.
   * Each feature state includes one or more system indices containing data necessary for the function of that feature. Providing an empty array will include no feature states in the snapshot, regardless of the value of include_global_state. By default, all available feature states will be included in the snapshot if include_global_state is true, or no feature states if include_global_state is false.
   */
  feature_states?: string[]
  /**
   * Attaches arbitrary metadata to the snapshot, such as a record of who took the snapshot, why it was taken, or any other useful data. Metadata must be less than 1024 bytes.
   */
  metadata?: Metadata
  /**
   * If false, the entire snapshot will fail if one or more indices included in the snapshot do not have all primary shards available.
   * @server_default false
   */
  partial?: boolean
}

export class InProgress {
  name: Name
  start_time_millis: EpochTime<UnitMillis>
  state: string
  uuid: Uuid
}

export class Invocation {
  snapshot_name: Name
  time: DateTime
}

export class SnapshotPolicyStats {
  policy: string
  snapshots_taken: long
  snapshots_failed: long
  snapshots_deleted: long
  snapshot_deletion_failures: long
}
