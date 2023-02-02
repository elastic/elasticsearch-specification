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
import { DurationValue, UnitNanos } from '@_types/Time'
import { Dictionary } from '@spec_utils/Dictionary'

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
}

export class AggregationProfileDelegateDebugFilter {
  results_from_metadata?: integer
  query?: string
  specialized_for?: string
  segments_counted_in_constant_time?: integer
}

export class AggregationProfile {
  breakdown: Dictionary<string, long>
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

export class QueryProfile {
  breakdown: Dictionary<string, long>
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
  id: string
  searches: SearchProfile[]
  fetch?: FetchProfile
  dfs?: DfsProfile
}

export class DfsProfile {
  statistics: DfsStatistics
}

export class DfsStatistics {
  breakdown: Dictionary<string, long>
  description: string
  time_in_nanos: DurationValue<UnitNanos>
  type: string
}

export class FetchProfile {
  type: string
  description: string
  time_in_nanos: DurationValue<UnitNanos>
  breakdown: Dictionary<string, long>
  debug?: FetchProfileDebug
  children?: FetchProfile[]
}

export class FetchProfileDebug {
  stored_fields?: string[]
  fast_path?: integer
}
