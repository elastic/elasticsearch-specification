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

import { Dictionary } from '@spec_utils/Dictionary'
import {
  IndexName,
  Metadata,
  Name,
  Uuid,
  VersionNumber,
  VersionString
} from '@_types/common'
import { ShardStatistics } from '@_types/Stats'
import {
  Duration,
  DateTime,
  DurationValue,
  UnitMillis,
  EpochTime
} from '@_types/Time'
import { IndexDetails } from './SnapshotIndexDetails'
import { InfoFeatureState } from './SnapshotInfoFeatureState'
import { SnapshotShardFailure } from './SnapshotShardFailure'

export class SnapshotInfo {
  data_streams: Array<string>
  duration?: Duration
  duration_in_millis?: DurationValue<UnitMillis>
  end_time?: DateTime
  end_time_in_millis?: EpochTime<UnitMillis>
  failures?: SnapshotShardFailure[]
  include_global_state?: boolean
  indices?: IndexName[]
  /** @since 7.13.0 */
  index_details?: Dictionary<IndexName, IndexDetails>
  metadata?: Metadata
  reason?: string
  /** @since 7.14.0 */
  repository?: Name
  snapshot: Name
  shards?: ShardStatistics
  start_time?: DateTime
  start_time_in_millis?: EpochTime<UnitMillis>
  state?: string
  uuid: Uuid
  version?: VersionString
  version_id?: VersionNumber
  feature_states?: InfoFeatureState[]
}

export enum SnapshotSort {
  start_time,
  duration,
  name,
  index_count,
  /** @since 7.16.0 */
  repository,
  /** @since 7.16.0 */
  shard_count,
  /** @since 7.16.0 */
  failed_shard_count
}
