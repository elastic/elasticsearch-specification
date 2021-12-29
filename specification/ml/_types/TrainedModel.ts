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
import { InferenceConfigContainer } from '@_types/aggregations/pipeline'
import {
  ByteSize,
  Field,
  Id,
  IndexName,
  Name,
  VersionString
} from '@_types/common'
import { double, integer, long } from '@_types/Numeric'
import { Time } from '@_types/Time'
import { DateString } from '@_types/Time'

export class TrainedModelStats {
  /** The unique identifier of the trained model. */
  model_id: Id
  /** The number of ingest pipelines that currently refer to the model. */
  pipeline_count: integer
  /** A collection of inference stats fields. */
  inference_stats?: TrainedModelInferenceStats
  /**
   * A collection of ingest stats for the model across all nodes. The values are summations of the individual node statistics. The format matches the ingest section in Nodes stats.
   * @doc_url https://www.elastic.co/guide/en/elasticsearch/reference/current/cluster-nodes-stats.html
   */
  ingest?: Dictionary<string, UserDefinedValue> // TODO -- this is not complete
}

export class TrainedModelInferenceStats {
  /** The number of failures when using the model for inference. */
  failure_count: long
  /** The total number of times the model has been called for inference. This is across all inference contexts, including all pipelines. */
  inference_count: long
  /**
   * The number of times the model was loaded for inference and was not retrieved from the cache. If this number is close to the inference_count, then the cache is not being appropriately used. This can be solved by increasing the cache size or its time-to-live (TTL). See General machine learning settings for the appropriate settings.
   * @doc_url https://www.elastic.co/guide/en/elasticsearch/reference/current/ml-settings.html#general-ml-settings
   */
  cache_miss_count: long
  /** The number of inference calls where all the training features for the model were missing. */
  missing_all_fields_count: long
  /** The time when the statistics were last updated. */
  timestamp: Time
}

export class TrainedModelConfig {
  /** Idetifier for the trained model. */
  model_id: Id
  /** The model type */
  model_type?: TrainedModelType
  /** A comma delimited string of tags. A trained model can have many tags, or none. */
  tags: string[]
  /** The Elasticsearch version number in which the trained model was created. */
  version?: VersionString
  compressed_definition?: string
  /** Information on the creator of the trained model. */
  created_by?: string
  /** The time when the trained model was created. */
  create_time?: Time
  /** Any field map described in the inference configuration takes precedence. */
  default_field_map?: Dictionary<string, string>
  /** The free-text description of the trained model. */
  description?: string
  /** The estimated heap usage in bytes to keep the trained model in memory. */
  estimated_heap_memory_usage_bytes?: integer
  /** The estimated number of operations to use the trained model. */
  estimated_operations?: integer
  /** The default configuration for inference. This can be either a regression or classification configuration. It must match the underlying definition.trained_model's target_type. */
  inference_config: InferenceConfigContainer
  /** The input field names for the model definition. */
  input: TrainedModelConfigInput
  /** The license level of the trained model. */
  license_level?: string
  /** An object containing metadata about the trained model. For example, models created by data frame analytics contain analysis_config and input objects. */
  metadata?: TrainedModelConfigMetadata
  model_size_bytes?: ByteSize
  location?: TrainedModelLocation
}

export class TrainedModelConfigInput {
  /** An array of input field names for the model. */
  field_names: Field[]
}

export class TrainedModelConfigMetadata {
  model_aliases?: string[]
  /** An object that contains the baseline for feature importance values. For regression analysis, it is a single value. For classification analysis, there is a value for each class. */
  feature_importance_baseline?: Dictionary<string, string>
  /** List of the available hyperparameters optimized during the fine_parameter_tuning phase as well as specified by the user. */
  hyperparameters?: Hyperparameter[]
  /** An array of the total feature importance for each feature used from the training data set. This array of objects is returned if data frame analytics trained the model and the request includes total_feature_importance in the include request parameter. */
  total_feature_importance?: TotalFeatureImportance[]
}

export class Hyperparameter {
  /**
   * A positive number showing how much the parameter influences the variation of the loss function. For hyperparameters with values that are not specified by the user but tuned during hyperparameter optimization.
   * @doc_url https://www.elastic.co/guide/en/machine-learning/7.12/dfa-regression.html#dfa-regression-lossfunction
   */
  absolute_importance?: double
  /** Name of the hyperparameter. */
  name: Name
  /** A number between 0 and 1 showing the proportion of influence on the variation of the loss function among all tuned hyperparameters. For hyperparameters with values that are not specified by the user but tuned during hyperparameter optimization. */
  relative_importance?: double
  /** Indicates if the hyperparameter is specified by the user (true) or optimized (false). */
  supplied: boolean
  /** The value of the hyperparameter, either optimized or specified by the user. */
  value: double
}

export class TotalFeatureImportance {
  /** The feature for which this importance was calculated. */
  feature_name: Name
  /** A collection of feature importance statistics related to the training data set for this particular feature. */
  importance: TotalFeatureImportanceStatistics[]
  /** If the trained model is a classification model, feature importance statistics are gathered per target class value. */
  classes: TotalFeatureImportanceClass[]
}

export class TotalFeatureImportanceClass {
  /** The target class value. Could be a string, boolean, or number. */
  class_name: Name
  /** A collection of feature importance statistics related to the training data set for this particular feature. */
  importance: TotalFeatureImportanceStatistics[]
}

export class TotalFeatureImportanceStatistics {
  /** The average magnitude of this feature across all the training data. This value is the average of the absolute values of the importance for this feature. */
  mean_magnitude: double
  /** The maximum importance value across all the training data for this feature. */
  max: integer
  /** The minimum importance value across all the training data for this feature. */
  min: integer
}

export enum TrainedModelType {
  /**
   * The model definition is an ensemble model of decision trees.
   */
  tree_ensemble,
  /**
   * A special type reserved for language identification models.
   */
  lang_ident,
  /**
   * The stored definition is a PyTorch (specifically a TorchScript) model.
   * Currently only NLP models are supported.
   */
  pytorch
}

export enum DeploymentState {
  /**
   * The trained model is started on at least one node.
   */
  started = 0,
  /**
   * Trained model deployment is starting but it is not yet deployed on any nodes.
   */
  starting = 1,
  /**
   * Trained model deployment has started on all valid nodes.
   */
  fully_allocated = 3
}

export class TrainedModelAllocationTaskParameters {
  /**
   * The size of the trained model in bytes.
   */
  model_bytes: integer
  /**
   * The unique identifier for the trained model.
   */
  model_id: Id
}

export enum RoutingState {
  /**
   * The allocation attempt failed.
   */
  failed = 0,
  /**
   * The trained model is allocated and ready to accept inference requests.
   */
  started = 1,
  /**
   * The trained model is attempting to allocate on this node; inference requests are not yet accepted.
   */
  starting = 2,
  /**
   * The trained model is fully deallocated from this node.
   */
  stopped = 3,
  /**
   * The trained model is being deallocated from this node.
   */
  stopping = 4
}

export class TrainedModelAllocationRoutingTable {
  /**
   * The reason for the current state. It is usually populated only when the
   * `routing_state` is `failed`.
   */
  reason: string
  /**
   * The current routing state.
   */
  routing_state: RoutingState
}

export class TrainedModelAllocation {
  /**
   * The overall allocation state.
   */
  allocation_state: DeploymentState
  /**
   * The allocation state for each node.
   */
  routing_table: Dictionary<string, TrainedModelAllocationRoutingTable>
  /**
   * The timestamp when the deployment started.
   */
  start_time: DateString
  task_parameters: TrainedModelAllocationTaskParameters
}
export class TrainedModelEntities {
  class_name: string
  class_probability: double
  entity: string
  start_pos: integer
  end_pos: integer
}
export class TopClassEntry {
  class_name: string
  class_probability: double
  class_score: double
}

export type PredictedValue = string | double

export class TrainedModelLocation {
  index: TrainedModelLocationIndex
}

export class TrainedModelLocationIndex {
  name: IndexName
}
