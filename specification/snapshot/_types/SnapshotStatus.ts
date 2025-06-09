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

import { Uuid } from '@_types/common'
import { Dictionary } from '@spec_utils/Dictionary'
import { SnapshotIndexStats } from './SnapshotIndexStats'
import { ShardsStats } from './SnapshotShardsStats'
import { SnapshotStats } from './SnapshotStats'

export class Status {
  /**
   * Indicates whether the current cluster state is included in the snapshot.
   */
  include_global_state: boolean
  indices: Dictionary<string, SnapshotIndexStats>
  /**
   * The name of the repository that includes the snapshot.
   */
  repository: string
  /**
   * Statistics for the shards in the snapshot.
   */
  shards_stats: ShardsStats
  /**
   * The name of the snapshot.
   */
  snapshot: string
  /**
   * The current snapshot state:
   *
   * * `FAILED`: The snapshot finished with an error and failed to store any data.
   * * `STARTED`: The snapshot is currently running.
   * * `SUCCESS`: The snapshot completed.
   */
  state: string
  /**
   * Details about the number (`file_count`) and size (`size_in_bytes`) of files included in the snapshot.
   */
  stats: SnapshotStats
  /**
   * The universally unique identifier (UUID) for the snapshot.
   */
  uuid: Uuid
}
