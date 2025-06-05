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

import { IndexName, NodeId } from '@_types/common'
import { integer, long } from '@_types/Numeric'
import { Duration, DurationValue, UnitNanos } from '@_types/Time'
import { Dictionary } from '@spec_utils/Dictionary'
import { UserDefinedValue } from '@spec_utils/UserDefinedValue'

export class AggregationBreakdown {
  build_aggregation: long
  build_aggregation_count: long
  build_leaf_collector: long
  build_leaf_collector_count: long
  collect: long
  collect_count: long
  initialize: long
  initialize_count: long
  post_collection?: long
  post_collection_count?: long
  reduce: long
  reduce_count: long
}

// This is a Map<String, Object> in ES. Below are the known fields.
export class AggregationProfileDebug {
  segments_with_multi_valued_ords?: integer
  collection_strategy?: string
  segments_with_single_valued_ords?: integer
  total_buckets?: integer
  built_buckets?: integer
  result_strategy?: string
  has_filter?: boolean
  delegate?: string
  delegate_debug?: AggregationProfileDebug
  chars_fetched?: integer
  extract_count?: integer
  extract_ns?: integer
  values_fetched?: integer
  collect_analyzed_ns?: integer
  collect_analyzed_count?: integer
  surviving_buckets?: integer
  ordinals_collectors_used?: integer
  ordinals_collectors_overhead_too_high?: integer
  string_hashing_collectors_used?: integer
  numeric_collectors_used?: integer
  empty_collectors_used?: integer
  deferred_aggregators?: string[]
  segments_with_doc_count_field?: integer
  segments_with_deleted_docs?: integer
  filters?: AggregationProfileDelegateDebugFilter[]
  segments_counted?: integer
  segments_collected?: integer
  map_reducer?: string
  // global ords cardinality aggregator
  brute_force_used?: integer
  dynamic_pruning_attempted?: integer
  dynamic_pruning_used?: integer
  skipped_due_to_no_data?: integer
}

export class AggregationProfileDelegateDebugFilter {
  results_from_metadata?: integer
  query?: string
  specialized_for?: string
  segments_counted_in_constant_time?: integer
}

export class AggregationProfile {
  breakdown: AggregationBreakdown
  description: string
  time_in_nanos: DurationValue<UnitNanos>
  type: string
  debug?: AggregationProfileDebug
  children?: AggregationProfile[]
}

export class Collector {
  name: string
  reason: string
  time_in_nanos: DurationValue<UnitNanos>
  children?: Collector[]
}

export class Profile {
  shards: ShardProfile[]
}

export class QueryBreakdown {
  advance: long
  advance_count: long
  build_scorer: long
  build_scorer_count: long
  create_weight: long
  create_weight_count: long
  match: long
  match_count: long
  shallow_advance: long
  shallow_advance_count: long
  next_doc: long
  next_doc_count: long
  score: long
  score_count: long
  compute_max_score: long
  compute_max_score_count: long
  count_weight: long
  count_weight_count: long
  set_min_competitive_score: long
  set_min_competitive_score_count: long
}

export class QueryProfile {
  breakdown: QueryBreakdown
  description: string
  time_in_nanos: DurationValue<UnitNanos>
  type: string
  children?: QueryProfile[]
}

export class SearchProfile {
  collector: Collector[]
  query: QueryProfile[]
  rewrite_time: long
}

export class ShardProfile {
  aggregations: AggregationProfile[]
  cluster: string
  dfs?: DfsProfile
  fetch?: FetchProfile
  id: string
  index: IndexName
  node_id: NodeId
  searches: SearchProfile[]
  shard_id: integer
}

export class DfsProfile {
  statistics?: DfsStatisticsProfile
  knn?: DfsKnnProfile[]
}

export class DfsStatisticsProfile {
  type: string
  description: string
  time?: Duration
  time_in_nanos: DurationValue<UnitNanos>
  breakdown: DfsStatisticsBreakdown
  debug?: Dictionary<string, UserDefinedValue>
  children?: DfsStatisticsProfile[]
}

// This is a Map<String, long> in ES. Below are the known fields.
export class DfsStatisticsBreakdown {
  collection_statistics: long
  collection_statistics_count: long
  create_weight: long
  create_weight_count: long
  rewrite: long
  rewrite_count: long
  term_statistics: long
  term_statistics_count: long
}

export class DfsKnnProfile {
  vector_operations_count?: long
  query: KnnQueryProfileResult[]
  rewrite_time: long
  collector: KnnCollectorResult[]
}

export class KnnQueryProfileResult {
  type: string
  description: string
  time?: Duration
  time_in_nanos: DurationValue<UnitNanos>
  breakdown: KnnQueryProfileBreakdown
  debug?: Dictionary<string, UserDefinedValue>
  children?: KnnQueryProfileResult[]
}

// This is a Map<String, long> in ES. Below are the known fields.
export class KnnQueryProfileBreakdown {
  advance: long
  advance_count: long
  build_scorer: long
  build_scorer_count: long
  compute_max_score: long
  compute_max_score_count: long
  count_weight: long
  count_weight_count: long
  create_weight: long
  create_weight_count: long
  match: long
  match_count: long
  next_doc: long
  next_doc_count: long
  score: long
  score_count: long
  set_min_competitive_score: long
  set_min_competitive_score_count: long
  shallow_advance: long
  shallow_advance_count: long
}

export class KnnCollectorResult {
  name: string
  reason: string
  time?: Duration
  time_in_nanos: DurationValue<UnitNanos>
  children?: KnnCollectorResult[]
}

export class FetchProfile {
  type: string
  description: string
  time_in_nanos: DurationValue<UnitNanos>
  breakdown: FetchProfileBreakdown
  debug?: FetchProfileDebug
  children?: FetchProfile[]
}

export class FetchProfileBreakdown {
  load_source?: integer
  load_source_count?: integer
  load_stored_fields?: integer
  load_stored_fields_count?: integer
  next_reader?: integer
  next_reader_count?: integer
  process_count?: integer
  process?: integer
}

export class FetchProfileDebug {
  stored_fields?: string[]
  fast_path?: integer
}
