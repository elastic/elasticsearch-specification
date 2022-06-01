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

import { AnalysisConfig, AnalysisLimits } from '@ml/_types/Analysis'
import { ModelPlotConfig } from '@ml/_types/ModelPlot'
import { Dictionary } from '@spec_utils/Dictionary'
import { CustomSettings } from '@ml/_types/Settings'
import { Field, Id, TaskId, IndexName, VersionString } from '@_types/common'
import { double, integer, long } from '@_types/Numeric'
import { Duration, DateTime, DurationFloatMillis } from '@_types/Time'
import { DiscoveryNode } from './DiscoveryNode'
import { ModelSizeStats } from './Model'
import { Datafeed, DatafeedConfig } from '@ml/_types/Datafeed'

export enum JobState {
  closing = 0,
  closed = 1,
  opened = 2,
  failed = 3,
  opening = 4
}

export class JobStatistics {
  avg: double
  max: double
  min: double
  total: double
}

export class Job {
  allow_lazy_open: boolean
  analysis_config: AnalysisConfig
  analysis_limits?: AnalysisLimits
  background_persist_interval?: Duration
  blocked?: JobBlocked
  create_time?: DateTime
  custom_settings?: CustomSettings
  daily_model_snapshot_retention_after_days?: long
  data_description: DataDescription
  datafeed_config?: Datafeed
  deleting?: boolean
  description?: string
  finished_time?: DateTime
  groups?: string[]
  job_id: Id
  job_type?: string
  job_version?: VersionString
  model_plot_config?: ModelPlotConfig
  model_snapshot_id?: Id
  model_snapshot_retention_days: long
  renormalization_window_days?: long
  results_index_name: IndexName
  results_retention_days?: long
}

export class JobConfig {
  allow_lazy_open?: boolean
  analysis_config: AnalysisConfig
  analysis_limits?: AnalysisLimits
  background_persist_interval?: Duration
  custom_settings?: CustomSettings
  daily_model_snapshot_retention_after_days?: long
  data_description: DataDescription
  datafeed_config?: DatafeedConfig
  description?: string
  groups?: string[]
  job_id?: Id
  job_type?: string
  model_plot_config?: ModelPlotConfig
  model_snapshot_retention_days?: long
  renormalization_window_days?: long
  results_index_name?: IndexName
  results_retention_days?: long
}
export class JobStats {
  assignment_explanation?: string
  data_counts: DataCounts
  forecasts_stats: JobForecastStatistics
  job_id: string
  model_size_stats: ModelSizeStats
  node?: DiscoveryNode
  open_time?: DateTime
  state: JobState
  timing_stats: JobTimingStats
  deleting?: boolean
}

export class JobTimingStats {
  average_bucket_processing_time_ms?: DurationFloatMillis
  bucket_count: long
  exponential_average_bucket_processing_time_ms?: DurationFloatMillis
  exponential_average_bucket_processing_time_per_hour_ms: DurationFloatMillis
  job_id: Id
  total_bucket_processing_time_ms: DurationFloatMillis
  maximum_bucket_processing_time_ms?: DurationFloatMillis
  minimum_bucket_processing_time_ms?: DurationFloatMillis
}

export class JobForecastStatistics {
  memory_bytes?: JobStatistics
  processing_time_ms?: JobStatistics
  records?: JobStatistics
  status?: Dictionary<string, long>
  total: long
  forecasted_jobs: integer
}

export class DataCounts {
  bucket_count: long
  earliest_record_timestamp?: long
  empty_bucket_count: long
  input_bytes: long
  input_field_count: long
  input_record_count: long
  invalid_date_count: long
  job_id: Id
  last_data_time?: long
  latest_empty_bucket_timestamp?: long
  latest_record_timestamp?: long
  latest_sparse_bucket_timestamp?: long
  latest_bucket_timestamp?: long
  log_time?: long
  missing_field_count: long
  out_of_order_timestamp_count: long
  processed_field_count: long
  processed_record_count: long
  sparse_bucket_count: long
}

export class DataDescription {
  /**
   * Only JSON format is supported at this time.
   */
  format?: string
  /**
   * The name of the field that contains the timestamp.
   * @server_default time
   */
  time_field?: Field
  /**
   * The time format, which can be `epoch`, `epoch_ms`, or a custom pattern. The value `epoch` refers to UNIX or Epoch time (the number of seconds since 1 Jan 1970). The value `epoch_ms` indicates that time is measured in milliseconds since the epoch. The `epoch` and `epoch_ms` time formats accept either integer or real values. Custom patterns must conform to the Java DateTimeFormatter class. When you use date-time formatting patterns, it is recommended that you provide the full date, time and time zone. For example: `yyyy-MM-dd'T'HH:mm:ssX`. If the pattern that you specify is not sufficient to produce a complete timestamp, job creation fails.
   * @server_default epoch
   */
  time_format?: string
  field_delimiter?: string
}

export class JobBlocked {
  reason: JobBlockedReason
  task_id?: TaskId
}

export enum JobBlockedReason {
  delete = 0,
  reset = 1,
  revert = 2
}
