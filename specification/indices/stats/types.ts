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
import { Id, SequenceNumber, Uuid, VersionNumber } from '@_types/common'
import { integer, long } from '@_types/Numeric'
import {
  BulkStats,
  CompletionStats,
  DocStats,
  FielddataStats,
  FlushStats,
  GetStats,
  IndexingStats,
  MergesStats,
  QueryCacheStats,
  RecoveryStats,
  RefreshStats,
  RequestCacheStats,
  SearchStats,
  SegmentsStats,
  StoreStats,
  TranslogStats,
  WarmerStats
} from '@_types/Stats'

export class IndexStats {
  /** Contains statistics about completions across all shards assigned to the node. */
  completion?: CompletionStats
  /** Contains statistics about documents across all primary shards assigned to the node. */
  docs?: DocStats
  /** Contains statistics about the field data cache across all shards assigned to the node. */
  fielddata?: FielddataStats
  /** Contains statistics about flush operations for the node. */
  flush?: FlushStats
  /** Contains statistics about get operations for the node. */
  get?: GetStats
  /** Contains statistics about indexing operations for the node. */
  indexing?: IndexingStats
  /** Contains statistics about merge operations for the node. */
  merges?: MergesStats
  /** Contains statistics about the query cache across all shards assigned to the node. */
  query_cache?: QueryCacheStats
  /** Contains statistics about recovery operations for the node. */
  recovery?: RecoveryStats
  /** Contains statistics about refresh operations for the node. */
  refresh?: RefreshStats
  /** Contains statistics about the request cache across all shards assigned to the node. */
  request_cache?: RequestCacheStats
  /** Contains statistics about search operations for the node. */
  search?: SearchStats
  /** Contains statistics about segments across all shards assigned to the node. */
  segments?: SegmentsStats
  /** Contains statistics about the size of shards assigned to the node. */
  store?: StoreStats
  /** Contains statistics about transaction log operations for the node. */
  translog?: TranslogStats
  /** Contains statistics about index warming operations for the node. */
  warmer?: WarmerStats
  bulk?: BulkStats
}

export class IndicesStats {
  primaries: IndexStats
  shards?: Dictionary<string, ShardStats[]>
  total: IndexStats
  uuid?: Uuid
}

export class ShardCommit {
  generation: integer
  id: Id
  num_docs: long
  user_data: Dictionary<string, string>
}

export class ShardFielddata {
  evictions: long
  memory_size_in_bytes: long
}

export class ShardFileSizeInfo {
  description: string
  size_in_bytes: long
}

export class ShardLease {
  id: Id
  retaining_seq_no: SequenceNumber
  timestamp: long
  source: string
}

export class ShardPath {
  data_path: string
  is_custom_data_path: boolean
  state_path: string
}

export class ShardQueryCache {
  cache_count: long
  cache_size: long
  evictions: long
  hit_count: long
  memory_size_in_bytes: long
  miss_count: long
  total_count: long
}

export class ShardRetentionLeases {
  primary_term: long
  version: VersionNumber
  leases: ShardLease[]
}

export class ShardRouting {
  node: string
  primary: boolean
  relocating_node?: string
  state: ShardRoutingState
}

export enum ShardRoutingState {
  UNASSIGNED = 0,
  INITIALIZING = 1,
  STARTED = 2,
  RELOCATING = 3
}

export class ShardSequenceNumber {
  global_checkpoint: long
  local_checkpoint: long
  max_seq_no: SequenceNumber
}

export class ShardStats {
  commit: ShardCommit
  completion: CompletionStats
  docs: DocStats
  fielddata: FielddataStats
  flush: FlushStats
  get: GetStats
  indexing: IndexingStats
  merges: MergesStats
  shard_path: ShardPath
  query_cache: ShardQueryCache
  recovery: RecoveryStats
  refresh: RefreshStats
  request_cache: RequestCacheStats
  retention_leases: ShardRetentionLeases
  routing: ShardRouting
  search: SearchStats
  segments: SegmentsStats
  seq_no: ShardSequenceNumber
  store: StoreStats
  translog: TranslogStats
  warmer: WarmerStats
  bulk?: BulkStats
}
