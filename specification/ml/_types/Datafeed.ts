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
import { AggregationContainer } from '@_types/aggregations/AggregationContainer'
import { ExpandWildcards, Id, Indices } from '@_types/common'
import { RuntimeFields } from '@_types/mapping/RuntimeFields'
import { double, integer, long } from '@_types/Numeric'
import { QueryContainer } from '@_types/query_dsl/abstractions'
import { ScriptField } from '@_types/Scripting'
import { Time, Timestamp } from '@_types/Time'
import { DiscoveryNode } from './DiscoveryNode'

export class Datafeed {
  aggregations?: Dictionary<string, AggregationContainer>
  aggs?: Dictionary<string, AggregationContainer>
  chunking_config?: ChunkingConfig
  datafeed_id: Id
  frequency?: Timestamp
  indices: string[]
  indexes?: string[]
  job_id: Id
  max_empty_searches?: integer
  query: QueryContainer
  query_delay?: Timestamp
  script_fields?: Dictionary<string, ScriptField>
  scroll_size?: integer
  delayed_data_check_config: DelayedDataCheckConfig
  runtime_mappings?: RuntimeFields
  indices_options?: DatafeedIndicesOptions
}
export class DatafeedConfig {
  aggregations?: Dictionary<string, AggregationContainer>
  aggs?: Dictionary<string, AggregationContainer>
  chunking_config?: ChunkingConfig
  datafeed_id?: Id
  delayed_data_check_config?: DelayedDataCheckConfig
  frequency?: Timestamp
  indexes?: string[]
  indices: string[]
  indices_options?: DatafeedIndicesOptions
  job_id?: Id
  max_empty_searches?: integer
  query: QueryContainer
  query_delay?: Timestamp
  runtime_mappings?: RuntimeFields
  script_fields?: Dictionary<string, ScriptField>
  scroll_size?: integer
}

export class DelayedDataCheckConfig {
  check_window?: Time // default: null
  enabled: boolean // default: true
}

export enum DatafeedState {
  started = 0,
  stopped = 1,
  starting = 2,
  stopping = 3
}

export class DatafeedStats {
  assignment_explanation: string
  datafeed_id: Id
  node: DiscoveryNode
  state: DatafeedState
  timing_stats: DatafeedTimingStats
}

export class DatafeedTimingStats {
  bucket_count: long
  exponential_average_search_time_per_hour_ms: double
  job_id: Id
  search_count: long
  total_search_time_ms: double
  average_search_time_per_bucket_ms: number
}

export enum ChunkingMode {
  auto = 0,
  manual = 1,
  off = 2
}

export class ChunkingConfig {
  mode: ChunkingMode
  /** @server_default 3h */
  time_span?: Time
}

export class DatafeedIndicesOptions {
  allow_no_indices?: boolean
  expand_wildcards?: ExpandWildcards
  ignore_unavailable?: boolean
  ignore_throttled?: boolean
}
