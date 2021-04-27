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

import { UserDefinedValue } from '@spec_utils/UserDefinedValue'
import { ByteSize, Field, IndexName, Indices } from '@_types/common'
import { RuntimeFields } from '@_types/mapping/runtime_fields/RuntimeFields'
import { double, integer, Percentage } from '@_types/Numeric'
import { QueryContainer } from '@_types/query_dsl/abstractions/container/QueryContainer'

export class DataFrameAnalyticsSource {
  index: Indices
  query?: QueryContainer
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
  index: IndexName
  results_field: Field
}

/** @variants container */
export class DataFrameAnalysisContainer {
  outlier_detection?: DataFrameAnalysisOutlierDetection
  regression?: DataFrameAnalysisRegression
  classification?: DataFrameAnalysisClassification
}

export class DataFrameAnalysisOutlierDetection {
  n_neighbors?: integer
  method?: string
  feature_influence_threshold?: double
  compute_feature_influence: boolean
  outlier_fraction: double
  standardization_enabled: boolean
}

export class DataFrameAnalysis {
  alpha?: double
  lambda?: double
  gamma?: double
  eta?: double
  eta_growth_rate_per_tree?: double
  feature_bag_fraction?: double
  max_trees?: integer
  soft_tree_depth_limit?: integer
  soft_tree_depth_tolerance?: double
  downsample_factor?: double
  max_optimization_rounds_per_hyperparameter?: integer
}

export class DataFrameAnalysisRegression extends DataFrameAnalysis {
  dependent_variable: string
  prediction_field_name: Field
  training_percent: Percentage
  randomize_seed: double
  loss_function: string
  loss_function_parameter?: double
  early_stopping_enabled: boolean
  feature_processors?: UserDefinedValue[]
}

export class DataFrameAnalysisClassification extends DataFrameAnalysis {
  dependent_variable: string
  class_assignment_objective: string
  prediction_field_name: Field
  training_percent: Percentage
  randomize_seed: double
  num_top_classes: integer
  early_stopping_enabled: boolean
}

export class DataFrameAnalysisAnalyzedFields {
  includes: string[]
  excludes: string[]
}
