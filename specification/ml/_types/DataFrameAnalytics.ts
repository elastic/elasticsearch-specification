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
import { UserDefinedValue } from '@spec_utils/UserDefinedValue'
import {
  ByteSize,
  Field,
  Id,
  IndexName,
  Indices,
  Name,
  VersionString
} from '@_types/common'
import { RuntimeFields } from '@_types/mapping/RuntimeFields'
import { NodeAttributes } from '@_types/Node'
import { double, integer, long, Percentage } from '@_types/Numeric'
import { QueryContainer } from '@_types/query_dsl/abstractions'
import { DateString } from '@_types/Time'
import { DataframeState } from './Dataframe'

export class DataFrameAnalyticsSource {
  /** Index or indices on which to perform the analysis. It can be a single index or index pattern as well as an array of indices or patterns. */
  index: Indices
  /**
   * The Elasticsearch query domain-specific language (DSL). This value corresponds to the query object in an Elasticsearch search POST body. All the options that are supported by Elasticsearch can be used, as this object is passed verbatim to Elasticsearch. By default, this property has the following value: {"match_all": {}}.
   * @doc_url https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl.html
   */
  query?: QueryContainer
  /** Specify includes and/or excludes patterns to select which fields will be present in the destination. Fields that are excluded cannot be included in the analysis. */
  _source?: DataFrameAnalysisAnalyzedFields
  runtime_mappings?: RuntimeFields
}

export class DataFrameAnalyticsFieldSelection {
  /** Whether the field is selected to be included in the analysis. */
  is_included: boolean
  /** Whether the field is required. */
  is_required: boolean
  /** The feature type of this field for the analysis. May be categorical or numerical. */
  feature_type?: string
  /** The mapping types of the field. */
  mapping_types: string[]
  /** The field name. */
  name: Field
  /** The reason a field is not selected to be included in the analysis. */
  reason?: string
}

export class DataFrameAnalyticsMemoryEstimation {
  /** Estimated memory usage under the assumption that overflowing to disk is allowed during data frame analytics. expected_memory_with_disk is usually smaller than expected_memory_without_disk as using disk allows to limit the main memory needed to perform data frame analytics. */
  expected_memory_with_disk: ByteSize
  /** Estimated memory usage under the assumption that the whole data frame analytics should happen in memory (i.e. without overflowing to disk). */
  expected_memory_without_disk: ByteSize
}

export class DataFrameAnalyticsDestination {
  /** Defines the destination index to store the results of the data frame analytics job. */
  index: IndexName
  /** Defines the name of the field in which to store the results of the analysis. Defaults to ml. */
  results_field?: Field
}

/** @variants container */
export class DataFrameAnalysisContainer {
  /**
   * The configuration information necessary to perform outlier detection
   * @doc_url https://www.elastic.co/guide/en/machine-learning/current/dfa-classification.html
   */
  outlier_detection?: DataFrameAnalysisOutlierDetection
  /**
   * The configuration information necessary to perform regression.
   * @doc_url https://www.elastic.co/guide/en/machine-learning/current/dfa-regression.html
   */
  regression?: DataFrameAnalysisRegression
  /**
   * The configuration information necessary to perform classification.
   * @doc_url https://www.elastic.co/guide/en/machine-learning/current/dfa-classification.html
   */
  classification?: DataFrameAnalysisClassification
}

export class DataFrameAnalysisOutlierDetection {
  n_neighbors?: integer
  method?: string
  feature_influence_threshold?: double
  compute_feature_influence?: boolean
  outlier_fraction?: double
  standardization_enabled?: boolean
}

export class DataFrameAnalysis {
  dependent_variable: string
  prediction_field_name?: Field
  alpha?: double
  lambda?: double
  gamma?: double
  eta?: double
  eta_growth_rate_per_tree?: double
  feature_bag_fraction?: double
  /** @aliases maximum_number_trees */
  max_trees?: integer
  soft_tree_depth_limit?: integer
  soft_tree_depth_tolerance?: double
  downsample_factor?: double
  max_optimization_rounds_per_hyperparameter?: integer
  early_stopping_enabled?: boolean
  num_top_feature_importance_values?: integer
  feature_processors?: DataFrameAnalysisFeatureProcessor[]
  randomize_seed?: double
  training_percent?: Percentage
}

export class DataFrameAnalysisRegression extends DataFrameAnalysis {
  loss_function?: string
  loss_function_parameter?: double
}

export class DataFrameAnalysisClassification extends DataFrameAnalysis {
  class_assignment_objective?: string
  num_top_classes?: integer
}

export type DataFrameAnalysisAnalyzedFields =
  | string[]
  | DataFrameAnalysisAnalyzedFieldsIncludeExclude
export class DataFrameAnalysisAnalyzedFieldsIncludeExclude {
  /** An array of strings that defines the fields that will be excluded from the analysis. You do not need to add fields with unsupported data types to excludes, these fields are excluded from the analysis automatically. */
  includes: string[]
  /** An array of strings that defines the fields that will be included in the analysis. */
  excludes: string[]
}

/** @variants container */
export class DataFrameAnalysisFeatureProcessor {
  /** The configuration information necessary to perform frequency encoding. */
  frequency_encoding?: DataFrameAnalysisFeatureProcessorFrequencyEncoding
  /** The configuration information necessary to perform multi encoding. It allows multiple processors to be changed together. This way the output of a processor can then be passed to another as an input. */
  multi_encoding?: DataFrameAnalysisFeatureProcessorMultiEncoding
  /** The configuration information necessary to perform n-gram encoding. Features created by this encoder have the following name format: <feature_prefix>.<ngram><string position>. For example, if the feature_prefix is f, the feature name for the second unigram in a string is f.11. */
  n_gram_encoding?: DataFrameAnalysisFeatureProcessorNGramEncoding
  /** The configuration information necessary to perform one hot encoding. */
  one_hot_encoding?: DataFrameAnalysisFeatureProcessorOneHotEncoding
  /** The configuration information necessary to perform target mean encoding. */
  target_mean_encoding?: DataFrameAnalysisFeatureProcessorTargetMeanEncoding
}

export class DataFrameAnalysisFeatureProcessorFrequencyEncoding {
  /** The resulting feature name. */
  feature_name: Name
  /**  */
  field: Field
  /** The resulting frequency map for the field value. If the field value is missing from the frequency_map, the resulting value is 0. */
  frequency_map: Dictionary<string, double>
}

export class DataFrameAnalysisFeatureProcessorMultiEncoding {
  /** The ordered array of custom processors to execute. Must be more than 1. */
  processors: integer[]
}

export class DataFrameAnalysisFeatureProcessorNGramEncoding {
  /** The feature name prefix. Defaults to ngram_<start>_<length>. */
  feature_prefix?: string
  /** The name of the text field to encode. */
  field: Field
  /** Specifies the length of the n-gram substring. Defaults to 50. Must be greater than 0. */
  length?: integer
  /** Specifies which n-grams to gather. It’s an array of integer values where the minimum value is 1, and a maximum value is 5. */
  n_grams: integer[]
  /** Specifies the zero-indexed start of the n-gram substring. Negative values are allowed for encoding n-grams of string suffixes. Defaults to 0. */
  start?: integer
  custom?: boolean
}

export class DataFrameAnalysisFeatureProcessorOneHotEncoding {
  /** The name of the field to encode. */
  field: Field
  /** The one hot map mapping the field value with the column name. */
  hot_map: string
}

export class DataFrameAnalysisFeatureProcessorTargetMeanEncoding {
  /** The default value if field value is not found in the target_map. */
  default_value: integer
  /** The resulting feature name. */
  feature_name: Name
  /** The name of the field to encode. */
  field: Field
  /** The field value to target mean transition map. */
  target_map: Dictionary<string, UserDefinedValue>
}

export class DataframeAnalyticsSummary {
  id: Id
  source: DataFrameAnalyticsSource
  dest: DataFrameAnalyticsDestination
  analysis: DataFrameAnalysisContainer
  description?: string
  model_memory_limit?: ByteSize
  max_num_threads?: integer
  analyzed_fields?: DataFrameAnalysisAnalyzedFields
  allow_lazy_start?: boolean
  create_time?: long
  version?: VersionString
}

export class DataframeAnalytics {
  /** An object containing information about the analysis job. */
  analysis_stats?: DataframeAnalyticsStatsContainer
  /** For running jobs only, contains messages relating to the selection of a node to run the job. */
  assignment_explanation?: string
  /** An object that provides counts for the quantity of documents skipped, used in training, or available for testing. */
  data_counts: DataframeAnalyticsStatsDataCounts
  /** The unique identifier of the data frame analytics job. */
  id: Id
  /** An object describing memory usage of the analytics. It is present only after the job is started and memory usage is reported. */
  memory_usage: DataframeAnalyticsStatsMemoryUsage
  /** Contains properties for the node that runs the job. This information is available only for running jobs. */
  node?: NodeAttributes
  /** The progress report of the data frame analytics job by phase. */
  progress: DataframeAnalyticsStatsProgress[]
  /** The status of the data frame analytics job, which can be one of the following values: failed, started, starting, stopping, stopped. */
  state: DataframeState
}

export class DataframeAnalyticsStatsProgress {
  /** Defines the phase of the data frame analytics job. */
  phase: string
  /** The progress that the data frame analytics job has made expressed in percentage. */
  progress_percent: integer
}

export class DataframeAnalyticsStatsMemoryUsage {
  /** This value is present when the status is hard_limit and it is a new estimate of how much memory the job needs. */
  memory_reestimate_bytes?: long
  /** The number of bytes used at the highest peak of memory usage. */
  peak_usage_bytes: long
  /** The memory usage status. */
  status: string
  /** The timestamp when memory usage was calculated. */
  timestamp?: DateString
}

export class DataframeAnalyticsStatsDataCounts {
  /** The number of documents that are skipped during the analysis because they contained values that are not supported by the analysis. For example, outlier detection does not support missing fields so it skips documents with missing fields. Likewise, all types of analysis skip documents that contain arrays with more than one element. */
  skipped_docs_count: integer
  /** The number of documents that are not used for training the model and can be used for testing. */
  test_docs_count: integer
  /** The number of documents that are used for training the model. */
  training_docs_count: integer
}

/** @variants container */
export class DataframeAnalyticsStatsContainer {
  /** An object containing information about the classification analysis job. */
  classification_stats?: DataframeAnalyticsStatsHyperparameters
  /** An object containing information about the outlier detection job. */
  outlier_detection_stats?: DataframeAnalyticsStatsOutlierDetection
  /** An object containing information about the regression analysis. */
  regression_stats?: DataframeAnalyticsStatsHyperparameters
}

export class DataframeAnalyticsStatsHyperparameters {
  hyperparameters: Hyperparameters
  /** The number of iterations on the analysis. */
  iteration: integer
  timestamp: DateString
  timing_stats: TimingStats
  validation_loss: ValidationLoss
}

export class DataframeAnalyticsStatsOutlierDetection {
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
