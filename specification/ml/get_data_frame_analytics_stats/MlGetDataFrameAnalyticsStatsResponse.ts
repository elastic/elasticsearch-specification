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

import { ResponseBase } from '@_types/Base'
import { Id } from '@_types/common'
import { NodeAttributes } from '@nodes/_types/NodeAttributes'
import { double, integer, long } from '@_types/Numeric'
import { DataFrameState } from '@ml/_types/DataFrameState'
import { DateString } from '@_types/Time'
import { DataFrameAnalysisClassification } from '@ml/_types/DataFrameAnalytics'

export class Response extends ResponseBase {
  count: integer
  /** An array of objects that contain usage information for data frame analytics jobs, which are sorted by the id value in ascending order. */
  data_frame_analytics: DataFrameAnalyticsStatsItem[]
}

export class DataFrameAnalyticsStatsItem {
  /** An object containing information about the analysis job. */
  analysis_stats?: DataFrameAnalyticsStatsContainer
  /** For running jobs only, contains messages relating to the selection of a node to run the job. */
  assignment_explanation?: string
  /** An object that provides counts for the quantity of documents skipped, used in training, or available for testing. */
  data_counts: DataFrameAnalyticsStatsDataCounts
  /** The unique identifier of the data frame analytics job. */
  id: Id
  /** An object describing memory usage of the analytics. It is present only after the job is started and memory usage is reported. */
  memory_usage: DataFrameAnalyticsStatsMemoryUsage
  /** Contains properties for the node that runs the job. This information is available only for running jobs. */
  node?: NodeAttributes
  /** The progress report of the data frame analytics job by phase. */
  progress: DataFrameAnalyticsStatsProgress[]
  /** The status of the data frame analytics job, which can be one of the following values: failed, started, starting, stopping, stopped. */
  state: DataFrameState
}

export class DataFrameAnalyticsStatsProgress {
  /** Defines the phase of the data frame analytics job. */
  phase: string
  /** The progress that the data frame analytics job has made expressed in percentage. */
  progress_percent: integer
}

export class DataFrameAnalyticsStatsMemoryUsage {
  /** This value is present when the status is hard_limit and it is a new estimate of how much memory the job needs. */
  memory_reestimate_bytes?: long
  /** The number of bytes used at the highest peak of memory usage. */
  peak_usage_bytes: long
  /** The memory usage status. */
  status: string
  /** The timestamp when memory usage was calculated. */
  timestamp?: DateString
}

export class DataFrameAnalyticsStatsDataCounts {
  /** The number of documents that are skipped during the analysis because they contained values that are not supported by the analysis. For example, outlier detection does not support missing fields so it skips documents with missing fields. Likewise, all types of analysis skip documents that contain arrays with more than one element. */
  skipped_docs_count: integer
  /** The number of documents that are not used for training the model and can be used for testing. */
  test_docs_count: integer
  /** The number of documents that are used for training the model. */
  training_docs_count: integer
}

/** @variants container */
export class DataFrameAnalyticsStatsContainer {
  /** An object containing information about the classification analysis job. */
  classification_stats?: DataFrameAnalyticsStatsHyperparameters
  /** An object containing information about the outlier detection job. */
  outlier_detection_stats?: DataFrameAnalyticsStatsOutlierDetection
  /** An object containing information about the regression analysis. */
  regression_stats?: DataFrameAnalyticsStatsHyperparameters
}

export class DataFrameAnalyticsStatsHyperparameters {
  hyperparameters: Hyperparameters
  /** The number of iterations on the analysis. */
  iteration: integer
  timestamp: DateString
  timing_stats: TimingStats
  validation_loss: ValidationLoss
}

export class DataFrameAnalyticsStatsOutlierDetection {
  parameters: OutlierDetectionParameters
  timestamp: DateString
  timing_stats: TimingStats
}

export class Hyperparameters {
  alpha?: double
  lambda?: double
  gamma?: double
  eta?: double
  eta_growth_rate_per_tree?: double
  feature_bag_fraction?: double
  downsample_factor?: double
  max_attempts_to_add_tree?: integer
  max_optimization_rounds_per_hyperparameter?: integer
  max_trees?: integer
  num_folds?: integer
  num_splits_per_feature?: integer
  soft_tree_depth_limit?: integer
  soft_tree_depth_tolerance?: double
}

export class OutlierDetectionParameters {
  compute_feature_influence?: boolean
  feature_influence_threshold?: double
  method?: string
  n_neighbors?: integer
  outlier_fraction?: double
  standardization_enabled?: boolean
}

export class TimingStats {
  /** Runtime of the analysis in milliseconds. */
  elapsed_time: integer
  /** Runtime of the latest iteration of the analysis in milliseconds. */
  iteration_time?: integer
}

export class ValidationLoss {
  /** Validation loss values for every added decision tree during the forest growing procedure. */
  fold_values: string[]
  /** The type of the loss metric. For example, binomial_logistic. */
  loss_type: string
}
