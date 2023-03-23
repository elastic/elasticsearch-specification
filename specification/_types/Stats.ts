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

import { ShardFileSizeInfo } from '@indices/stats/types'
import { Dictionary } from '@spec_utils/Dictionary'
import { ByteSize, Field, Name, VersionString } from './common'
import { ShardFailure } from './Errors'
import { double, integer, long, uint } from './Numeric'
import { Duration, DurationValue, UnitMillis } from '@_types/Time'

export class ClusterStatistics {
  skipped: integer
  successful: integer
  total: integer
}

export class ShardStatistics {
  failed: uint
  successful: uint
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
  size_in_bytes: long
  size?: ByteSize
  fields?: Dictionary<Field, FieldSizeUsage>
}

export class FieldSizeUsage {
  size?: ByteSize
  size_in_bytes: long
}

export class DocStats {
  count: long
  deleted?: long
}

export class FielddataStats {
  evictions?: long
  memory_size?: ByteSize
  memory_size_in_bytes: long
  fields?: Dictionary<Field, FieldMemoryUsage>
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
  cache_count: integer
  cache_size: integer
  evictions: integer
  hit_count: integer
  memory_size?: ByteSize
  memory_size_in_bytes: long
  miss_count: integer
  total_count: integer
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
  count: integer
  doc_values_memory?: ByteSize
  doc_values_memory_in_bytes: long
  file_sizes: Dictionary<string, ShardFileSizeInfo>
  fixed_bit_set?: ByteSize
  fixed_bit_set_memory_in_bytes: long
  index_writer_memory?: ByteSize
  index_writer_max_memory_in_bytes?: long
  index_writer_memory_in_bytes: long
  max_unsafe_auto_id_timestamp: long
  memory?: ByteSize
  memory_in_bytes: long
  norms_memory?: ByteSize
  norms_memory_in_bytes: long
  points_memory?: ByteSize
  points_memory_in_bytes: long
  stored_memory?: ByteSize
  stored_fields_memory_in_bytes: long
  terms_memory_in_bytes: long
  terms_memory?: ByteSize
  term_vectory_memory?: ByteSize
  term_vectors_memory_in_bytes: long
  version_map_memory?: ByteSize
  version_map_memory_in_bytes: long
}

export class StoreStats {
  size?: ByteSize
  size_in_bytes: long
  reserved?: ByteSize
  reserved_in_bytes: long
  total_data_set_size?: ByteSize
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
