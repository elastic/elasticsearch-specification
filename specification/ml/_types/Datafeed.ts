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

import { AggregationContainer } from '@_types/aggregations/AggregationContainer'
import { Id, Indices, IndicesOptions, ProjectRouting } from '@_types/common'
import { RuntimeFields } from '@_types/mapping/RuntimeFields'
import { integer, long } from '@_types/Numeric'
import { QueryContainer } from '@_types/query_dsl/abstractions'
import { ScriptField } from '@_types/Scripting'
import {
  Duration,
  DurationValue,
  EpochTime,
  UnitFloatMillis,
  UnitMillis
} from '@_types/Time'
import { DatafeedAuthorization } from '@ml/_types/Authorization'
import { Dictionary } from '@spec_utils/Dictionary'
import { DiscoveryNodeCompact } from './DiscoveryNode'

export class Datafeed {
  /** @aliases aggs */
  aggregations?: Dictionary<string, AggregationContainer>
  /**
   * The security privileges that the datafeed uses to run its queries. If Elastic Stack security features were disabled at the time of the most recent update to the datafeed, this property is omitted.
   */
  authorization?: DatafeedAuthorization
  chunking_config?: ChunkingConfig
  datafeed_id: Id
  /**
   * The interval at which scheduled queries are made while the datafeed runs in real time. The default value is either the bucket span for short bucket spans, or, for longer bucket spans, a sensible fraction of the bucket span. For example: `150s`. When `frequency` is shorter than the bucket span, interim results for the last (partial) bucket are written then eventually overwritten by the full bucket results. If the datafeed uses aggregations, this value must be divisible by the interval of the date histogram aggregation.
   */
  frequency?: Duration
  indices: string[]
  indexes?: string[]
  job_id: Id
  max_empty_searches?: integer
  /**
   * @ext_doc_id query-dsl
   */
  query: QueryContainer
  query_delay?: Duration
  script_fields?: Dictionary<string, ScriptField>
  scroll_size?: integer
  delayed_data_check_config: DelayedDataCheckConfig
  runtime_mappings?: RuntimeFields
  indices_options?: IndicesOptions
}

export class DatafeedConfig {
  /**
   * If set, the datafeed performs aggregation searches. Support for aggregations is limited and should be used only with low cardinality data.
   *
   * @aliases aggs
   */
  aggregations?: Dictionary<string, AggregationContainer>
  /**
   * Datafeeds might be required to search over long time periods, for several months or years. This search is split into time chunks in order to ensure the load on Elasticsearch is managed. Chunking configuration controls how the size of these time chunks are calculated and is an advanced configuration option.
   */
  chunking_config?: ChunkingConfig
  /** A numerical character string that uniquely identifies the datafeed. This identifier can contain lowercase alphanumeric characters (a-z and 0-9), hyphens, and underscores. It must start and end with alphanumeric characters. The default value is the job identifier.
   */
  datafeed_id?: Id
  /**
   * Specifies whether the datafeed checks for missing data and the size of the window. The datafeed can optionally search over indices that have already been read in an effort to determine whether any data has subsequently been added to the index. If missing data is found, it is a good indication that the `query_delay` option is set too low and the data is being indexed after the datafeed has passed that moment in time. This check runs only on real-time datafeeds.
   */
  delayed_data_check_config?: DelayedDataCheckConfig
  /**
   * The interval at which scheduled queries are made while the datafeed runs in real time. The default value is either the bucket span for short bucket spans, or, for longer bucket spans, a sensible fraction of the bucket span. For example: `150s`. When `frequency` is shorter than the bucket span, interim results for the last (partial) bucket are written then eventually overwritten by the full bucket results. If the datafeed uses aggregations, this value must be divisible by the interval of the date histogram aggregation.
   */
  frequency?: Duration
  /**
   * An array of index names. Wildcards are supported. If any indices are in remote clusters, the machine learning nodes must have the `remote_cluster_client` role.
   * @aliases indexes
   */
  indices?: Indices
  /**
   * Specifies index expansion options that are used during search.
   */
  indices_options?: IndicesOptions
  /**
   * The specified projects when querying the source indices.
   * @availability stack since=9.2.0
   * @availability serverless
   */
  project_routing?: ProjectRouting
  job_id?: Id
  /**
   * If a real-time datafeed has never seen any data (including during any initial training period) then it will automatically stop itself and close its associated job after this many real-time searches that return no documents. In other words, it will stop after `frequency` times `max_empty_searches` of real-time operation. If not set then a datafeed with no end time that sees no data will remain started until it is explicitly stopped.
   */
  max_empty_searches?: integer
  /**
   * The Elasticsearch query domain-specific language (DSL). This value corresponds to the query object in an Elasticsearch search POST body. All the options that are supported by Elasticsearch can be used, as this object is passed verbatim to Elasticsearch.
   */
  query?: QueryContainer
  /**
   * The number of seconds behind real time that data is queried. For example, if data from 10:04 a.m. might not be searchable in Elasticsearch until 10:06 a.m., set this property to 120 seconds. The default value is randomly selected between `60s` and `120s`. This randomness improves the query performance when there are multiple jobs running on the same node.
   */
  query_delay?: Duration
  /**
   * Specifies runtime fields for the datafeed search.
   */
  runtime_mappings?: RuntimeFields
  /**
   * Specifies scripts that evaluate custom expressions and returns script fields to the datafeed. The detector configuration objects in a job can contain functions that use these script fields.
   */
  script_fields?: Dictionary<string, ScriptField>
  /**
   * The size parameter that is used in Elasticsearch searches when the datafeed does not use aggregations. The maximum value is the value of `index.max_result_window`, which is 10,000 by default.
   * @server_default 1000
   */
  scroll_size?: integer
}

export class DelayedDataCheckConfig {
  /**
   * The window of time that is searched for late data. This window of time ends with the latest finalized bucket.
   * It defaults to null, which causes an appropriate `check_window` to be calculated when the real-time datafeed runs.
   * In particular, the default `check_window` span calculation is based on the maximum of `2h` or `8 * bucket_span`.
   */
  check_window?: Duration // default: null
  /**
   * Specifies whether the datafeed periodically checks for delayed data.
   */
  enabled: boolean
}

// Identical to WatcherState, but kept separate as they're different enums in ES
export enum DatafeedState {
  started,
  stopped,
  starting,
  stopping
}

export class DatafeedStats {
  /**
   * For started datafeeds only, contains messages relating to the selection of a node.
   */
  assignment_explanation?: string
  /**
   * A numerical character string that uniquely identifies the datafeed.
   * This identifier can contain lowercase alphanumeric characters (a-z and 0-9), hyphens, and underscores.
   * It must start and end with alphanumeric characters.
   */
  datafeed_id: Id
  /**
   * For started datafeeds only, this information pertains to the node upon which the datafeed is started.
   * @availability stack
   */
  node?: DiscoveryNodeCompact
  /**
   * The status of the datafeed, which can be one of the following values: `starting`, `started`, `stopping`, `stopped`.
   */
  state: DatafeedState
  /**
   * An object that provides statistical information about timing aspect of this datafeed.
   */
  timing_stats?: DatafeedTimingStats
  /**
   * An object containing the running state for this datafeed.
   * It is only provided if the datafeed is started.
   */
  running_state?: DatafeedRunningState
}

export class DatafeedTimingStats {
  /**
   * The number of buckets processed.
   */
  bucket_count: long
  /**
   * The exponential average search time per hour, in milliseconds.
   */
  exponential_average_search_time_per_hour_ms: DurationValue<UnitFloatMillis>

  exponential_average_calculation_context?: ExponentialAverageCalculationContext

  /**
   * Identifier for the anomaly detection job.
   */
  job_id: Id
  /**
   * The number of searches run by the datafeed.
   */
  search_count: long
  /**
   * The total time the datafeed spent searching, in milliseconds.
   */
  total_search_time_ms: DurationValue<UnitFloatMillis>
  /**
   * The average search time per bucket, in milliseconds.
   */
  average_search_time_per_bucket_ms?: DurationValue<UnitFloatMillis>
}

export class ExponentialAverageCalculationContext {
  incremental_metric_value_ms: DurationValue<UnitFloatMillis>
  latest_timestamp?: EpochTime<UnitMillis>
  previous_exponential_average_ms?: DurationValue<UnitFloatMillis>
}

export class DatafeedRunningState {
  /**
   * Indicates if the datafeed is "real-time"; meaning that the datafeed has no configured `end` time.
   */
  real_time_configured: boolean
  /**
   * Indicates whether the datafeed has finished running on the available past data.
   * For datafeeds without a configured `end` time, this means that the datafeed is now running on "real-time" data.
   */
  real_time_running: boolean
  /**
   * Provides the latest time interval the datafeed has searched.
   */
  search_interval?: RunningStateSearchInterval
}

export class RunningStateSearchInterval {
  /**
   * The end time.
   */
  end?: Duration
  /**
   * The end time as an epoch in milliseconds.
   */
  end_ms: DurationValue<UnitMillis>
  /**
   * The start time.
   */
  start?: Duration
  /**
   * The start time as an epoch in milliseconds.
   */
  start_ms: DurationValue<UnitMillis>
}

export enum ChunkingMode {
  auto,
  manual,
  off
}

export class ChunkingConfig {
  /**
   * If the mode is `auto`, the chunk size is dynamically calculated;
   * this is the recommended value when the datafeed does not use aggregations.
   * If the mode is `manual`, chunking is applied according to the specified `time_span`;
   * use this mode when the datafeed uses aggregations. If the mode is `off`, no chunking is applied.
   */
  mode: ChunkingMode
  /**
   * The time span that each search will be querying. This setting is applicable only when the `mode` is set to `manual`.
   * @server_default 3h
   */
  time_span?: Duration
}
