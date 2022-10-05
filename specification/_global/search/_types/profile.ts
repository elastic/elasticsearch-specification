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

import { integer, long } from '@_types/Numeric'

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

export class AggregationProfileDebug {
  segments_with_multi_valued_ords?: integer
  collection_strategy?: string
  segments_with_single_valued_ords?: integer
  total_buckets?: integer
  built_buckets?: integer
  result_strategy?: string
  has_filter?: boolean
  delegate?: string
  delegate_debug?: AggregationProfileDelegateDebug
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
}

export class AggregationProfileDelegateDebug {
  segments_with_doc_count_field?: integer
  segments_with_deleted_docs?: integer
  filters?: AggregationProfileDelegateDebugFilter[]
  segments_counted?: integer
  segments_collected?: integer
  map_reducer?: string
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
  time_in_nanos: long
  type: string
  debug?: AggregationProfileDebug
  children?: AggregationProfile[]
}

export class Collector {
  name: string
  reason: string
  time_in_nanos: long
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
  set_min_competitive_score: long
  set_min_competitive_score_count: long
}

export class QueryProfile {
  breakdown: QueryBreakdown
  description: string
  time_in_nanos: long
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
  id: string
  searches: SearchProfile[]
  fetch?: FetchProfile
}

export class FetchProfile {
  type: string
  description: string
  time_in_nanos: long
  breakdown: FetchProfileBreakdown
  debug?: FetchProfileDebug
  children?: FetchProfile[]
}

export class FetchProfileBreakdown {
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
