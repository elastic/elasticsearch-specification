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

import { ByteSize, EmptyObject } from '@_types/common'
import { integer, long } from '@_types/Numeric'
import { Duration, DurationLarge } from '@_types/Time'
import { RolloverConditions } from '@indices/rollover/types'
import { Dictionary } from '@spec_utils/Dictionary'

export class Phase {
  actions?: Actions
  min_age?: Duration
}

export class Phases {
  cold?: Phase
  delete?: Phase
  frozen?: Phase
  hot?: Phase
  warm?: Phase
}

export class Actions {
  /**
   * Phases allowed: warm, cold.
   */
  allocate?: AllocateAction
  /**
   * Phases allowed: delete.
   */
  delete?: DeleteAction
  /**
   * Phases allowed: hot, warm, cold.
   */
  downsample?: DownsampleAction

  /**
   * The freeze action is a noop in 8.x
   * @deprecated 7.0.0 */
  freeze?: EmptyObject
  /**
   * Phases allowed: hot, warm.
   */
  forcemerge?: ForceMergeAction
  /**
   * Phases allowed: warm, cold.
   */
  migrate?: MigrateAction
  /**
   * Phases allowed: hot, warm, cold.
   */
  readonly?: EmptyObject
  /**
   * Phases allowed: hot.
   */
  rollover?: RolloverAction
  /**
   * Phases allowed: hot, warm, cold.
   */
  set_priority?: SetPriorityAction
  /**
   * Phases allowed: hot, cold, frozen.
   */
  searchable_snapshot?: SearchableSnapshotAction
  /**
   * Phases allowed: hot, warm.
   */
  shrink?: ShrinkAction
  /**
   * Phases allowed: hot, warm, cold, frozen.
   */
  unfollow?: EmptyObject
  /**
   * Phases allowed: delete.
   */
  wait_for_snapshot?: WaitForSnapshotAction
}

export class SetPriorityAction {
  priority?: integer
}

export class RolloverAction {
  max_size?: ByteSize
  max_primary_shard_size?: ByteSize
  max_age?: Duration
  max_docs?: long
  max_primary_shard_docs?: long
  min_size?: ByteSize
  min_primary_shard_size?: ByteSize
  min_age?: Duration
  min_docs?: long
  min_primary_shard_docs?: long
}

export class DownsampleAction {
  fixed_interval: DurationLarge
  wait_timeout?: Duration
}

export class ShrinkAction {
  number_of_shards?: integer
  max_primary_shard_size?: ByteSize
  allow_write_after_shrink?: boolean
}

export class ForceMergeAction {
  max_num_segments: integer
  index_codec?: string
}

export class SearchableSnapshotAction {
  snapshot_repository: string
  force_merge_index?: boolean
}

export class AllocateAction {
  number_of_replicas?: integer
  total_shards_per_node?: integer
  include?: Dictionary<string, string>
  exclude?: Dictionary<string, string>
  require?: Dictionary<string, string>
}

export class MigrateAction {
  enabled?: boolean
}

export class WaitForSnapshotAction {
  policy: string
}

export class DeleteAction {
  delete_searchable_snapshot?: boolean
}

export class ShrinkConfiguration {
  number_of_shards: integer
}

export class ForceMergeConfiguration {
  max_num_segments: integer
}

export class Configurations {
  rollover?: RolloverConditions
  forcemerge?: ForceMergeConfiguration
  shrink?: ShrinkConfiguration
}
