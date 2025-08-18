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

import { Field, Id, IndexName, TaskId, VersionString } from '@_types/common'
import { double, integer, long } from '@_types/Numeric'
import {
  DateTime,
  Duration,
  DurationValue,
  UnitFloatMillis
} from '@_types/Time'
import { AnalysisConfig, AnalysisLimits } from '@ml/_types/Analysis'
import { Datafeed, DatafeedConfig } from '@ml/_types/Datafeed'
import { ModelPlotConfig } from '@ml/_types/ModelPlot'
import { CustomSettings } from '@ml/_types/Settings'
import { Dictionary } from '@spec_utils/Dictionary'
import { DiscoveryNodeCompact } from './DiscoveryNode'
import { ModelSizeStats } from './Model'

export enum JobState {
  /** The job close action is in progress and has not yet completed. A closing job cannot accept further data. */
  closing,
  /** The job finished successfully with its model state persisted. The job must be opened before it can accept further data. */
  closed,
  /** The job is available to receive and process data. */
  opened,
  /**
   * The job did not finish successfully due to an error.
   * This situation can occur due to invalid input data, a fatal error occurring during the analysis, or an external interaction such as the process being killed by the Linux out of memory (OOM) killer.
   * If the job had irrevocably failed, it must be force closed and then deleted.
   * If the datafeed can be corrected, the job can be closed and then re-opened.
   */
  failed,
  /** The job open action is in progress and has not yet completed. */
  opening
}

export class JobStatistics {
  avg: double
  max: double
  min: double
  total: double
}

export class Job {
  /**
   * Advanced configuration option.
   * Specifies whether this job can open when there is insufficient machine learning node capacity for it to be immediately assigned to a node.
   */
  allow_lazy_open: boolean
  /**
   * The analysis configuration, which specifies how to analyze the data.
   * After you create a job, you cannot change the analysis configuration; all the properties are informational.
   */
  analysis_config: AnalysisConfig
  /**
   * Limits can be applied for the resources required to hold the mathematical models in memory.
   * These limits are approximate and can be set per job.
   * They do not control the memory used by other processes, for example the Elasticsearch Java processes.
   */
  analysis_limits?: AnalysisLimits
  /**
   * Advanced configuration option.
   * The time between each periodic persistence of the model.
   * The default value is a randomized value between 3 to 4 hours, which avoids all jobs persisting at exactly the same time.
   * The smallest allowed value is 1 hour.
   */
  background_persist_interval?: Duration
  blocked?: JobBlocked
  create_time?: DateTime
  /**
   * Advanced configuration option.
   * Contains custom metadata about the job.
   */
  custom_settings?: CustomSettings
  /**
   * Advanced configuration option, which affects the automatic removal of old model snapshots for this job.
   * It specifies a period of time (in days) after which only the first snapshot per day is retained.
   * This period is relative to the timestamp of the most recent snapshot for this job.
   * Valid values range from 0 to `model_snapshot_retention_days`.
   * @server_default 1
   */
  daily_model_snapshot_retention_after_days?: long
  /**
   * The data description defines the format of the input data when you send data to the job by using the post data API.
   * Note that when configuring a datafeed, these properties are automatically set.
   * When data is received via the post data API, it is not stored in Elasticsearch.
   * Only the results for anomaly detection are retained.
   */
  data_description: DataDescription
  /**
   * The datafeed, which retrieves data from Elasticsearch for analysis by the job.
   * You can associate only one datafeed with each anomaly detection job.
   */
  datafeed_config?: Datafeed
  /**
   * Indicates that the process of deleting the job is in progress but not yet completed.
   * It is only reported when `true`.
   */
  deleting?: boolean
  /**
   * A description of the job.
   */
  description?: string
  /**
   * If the job closed or failed, this is the time the job finished, otherwise it is `null`.
   * This property is informational; you cannot change its value.
   */
  finished_time?: DateTime
  /**
   * A list of job groups.
   * A job can belong to no groups or many.
   */
  groups?: string[]
  /**
   * Identifier for the anomaly detection job.
   * This identifier can contain lowercase alphanumeric characters (a-z and 0-9), hyphens, and underscores.
   * It must start and end with alphanumeric characters.
   */
  job_id: Id
  /**
   * Reserved for future use, currently set to `anomaly_detector`.
   */
  job_type?: string
  /**
   * The machine learning configuration version number at which the the job was created.
   */
  job_version?: VersionString
  /**
   * This advanced configuration option stores model information along with the results.
   * It provides a more detailed view into anomaly detection.
   * Model plot provides a simplified and indicative view of the model and its bounds.
   */
  model_plot_config?: ModelPlotConfig
  model_snapshot_id?: Id
  /**
   * Advanced configuration option, which affects the automatic removal of old model snapshots for this job.
   * It specifies the maximum period of time (in days) that snapshots are retained.
   * This period is relative to the timestamp of the most recent snapshot for this job.
   * By default, snapshots ten days older than the newest snapshot are deleted.
   */
  model_snapshot_retention_days: long
  /**
   * Advanced configuration option.
   * The period over which adjustments to the score are applied, as new data is seen.
   * The default value is the longer of 30 days or 100 `bucket_spans`.
   */
  renormalization_window_days?: long
  /**
   * A text string that affects the name of the machine learning results index.
   * The default value is `shared`, which generates an index named `.ml-anomalies-shared`.
   */
  results_index_name: IndexName
  /**
   * Advanced configuration option.
   * The period of time (in days) that results are retained.
   * Age is calculated relative to the timestamp of the latest bucket result.
   * If this property has a non-null value, once per day at 00:30 (server time), results that are the specified number of days older than the latest bucket result are deleted from Elasticsearch.
   * The default value is null, which means all results are retained.
   * Annotations generated by the system also count as results for retention purposes; they are deleted after the same number of days as results.
   * Annotations added by users are retained forever.
   */
  results_retention_days?: long
}

export class JobConfig {
  /**
   * Advanced configuration option. Specifies whether this job can open when there is insufficient machine learning node capacity for it to be immediately assigned to a node.
   * @server_default false
   * @doc_id ml-put-job
   */
  allow_lazy_open?: boolean
  /**
   * The analysis configuration, which specifies how to analyze the data.
   * After you create a job, you cannot change the analysis configuration; all the properties are informational.
   */
  analysis_config: AnalysisConfig
  /**
   * Limits can be applied for the resources required to hold the mathematical models in memory.
   * These limits are approximate and can be set per job.
   * They do not control the memory used by other processes, for example the Elasticsearch Java processes.
   */
  analysis_limits?: AnalysisLimits
  /**
   * Advanced configuration option.
   * The time between each periodic persistence of the model.
   * The default value is a randomized value between 3 to 4 hours, which avoids all jobs persisting at exactly the same time.
   * The smallest allowed value is 1 hour.
   */
  background_persist_interval?: Duration
  /**
   * Advanced configuration option.
   * Contains custom metadata about the job.
   */
  custom_settings?: CustomSettings
  /**
   * Advanced configuration option, which affects the automatic removal of old model snapshots for this job.
   * It specifies a period of time (in days) after which only the first snapshot per day is retained.
   * This period is relative to the timestamp of the most recent snapshot for this job.
   * @server_default 1
   */
  daily_model_snapshot_retention_after_days?: long
  /**
   * The data description defines the format of the input data when you send data to the job by using the post data API.
   * Note that when configure a datafeed, these properties are automatically set.
   */
  data_description: DataDescription
  /**
   * The datafeed, which retrieves data from Elasticsearch for analysis by the job.
   * You can associate only one datafeed with each anomaly detection job.
   */
  datafeed_config?: DatafeedConfig
  /**
   * A description of the job.
   */
  description?: string
  /**
   * A list of job groups. A job can belong to no groups or many.
   */
  groups?: string[]
  /**
   * Identifier for the anomaly detection job.
   * This identifier can contain lowercase alphanumeric characters (a-z and 0-9), hyphens, and underscores.
   * It must start and end with alphanumeric characters.
   */
  job_id?: Id
  /**
   * Reserved for future use, currently set to `anomaly_detector`.
   */
  job_type?: string
  /**
   * This advanced configuration option stores model information along with the results.
   * It provides a more detailed view into anomaly detection.
   * Model plot provides a simplified and indicative view of the model and its bounds.
   */
  model_plot_config?: ModelPlotConfig
  /**
   * Advanced configuration option, which affects the automatic removal of old model snapshots for this job.
   * It specifies the maximum period of time (in days) that snapshots are retained.
   * This period is relative to the timestamp of the most recent snapshot for this job.
   * The default value is `10`, which means snapshots ten days older than the newest snapshot are deleted.
   * @server_default 10
   */
  model_snapshot_retention_days?: long
  /**
   * Advanced configuration option.
   * The period over which adjustments to the score are applied, as new data is seen.
   * The default value is the longer of 30 days or 100 `bucket_spans`.
   */
  renormalization_window_days?: long
  /**
   * A text string that affects the name of the machine learning results index.
   * The default value is `shared`, which generates an index named `.ml-anomalies-shared`.
   * @server_default shared
   */
  results_index_name?: IndexName
  /**
   * Advanced configuration option.
   * The period of time (in days) that results are retained.
   * Age is calculated relative to the timestamp of the latest bucket result.
   * If this property has a non-null value, once per day at 00:30 (server time), results that are the specified number of days older than the latest bucket result are deleted from Elasticsearch.
   * The default value is null, which means all results are retained.
   * Annotations generated by the system also count as results for retention purposes; they are deleted after the same number of days as results.
   * Annotations added by users are retained forever.
   */
  results_retention_days?: long
}
export class JobStats {
  /**
   * For open anomaly detection jobs only, contains messages relating to the selection of a node to run the job.
   */
  assignment_explanation?: string
  /**
   * An object that describes the quantity of input to the job and any related error counts.
   * The `data_count` values are cumulative for the lifetime of a job.
   * If a model snapshot is reverted or old results are deleted, the job counts are not reset.
   */
  data_counts: DataCounts
  /**
   * An object that provides statistical information about forecasts belonging to this job.
   * Some statistics are omitted if no forecasts have been made.
   */
  forecasts_stats: JobForecastStatistics
  /**
   * Identifier for the anomaly detection job.
   */
  job_id: string
  /**
   * An object that provides information about the size and contents of the model.
   */
  model_size_stats: ModelSizeStats
  /**
   * Contains properties for the node that runs the job.
   * This information is available only for open jobs.
   * @availability stack
   */
  node?: DiscoveryNodeCompact
  /**
   * For open jobs only, the elapsed time for which the job has been open.
   */
  open_time?: DateTime
  /**
   * The status of the anomaly detection job, which can be one of the following values: `closed`, `closing`, `failed`, `opened`, `opening`.
   */
  state: JobState
  /**
   * An object that provides statistical information about timing aspect of this job.
   */
  timing_stats: JobTimingStats
  /**
   * Indicates that the process of deleting the job is in progress but not yet completed. It is only reported when `true`.
   */
  deleting?: boolean
}

export class JobTimingStats {
  average_bucket_processing_time_ms?: DurationValue<UnitFloatMillis>
  bucket_count: long
  exponential_average_bucket_processing_time_ms?: DurationValue<UnitFloatMillis>
  exponential_average_bucket_processing_time_per_hour_ms: DurationValue<UnitFloatMillis>
  job_id: Id
  total_bucket_processing_time_ms: DurationValue<UnitFloatMillis>
  maximum_bucket_processing_time_ms?: DurationValue<UnitFloatMillis>
  minimum_bucket_processing_time_ms?: DurationValue<UnitFloatMillis>
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
  delete,
  reset,
  revert
}
