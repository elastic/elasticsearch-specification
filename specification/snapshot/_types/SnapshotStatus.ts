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
  include_global_state: boolean
  indices: Dictionary<string, SnapshotIndexStats>
  repository: string
  shards_stats: ShardsStats
  snapshot: string
  state: string
  stats: SnapshotStats
  uuid: Uuid
}
