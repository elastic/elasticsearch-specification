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

import { Duration, DurationValue, UnitMillis } from '@_types/Time'
import { ShardFileSizeInfo } from '@indices/stats/types'
import { Dictionary } from '@spec_utils/Dictionary'
import { ByteSize, ClusterAlias, Field, Name, VersionString } from './common'
import { ShardFailure } from './Errors'
import { double, integer, long, uint } from './Numeric'

export class ClusterStatistics {
  skipped: integer
  successful: integer
  total: integer
  running: integer
  partial: integer
  failed: integer
  details?: Dictionary<ClusterAlias, ClusterDetails>
}

enum ClusterSearchStatus {
  running,
  successful,
  partial,
  skipped,
  failed
}

export class ClusterDetails {
  status: ClusterSearchStatus
  indices: string
  took?: DurationValue<UnitMillis>
  timed_out: boolean
  _shards?: ShardStatistics
  failures?: ShardFailure[]
}

export class ShardStatistics {
  /**
   * The number of shards the operation or search attempted to run on but failed.
   */
  failed: uint
  /**
   * The number of shards the operation or search succeeded on.
   */
  successful: uint
  /**
   * The number of shards the operation or search will run on overall.
   */
  total: uint
  failures?: ShardFailure[]
  skipped?: uint
}

export class BulkStats {
  total_operations: long
  total_time?: Duration
  total_time_in_millis: DurationValue<UnitMillis>
  total_size?: ByteSize
  total_size_in_bytes: long
  avg_time?: Duration
  avg_time_in_millis: DurationValue<UnitMillis>
  avg_size?: ByteSize
  avg_size_in_bytes: long
}

export class CompletionStats {
  /**
   * Total amount, in bytes, of memory used for completion across all shards assigned to selected nodes.
   */
  size_in_bytes: long
  /**
   * Total amount of memory used for completion across all shards assigned to selected nodes.
   */
  size?: ByteSize
  fields?: Dictionary<Field, FieldSizeUsage>
}

export class FieldSizeUsage {
  size?: ByteSize
  size_in_bytes: long
}

export class DocStats {
  /**
   * Total number of non-deleted documents across all primary shards assigned to selected nodes.
   * This number is based on documents in Lucene segments and may include documents from nested fields.
   */
  count: long
  /**
   * Total number of deleted documents across all primary shards assigned to selected nodes.
   * This number is based on documents in Lucene segments.
   * Elasticsearch reclaims the disk space of deleted Lucene documents when a segment is merged.
   */
  deleted?: long
  /**
   * Returns the total size in bytes of all documents in this stats.
   * This value may be more reliable than store_stats.size_in_bytes in estimating the index size.
   */
  total_size_in_bytes: long
  /**
   * Human readable total_size_in_bytes
   */
  total_size?: ByteSize
}

export class FielddataStats {
  evictions?: long
  memory_size?: ByteSize
  memory_size_in_bytes: long
  fields?: Dictionary<Field, FieldMemoryUsage>
  global_ordinals: GlobalOrdinalsStats
}

export class GlobalOrdinalsStats {
  build_time_in_millis: UnitMillis
  build_time?: string
  fields?: Dictionary<Name, GlobalOrdinalFieldStats>
}

export class GlobalOrdinalFieldStats {
  build_time_in_millis: UnitMillis
  build_time?: string
  shard_max_value_count: long
}

export class FieldMemoryUsage {
  memory_size?: ByteSize
  memory_size_in_bytes: long
}

export class FlushStats {
  periodic: long
  total: long
  total_time?: Duration
  total_time_in_millis: DurationValue<UnitMillis>
}

export class GetStats {
  current: long
  exists_time?: Duration
  exists_time_in_millis: DurationValue<UnitMillis>
  exists_total: long
  missing_time?: Duration
  missing_time_in_millis: DurationValue<UnitMillis>
  missing_total: long
  time?: Duration
  time_in_millis: DurationValue<UnitMillis>
  total: long
}

export class IndexingStats {
  index_current: long
  delete_current: long
  delete_time?: Duration
  delete_time_in_millis: DurationValue<UnitMillis>
  delete_total: long
  is_throttled: boolean
  noop_update_total: long
  throttle_time?: Duration
  throttle_time_in_millis: DurationValue<UnitMillis>
  index_time?: Duration
  index_time_in_millis: DurationValue<UnitMillis>
  index_total: long
  index_failed: long
  types?: Dictionary<string, IndexingStats>
  write_load?: double
}

export class MergesStats {
  current: long
  current_docs: long
  current_size?: string
  current_size_in_bytes: long
  total: long
  total_auto_throttle?: string
  total_auto_throttle_in_bytes: long
  total_docs: long
  total_size?: string
  total_size_in_bytes: long
  total_stopped_time?: Duration
  total_stopped_time_in_millis: DurationValue<UnitMillis>
  total_throttled_time?: Duration
  total_throttled_time_in_millis: DurationValue<UnitMillis>
  total_time?: Duration
  total_time_in_millis: DurationValue<UnitMillis>
}

export class PluginStats {
  classname: string
  description: string
  elasticsearch_version: VersionString
  extended_plugins: string[]
  has_native_controller: boolean
  java_version: VersionString
  name: Name
  version: VersionString
  licensed: boolean
}

export class QueryCacheStats {
  /**
   * Total number of entries added to the query cache across all shards assigned to selected nodes.
   * This number includes current and evicted entries.
   */
  cache_count: long
  /**
   * Total number of entries currently in the query cache across all shards assigned to selected nodes.
   */
  cache_size: long
  /**
   * Total number of query cache evictions across all shards assigned to selected nodes.
   */
  evictions: long
  /**
   * Total count of query cache hits across all shards assigned to selected nodes.
   */
  hit_count: long
  /**
   * Total amount of memory used for the query cache across all shards assigned to selected nodes.
   */
  memory_size?: ByteSize
  /**
   * Total amount, in bytes, of memory used for the query cache across all shards assigned to selected nodes.
   */
  memory_size_in_bytes: long
  /**
   * Total count of query cache misses across all shards assigned to selected nodes.
   */
  miss_count: long
  /**
   * Total count of hits and misses in the query cache across all shards assigned to selected nodes.
   */
  total_count: long
}

export class RecoveryStats {
  current_as_source: long
  current_as_target: long
  throttle_time?: Duration
  throttle_time_in_millis: DurationValue<UnitMillis>
}

export class RefreshStats {
  external_total: long
  external_total_time_in_millis: DurationValue<UnitMillis>
  listeners: long
  total: long
  total_time?: Duration
  total_time_in_millis: DurationValue<UnitMillis>
}

export class RequestCacheStats {
  evictions: long
  hit_count: long
  memory_size?: string
  memory_size_in_bytes: long
  miss_count: long
}

export class SearchStats {
  fetch_current: long
  fetch_time?: Duration
  fetch_time_in_millis: DurationValue<UnitMillis>
  fetch_total: long
  open_contexts?: long
  query_current: long
  query_time?: Duration
  query_time_in_millis: DurationValue<UnitMillis>
  query_total: long
  scroll_current: long
  scroll_time?: Duration
  scroll_time_in_millis: DurationValue<UnitMillis>
  scroll_total: long
  suggest_current: long
  suggest_time?: Duration
  suggest_time_in_millis: DurationValue<UnitMillis>
  suggest_total: long
  groups?: Dictionary<string, SearchStats>
}

export class SegmentsStats {
  /**
   * Total number of segments across all shards assigned to selected nodes.
   */
  count: integer
  /**
   * Total amount of memory used for doc values across all shards assigned to selected nodes.
   */
  doc_values_memory?: ByteSize
  /**
   * Total amount, in bytes, of memory used for doc values across all shards assigned to selected nodes.
   */
  doc_values_memory_in_bytes: long
  /**
   * This object is not populated by the cluster stats API.
   * To get information on segment files, use the node stats API.
   */
  file_sizes: Dictionary<string, ShardFileSizeInfo>
  /**
   * Total amount of memory used by fixed bit sets across all shards assigned to selected nodes.
   * Fixed bit sets are used for nested object field types and type filters for join fields.
   */
  fixed_bit_set?: ByteSize
  /**
   * Total amount of memory, in bytes, used by fixed bit sets across all shards assigned to selected nodes.
   */
  fixed_bit_set_memory_in_bytes: long
  /**
   * Total amount of memory used by all index writers across all shards assigned to selected nodes.
   */
  index_writer_memory?: ByteSize
  /**
   * Total amount, in bytes, of memory used by all index writers across all shards assigned to selected nodes.
   */
  index_writer_memory_in_bytes: long
  /**
   * Unix timestamp, in milliseconds, of the most recently retried indexing request.
   */
  max_unsafe_auto_id_timestamp: long
  /**
   * Total amount of memory used for segments across all shards assigned to selected nodes.
   */
  memory?: ByteSize
  /**
   * Total amount, in bytes, of memory used for segments across all shards assigned to selected nodes.
   */
  memory_in_bytes: long
  /**
   * Total amount of memory used for normalization factors across all shards assigned to selected nodes.
   */
  norms_memory?: ByteSize
  /**
   * Total amount, in bytes, of memory used for normalization factors across all shards assigned to selected nodes.
   */
  norms_memory_in_bytes: long
  /**
   * Total amount of memory used for points across all shards assigned to selected nodes.
   */
  points_memory?: ByteSize
  /**
   * Total amount, in bytes, of memory used for points across all shards assigned to selected nodes.
   */
  points_memory_in_bytes: long
  /**
   * Total amount, in bytes, of memory used for stored fields across all shards assigned to selected nodes.
   */
  stored_fields_memory_in_bytes: long
  /**
   * Total amount of memory used for stored fields across all shards assigned to selected nodes.
   */
  stored_fields_memory?: ByteSize
  /**
   * Total amount, in bytes, of memory used for terms across all shards assigned to selected nodes.
   */
  terms_memory_in_bytes: long
  /**
   * Total amount of memory used for terms across all shards assigned to selected nodes.
   */
  terms_memory?: ByteSize
  /**
   * Total amount of memory used for term vectors across all shards assigned to selected nodes.
   */
  term_vectors_memory?: ByteSize
  /**
   * Total amount, in bytes, of memory used for term vectors across all shards assigned to selected nodes.
   */
  term_vectors_memory_in_bytes: long
  /**
   * Total amount of memory used by all version maps across all shards assigned to selected nodes.
   */
  version_map_memory?: ByteSize
  /**
   * Total amount, in bytes, of memory used by all version maps across all shards assigned to selected nodes.
   */
  version_map_memory_in_bytes: long
}

export class StoreStats {
  /**
   * Total size of all shards assigned to selected nodes.
   */
  size?: ByteSize
  /**
   * Total size, in bytes, of all shards assigned to selected nodes.
   */
  size_in_bytes: long
  /**
   * A prediction of how much larger the shard stores will eventually grow due to ongoing peer recoveries, restoring snapshots, and similar activities.
   */
  reserved?: ByteSize
  /**
   * A prediction, in bytes, of how much larger the shard stores will eventually grow due to ongoing peer recoveries, restoring snapshots, and similar activities.
   */
  reserved_in_bytes: long
  /**
   * Total data set size of all shards assigned to selected nodes.
   * This includes the size of shards not stored fully on the nodes, such as the cache for partially mounted indices.
   */
  total_data_set_size?: ByteSize
  /**
   * Total data set size, in bytes, of all shards assigned to selected nodes.
   * This includes the size of shards not stored fully on the nodes, such as the cache for partially mounted indices.
   */
  total_data_set_size_in_bytes?: long
}

export class TranslogStats {
  earliest_last_modified_age: long
  operations: long
  size?: string
  size_in_bytes: long
  uncommitted_operations: integer
  uncommitted_size?: string
  uncommitted_size_in_bytes: long
}

export class WarmerStats {
  current: long
  total: long
  total_time?: Duration
  total_time_in_millis: DurationValue<UnitMillis>
}
