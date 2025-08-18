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

import {
  Field,
  Id,
  IndexName,
  Indices,
  Metadata,
  Name,
  VersionString
} from '@_types/common'
import { RuntimeFields } from '@_types/mapping/RuntimeFields'
import { NodeAttributes } from '@_types/Node'
import { double, integer, long, Percentage } from '@_types/Numeric'
import { QueryContainer } from '@_types/query_dsl/abstractions'
import { DurationValue, EpochTime, UnitMillis } from '@_types/Time'
import { DataframeAnalyticsAuthorization } from '@ml/_types/Authorization'
import { Dictionary } from '@spec_utils/Dictionary'
import { UserDefinedValue } from '@spec_utils/UserDefinedValue'
import { DataframeState } from './Dataframe'

export class DataframeAnalyticsSource {
  /** Index or indices on which to perform the analysis. It can be a single index or index pattern as well as an array of indices or patterns. NOTE: If your source indices contain documents with the same IDs, only the document that is indexed last appears in the destination index.*/
  index: Indices
  /**
   * The Elasticsearch query domain-specific language (DSL). This value corresponds to the query object in an Elasticsearch search POST body. All the options that are supported by Elasticsearch can be used, as this object is passed verbatim to Elasticsearch. By default, this property has the following value: {"match_all": {}}.
   * @doc_id query-dsl
   */
  query?: QueryContainer
  /**
   * Definitions of runtime fields that will become part of the mapping of the destination index.
   */
  runtime_mappings?: RuntimeFields
  /** Specify `includes` and/or `excludes patterns to select which fields will be present in the destination. Fields that are excluded cannot be included in the analysis. */
  _source?: DataframeAnalysisAnalyzedFields
}

export class DataframeAnalyticsFieldSelection {
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

export class DataframeAnalyticsMemoryEstimation {
  /** Estimated memory usage under the assumption that overflowing to disk is allowed during data frame analytics. expected_memory_with_disk is usually smaller than expected_memory_without_disk as using disk allows to limit the main memory needed to perform data frame analytics. */
  expected_memory_with_disk: string
  /** Estimated memory usage under the assumption that the whole data frame analytics should happen in memory (i.e. without overflowing to disk). */
  expected_memory_without_disk: string
}

export class DataframeAnalyticsDestination {
  /** Defines the destination index to store the results of the data frame analytics job. */
  index: IndexName
  /** Defines the name of the field in which to store the results of the analysis. Defaults to `ml`. */
  results_field?: Field
}

/** @variants container */
export class DataframeAnalysisContainer {
  /**
   * The configuration information necessary to perform classification.
   * @doc_id ml-classification
   */
  classification?: DataframeAnalysisClassification
  /**
   * The configuration information necessary to perform outlier detection. NOTE: Advanced parameters are for fine-tuning classification analysis. They are set automatically by hyperparameter optimization to give the minimum validation error. It is highly recommended to use the default values unless you fully understand the function of these parameters.
   * @doc_id ml-classification
   */
  outlier_detection?: DataframeAnalysisOutlierDetection
  /**
   * The configuration information necessary to perform regression. NOTE: Advanced parameters are for fine-tuning regression analysis. They are set automatically by hyperparameter optimization to give the minimum validation error. It is highly recommended to use the default values unless you fully understand the function of these parameters.
   * @doc_id ml-regression
   */
  regression?: DataframeAnalysisRegression
}

export class DataframeAnalysisOutlierDetection {
  /**
   * Specifies whether the feature influence calculation is enabled.
   * @server_default true
   */
  compute_feature_influence?: boolean
  /**
   * The minimum outlier score that a document needs to have in order to calculate its feature influence score. Value range: 0-1.
   * @server_default 0.1
   */
  feature_influence_threshold?: double
  /**
   * The method that outlier detection uses. Available methods are `lof`, `ldof`, `distance_kth_nn`, `distance_knn`, and `ensemble`. The default value is ensemble, which means that outlier detection uses an ensemble of different methods and normalises and combines their individual outlier scores to obtain the overall outlier score.
   * @server_default ensemble
   */
  method?: string
  /**
   * Defines the value for how many nearest neighbors each method of outlier detection uses to calculate its outlier score. When the value is not set, different values are used for different ensemble members. This default behavior helps improve the diversity in the ensemble; only override it if you are confident that the value you choose is appropriate for the data set.
   */
  n_neighbors?: integer
  /**
   * The proportion of the data set that is assumed to be outlying prior to outlier detection. For example, 0.05 means it is assumed that 5% of values are real outliers and 95% are inliers.
   */
  outlier_fraction?: double
  /**
   * If true, the following operation is performed on the columns before computing outlier scores: `(x_i - mean(x_i)) / sd(x_i)`.
   * @server_default true
   */
  standardization_enabled?: boolean
}

export class DataframeAnalysis {
  /**
   * Advanced configuration option. Machine learning uses loss guided tree growing, which means that the decision trees grow where the regularized loss decreases most quickly. This parameter affects loss calculations by acting as a multiplier of the tree depth. Higher alpha values result in shallower trees and faster training times. By default, this value is calculated during hyperparameter optimization. It must be greater than or equal to zero.
   */
  alpha?: double
  /**
   * Defines which field of the document is to be predicted. It must match one of the fields in the index being used to train. If this field is missing from a document, then that document will not be used for training, but a prediction with the trained model will be generated for it. It is also known as continuous target variable.
   * For classification analysis, the data type of the field must be numeric (`integer`, `short`, `long`, `byte`), categorical (`ip` or `keyword`), or `boolean`. There must be no more than 30 different values in this field.
   * For regression analysis, the data type of the field must be numeric.
   */
  dependent_variable: string
  /**
   * Advanced configuration option. Controls the fraction of data that is used to compute the derivatives of the loss function for tree training. A small value results in the use of a small fraction of the data. If this value is set to be less than 1, accuracy typically improves. However, too small a value may result in poor convergence for the ensemble and so require more trees. By default, this value is calculated during hyperparameter optimization. It must be greater than zero and less than or equal to 1.
   */
  downsample_factor?: double
  /**
   * Advanced configuration option. Specifies whether the training process should finish if it is not finding any better performing models. If disabled, the training process can take significantly longer and the chance of finding a better performing model is unremarkable.
   * @server_default true
   */
  early_stopping_enabled?: boolean
  /**
   * Advanced configuration option. The shrinkage applied to the weights. Smaller values result in larger forests which have a better generalization error. However, larger forests cause slower training. By default, this value is calculated during hyperparameter optimization. It must be a value between 0.001 and 1.
   */
  eta?: double
  /**
   * Advanced configuration option. Specifies the rate at which `eta` increases for each new tree that is added to the forest. For example, a rate of 1.05 increases `eta` by 5% for each extra tree. By default, this value is calculated during hyperparameter optimization. It must be between 0.5 and 2.
   */
  eta_growth_rate_per_tree?: double
  /**
   * Advanced configuration option. Defines the fraction of features that will be used when selecting a random bag for each candidate split. By default, this value is calculated during hyperparameter optimization.
   */
  feature_bag_fraction?: double
  /**
   * Advanced configuration option. A collection of feature preprocessors that modify one or more included fields. The analysis uses the resulting one or more features instead of the original document field. However, these features are ephemeral; they are not stored in the destination index. Multiple `feature_processors` entries can refer to the same document fields. Automatic categorical feature encoding still occurs for the fields that are unprocessed by a custom processor or that have categorical values. Use this property only if you want to override the automatic feature encoding of the specified fields.
   */
  feature_processors?: DataframeAnalysisFeatureProcessor[]
  /**
   * Advanced configuration option. Regularization parameter to prevent overfitting on the training data set. Multiplies a linear penalty associated with the size of individual trees in the forest. A high gamma value causes training to prefer small trees. A small gamma value results in larger individual trees and slower training. By default, this value is calculated during hyperparameter optimization. It must be a nonnegative value.
   */
  gamma?: double
  /**
   * Advanced configuration option. Regularization parameter to prevent overfitting on the training data set. Multiplies an L2 regularization term which applies to leaf weights of the individual trees in the forest. A high lambda value causes training to favor small leaf weights. This behavior makes the prediction function smoother at the expense of potentially not being able to capture relevant relationships between the features and the dependent variable. A small lambda value results in large individual trees and slower training. By default, this value is calculated during hyperparameter optimization. It must be a nonnegative value.
   */
  lambda?: double
  /**
   * Advanced configuration option. A multiplier responsible for determining the maximum number of hyperparameter optimization steps in the Bayesian optimization procedure. The maximum number of steps is determined based on the number of undefined hyperparameters times the maximum optimization rounds per hyperparameter. By default, this value is calculated during hyperparameter optimization.
   */
  max_optimization_rounds_per_hyperparameter?: integer
  /**
   * Advanced configuration option. Defines the maximum number of decision trees in the forest. The maximum value is 2000. By default, this value is calculated during hyperparameter optimization.
   * @aliases maximum_number_trees
   */
  max_trees?: integer
  /**
   * Advanced configuration option. Specifies the maximum number of feature importance values per document to return. By default, no feature importance calculation occurs.
   * @server_default 0
   */
  num_top_feature_importance_values?: integer
  /**
   * Defines the name of the prediction field in the results. Defaults to `<dependent_variable>_prediction`.
   */
  prediction_field_name?: Field
  /**
   * Defines the seed for the random generator that is used to pick training data. By default, it is randomly generated. Set it to a specific value to use the same training data each time you start a job (assuming other related parameters such as `source` and `analyzed_fields` are the same).
   */
  randomize_seed?: double
  /**
   * Advanced configuration option. Machine learning uses loss guided tree growing, which means that the decision trees grow where the regularized loss decreases most quickly. This soft limit combines with the `soft_tree_depth_tolerance` to penalize trees that exceed the specified depth; the regularized loss increases quickly beyond this depth. By default, this value is calculated during hyperparameter optimization. It must be greater than or equal to 0.
   */
  soft_tree_depth_limit?: integer
  /**
   * Advanced configuration option. This option controls how quickly the regularized loss increases when the tree depth exceeds `soft_tree_depth_limit`. By default, this value is calculated during hyperparameter optimization. It must be greater than or equal to 0.01.
   */
  soft_tree_depth_tolerance?: double
  /**
   * Defines what percentage of the eligible documents that will be used for training. Documents that are ignored by the analysis (for example those that contain arrays with more than one value) won’t be included in the calculation for used percentage.
   * @server_default 100
   */
  training_percent?: Percentage
}

export class DataframeAnalysisRegression extends DataframeAnalysis {
  /**
   * The loss function used during regression. Available options are `mse` (mean squared error), `msle` (mean squared logarithmic error), `huber` (Pseudo-Huber loss).
   * @server_default mse
   */
  loss_function?: string
  /**
   * A positive number that is used as a parameter to the `loss_function`.
   */
  loss_function_parameter?: double
}

export class DataframeAnalysisClassification extends DataframeAnalysis {
  /*
   * Defines the objective to optimize when assigning class labels: `maximize_accuracy` or `maximize_minimum_recall`. When maximizing accuracy, class labels are chosen to maximize the number of correct predictions. When maximizing minimum recall, labels are chosen to maximize the minimum recall for any class. Defaults to `maximize_minimum_recall`.*/
  class_assignment_objective?: string
  /**
   * Defines the number of categories for which the predicted probabilities are reported. It must be non-negative or -1. If it is -1 or greater than the total number of categories, probabilities are reported for all categories; if you have a large number of categories, there could be a significant effect on the size of your destination index. NOTE: To use the AUC ROC evaluation method, `num_top_classes` must be set to -1 or a value greater than or equal to the total number of categories.
   * @server_default 2
   */
  num_top_classes?: integer
}

/** @shortcut_property includes */
export class DataframeAnalysisAnalyzedFields {
  /** An array of strings that defines the fields that will be excluded from the analysis. You do not need to add fields with unsupported data types to excludes, these fields are excluded from the analysis automatically. */
  includes: string[]
  /** An array of strings that defines the fields that will be included in the analysis. */
  excludes: string[]
}

/** @variants container */
export class DataframeAnalysisFeatureProcessor {
  /** The configuration information necessary to perform frequency encoding. */
  frequency_encoding?: DataframeAnalysisFeatureProcessorFrequencyEncoding
  /** The configuration information necessary to perform multi encoding. It allows multiple processors to be changed together. This way the output of a processor can then be passed to another as an input. */
  multi_encoding?: DataframeAnalysisFeatureProcessorMultiEncoding
  /** The configuration information necessary to perform n-gram encoding. Features created by this encoder have the following name format: <feature_prefix>.<ngram><string position>. For example, if the feature_prefix is f, the feature name for the second unigram in a string is f.11. */
  n_gram_encoding?: DataframeAnalysisFeatureProcessorNGramEncoding
  /** The configuration information necessary to perform one hot encoding. */
  one_hot_encoding?: DataframeAnalysisFeatureProcessorOneHotEncoding
  /** The configuration information necessary to perform target mean encoding. */
  target_mean_encoding?: DataframeAnalysisFeatureProcessorTargetMeanEncoding
}

export class DataframeAnalysisFeatureProcessorFrequencyEncoding {
  /** The resulting feature name. */
  feature_name: Name
  /**  */
  field: Field
  /** The resulting frequency map for the field value. If the field value is missing from the frequency_map, the resulting value is 0. */
  frequency_map: Dictionary<string, double>
}

export class DataframeAnalysisFeatureProcessorMultiEncoding {
  /** The ordered array of custom processors to execute. Must be more than 1. */
  processors: integer[]
}

export class DataframeAnalysisFeatureProcessorNGramEncoding {
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

export class DataframeAnalysisFeatureProcessorOneHotEncoding {
  /** The name of the field to encode. */
  field: Field
  /** The one hot map mapping the field value with the column name. */
  hot_map: string
}

export class DataframeAnalysisFeatureProcessorTargetMeanEncoding {
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
  allow_lazy_start?: boolean
  analysis: DataframeAnalysisContainer
  analyzed_fields?: DataframeAnalysisAnalyzedFields
  /**
   * The security privileges that the job uses to run its queries. If Elastic Stack security features were disabled at the time of the most recent update to the job, this property is omitted.
   */
  authorization?: DataframeAnalyticsAuthorization
  create_time?: EpochTime<UnitMillis>
  description?: string
  dest: DataframeAnalyticsDestination
  id: Id
  max_num_threads?: integer
  model_memory_limit?: string
  source: DataframeAnalyticsSource
  version?: VersionString
  _meta?: Metadata
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
  /**
   * Contains properties for the node that runs the job. This information is available only for running jobs.
   * @availability stack
   */
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
  timestamp?: EpochTime<UnitMillis>
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
  /**
   * An object containing the parameters of the classification analysis job.
   */
  hyperparameters: Hyperparameters
  /** The number of iterations on the analysis. */
  iteration: integer
  /**
   * The timestamp when the statistics were reported in milliseconds since the epoch.
   */
  timestamp: EpochTime<UnitMillis>
  /**
   * An object containing time statistics about the data frame analytics job.
   */
  timing_stats: TimingStats
  /**
   * An object containing information about validation loss.
   */
  validation_loss: ValidationLoss
}

export class DataframeAnalyticsStatsOutlierDetection {
  /**
   * The list of job parameters specified by the user or determined by algorithmic heuristics.
   */
  parameters: OutlierDetectionParameters
  /**
   * The timestamp when the statistics were reported in milliseconds since the epoch.
   */
  timestamp: EpochTime<UnitMillis>
  /**
   * An object containing time statistics about the data frame analytics job.
   */
  timing_stats: TimingStats
}

export class Hyperparameters {
  /**
   * Advanced configuration option.
   * Machine learning uses loss guided tree growing, which means that the decision trees grow where the regularized loss decreases most quickly.
   * This parameter affects loss calculations by acting as a multiplier of the tree depth.
   * Higher alpha values result in shallower trees and faster training times.
   * By default, this value is calculated during hyperparameter optimization.
   * It must be greater than or equal to zero.
   */
  alpha?: double
  /**
   * Advanced configuration option.
   * Regularization parameter to prevent overfitting on the training data set.
   * Multiplies an L2 regularization term which applies to leaf weights of the individual trees in the forest.
   * A high lambda value causes training to favor small leaf weights.
   * This behavior makes the prediction function smoother at the expense of potentially not being able to capture relevant relationships between the features and the dependent variable.
   * A small lambda value results in large individual trees and slower training.
   * By default, this value is calculated during hyperparameter optimization.
   * It must be a nonnegative value.
   */
  lambda?: double
  /**
   * Advanced configuration option.
   * Regularization parameter to prevent overfitting on the training data set.
   * Multiplies a linear penalty associated with the size of individual trees in the forest.
   * A high gamma value causes training to prefer small trees.
   * A small gamma value results in larger individual trees and slower training.
   * By default, this value is calculated during hyperparameter optimization.
   * It must be a nonnegative value.
   */
  gamma?: double
  /**
   * Advanced configuration option.
   * The shrinkage applied to the weights.
   * Smaller values result in larger forests which have a better generalization error.
   * However, larger forests cause slower training.
   * By default, this value is calculated during hyperparameter optimization.
   * It must be a value between `0.001` and `1`.
   */
  eta?: double
  /**
   * Advanced configuration option.
   * Specifies the rate at which `eta` increases for each new tree that is added to the forest.
   * For example, a rate of 1.05 increases `eta` by 5% for each extra tree.
   * By default, this value is calculated during hyperparameter optimization.
   * It must be between `0.5` and `2`.
   */
  eta_growth_rate_per_tree?: double
  /**
   * Advanced configuration option.
   * Defines the fraction of features that will be used when selecting a random bag for each candidate split.
   * By default, this value is calculated during hyperparameter optimization.
   */
  feature_bag_fraction?: double
  /**
   * Advanced configuration option.
   * Controls the fraction of data that is used to compute the derivatives of the loss function for tree training.
   * A small value results in the use of a small fraction of the data.
   * If this value is set to be less than 1, accuracy typically improves.
   * However, too small a value may result in poor convergence for the ensemble and so require more trees.
   * By default, this value is calculated during hyperparameter optimization.
   * It must be greater than zero and less than or equal to 1.
   */
  downsample_factor?: double
  /**
   * If the algorithm fails to determine a non-trivial tree (more than a single leaf), this parameter determines how many of such consecutive failures are tolerated.
   * Once the number of attempts exceeds the threshold, the forest training stops.
   */
  max_attempts_to_add_tree?: integer
  /**
   * Advanced configuration option.
   * A multiplier responsible for determining the maximum number of hyperparameter optimization steps in the Bayesian optimization procedure.
   * The maximum number of steps is determined based on the number of undefined hyperparameters times the maximum optimization rounds per hyperparameter.
   * By default, this value is calculated during hyperparameter optimization.
   */
  max_optimization_rounds_per_hyperparameter?: integer
  /**
   * Advanced configuration option.
   * Defines the maximum number of decision trees in the forest.
   * The maximum value is 2000.
   * By default, this value is calculated during hyperparameter optimization.
   */
  max_trees?: integer
  /**
   * The maximum number of folds for the cross-validation procedure.
   */
  num_folds?: integer
  /**
   * Determines the maximum number of splits for every feature that can occur in a decision tree when the tree is trained.
   */
  num_splits_per_feature?: integer
  /**
   * Advanced configuration option.
   * Machine learning uses loss guided tree growing, which means that the decision trees grow where the regularized loss decreases most quickly.
   * This soft limit combines with the `soft_tree_depth_tolerance` to penalize trees that exceed the specified depth; the regularized loss increases quickly beyond this depth.
   * By default, this value is calculated during hyperparameter optimization.
   * It must be greater than or equal to 0.
   */
  soft_tree_depth_limit?: integer
  /**
   * Advanced configuration option.
   * This option controls how quickly the regularized loss increases when the tree depth exceeds `soft_tree_depth_limit`.
   * By default, this value is calculated during hyperparameter optimization.
   * It must be greater than or equal to 0.01.
   */
  soft_tree_depth_tolerance?: double
}

export class OutlierDetectionParameters {
  /**
   * Specifies whether the feature influence calculation is enabled.
   * @server_default true
   */
  compute_feature_influence?: boolean
  /**
   * The minimum outlier score that a document needs to have in order to calculate its feature influence score.
   * Value range: 0-1
   * @server_default 0.1
   */
  feature_influence_threshold?: double
  /**
   * The method that outlier detection uses.
   * Available methods are `lof`, `ldof`, `distance_kth_nn`, `distance_knn`, and `ensemble`.
   * The default value is ensemble, which means that outlier detection uses an ensemble of different methods and normalises and combines their individual outlier scores to obtain the overall outlier score.
   */
  method?: string
  /**
   * Defines the value for how many nearest neighbors each method of outlier detection uses to calculate its outlier score.
   * When the value is not set, different values are used for different ensemble members.
   * This default behavior helps improve the diversity in the ensemble; only override it if you are confident that the value you choose is appropriate for the data set.
   */
  n_neighbors?: integer
  /**
   * The proportion of the data set that is assumed to be outlying prior to outlier detection.
   * For example, 0.05 means it is assumed that 5% of values are real outliers and 95% are inliers.
   */
  outlier_fraction?: double
  /**
   * If `true`, the following operation is performed on the columns before computing outlier scores: (x_i - mean(x_i)) / sd(x_i).
   * @server_default true
   */
  standardization_enabled?: boolean
}

export class TimingStats {
  /** Runtime of the analysis in milliseconds. */
  elapsed_time: DurationValue<UnitMillis>
  /** Runtime of the latest iteration of the analysis in milliseconds. */
  iteration_time?: DurationValue<UnitMillis>
}

export class ValidationLoss {
  /** Validation loss values for every added decision tree during the forest growing procedure. */
  fold_values: string[]
  /** The type of the loss metric. For example, binomial_logistic. */
  loss_type: string
}
