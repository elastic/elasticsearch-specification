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
import { ByteSize, Field, IndexName, Indices, Name } from '@_types/common'
import { RuntimeFields } from '@_types/mapping/runtime_fields/RuntimeFields'
import { double, integer, Percentage } from '@_types/Numeric'
import { QueryContainer } from '@_types/query_dsl/abstractions/container/QueryContainer'

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

export class DataFrameAnalyticsSummary {
  stub: string
}
