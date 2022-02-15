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
import { DiscoveryNode } from './DiscoveryNode'

export class TrainedModelStats {
  /** A collection of deployment stats, which is present when the models are deployed. */
  deployment_stats?: TrainedModelDeploymentStats
  /** A collection of inference stats fields. */
  inference_stats?: TrainedModelInferenceStats
  /**
   * A collection of ingest stats for the model across all nodes.
   * The values are summations of the individual node statistics.
   * The format matches the ingest section in the nodes stats API.
   * @doc_id cluster-nodes-stats
   */
  ingest?: Dictionary<string, UserDefinedValue> // TODO -- this is not complete
  /** The unique identifier of the trained model. */
  model_id: Id
  /** A collection of model size stats. */
  model_size_stats: TrainedModelSizeStats
  /** The number of ingest pipelines that currently refer to the model. */
  pipeline_count: integer
}

export class TrainedModelDeploymentStats {
  /** The detailed allocation status for the deployment. */
  allocation_status: TrainedModelDeploymentAllocationStatus
  /** The sum of `error_count` for all nodes in the deployment. */
  error_count: integer
  /** The sum of `inference_count` for all nodes in the deployment. */
  inference_count: integer
  /** The number of threads used by the inference process. */
  inference_threads: integer
  /** The unique identifier for the trained model. */
  model_id: Id
  /** The number of threads used when sending inference requests to the model. */
  model_threads: integer
  /** The deployent stats for each node that currently has the model allocated. */
  nodes: TrainedModelDeploymentNodesStats
  /** The number of inference requests that can be queued before new requests are rejected. */
  queue_capacity: integer
  /**
   * The sum of `rejected_execution_count` for all nodes in the deployment.
   * Individual nodes reject an inference request if the inference queue is full.
   * The queue size is controlled by the `queue_capacity` setting in the start
   * trained model deployment API.
   */
  rejected_execution_count: integer
  /** The reason for the current deployment state. Usually only populated when
   * the model is not deployed to a node.
   */
  reason: string
  /** The epoch timestamp when the deployment started. */
  start_time: long
  /** The overall state of the deployment. */
  state: DeploymentState
  /** The sum of `timeout_count` for all nodes in the deployment. */
  timeout_count: integer
}

export class TrainedModelInferenceStats {
  /**
   * The number of times the model was loaded for inference and was not retrieved from the cache.
   * If this number is close to the `inference_count`, the cache is not being appropriately used.
   * This can be solved by increasing the cache size or its time-to-live (TTL).
   * Refer to general machine learning settings for the appropriate settings.
   * @doc_id ml-settings
   */
  cache_miss_count: integer
  /** The number of failures when using the model for inference. */
  failure_count: integer
  /**
   * The total number of times the model has been called for inference.
   * This is across all inference contexts, including all pipelines.
   */
  inference_count: integer
  /** The number of inference calls where all the training features for the model were missing. */
  missing_all_fields_count: integer
  /** The time when the statistics were last updated. */
  timestamp: Time
}

export class TrainedModelSizeStats {
  /** The size of the model in bytes. */
  model_size_bytes: ByteSize
  /** The amount of memory required to load the model in bytes. */
  required_native_memory_bytes: integer
}

export class TrainedModelDeploymentNodesStats {
  /** The average time for each inference call to complete on this node. */
  average_inference_time_ms: double
  /** The number of errors when evaluating the trained model. */
  error_count: integer
  /** The total number of inference calls made against this node for this model. */
  inference_count: integer
  /**
   * The number of threads used by the inference process. This value is limited
   * by the number of hardware threads on the node; it might therefore differ
   * from the `inference_threads` value in the start trained model deployment API.
   */
  inference_threads: integer
  /** The epoch time stamp of the last inference call for the model on this node. */
  last_access: long
  /**
   * The number of threads used when sending inference requests to the model.
   * This value is limited by the number of hardware threads on the node; it
   * might therefore differ from the `model_threads` value in the start trained
   * model deployment API.
   */
  model_threads: integer
  /** Information pertaining to the node. */
  node: DiscoveryNode
  /** The number of inference requests queued to be processed. */
  number_of_pending_requests: integer
  /** The number of inference requests that were not processed because the queue was full. */
  rejection_execution_count: integer
  /** The current routing state and reason for the current routing state for this allocation. */
  routing_state: TrainedModelAllocationRoutingTable
  /** The epoch timestamp when the allocation started. */
  start_time: long
  /** The number of inference requests that timed out before being processed. */
  timeout_count: integer
}

export class TrainedModelConfig {
  /** Identifier for the trained model. */
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
   * @doc_id ml-regression-loss
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
   * The deployment is usable; at least one node has the model allocated.
   */
  started = 0,
  /**
   * The deployment has recently started but is not yet usable; the model is not allocated on any nodes.
   */
  starting = 1,
  /**
   * The deployment is preparing to stop and deallocate the model from the relevant nodes.
   */
  stopping = 2
}

export enum DeploymentAllocationState {
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
  /** The allocation attempt failed. */
  failed,
  /** The trained model is allocated and ready to accept inference requests. */
  started,
  /** The trained model is attempting to allocate on this node; inference requests are not yet accepted. */
  starting,
  /** The trained model is fully deallocated from this node. */
  stopped,
  /** The trained model is being deallocated from this node. */
  stopping
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

export class TrainedModelDeploymentAllocationStatus {
  /** The current number of nodes where the model is allocated. */
  allocation_count: integer
  /** The detailed allocation state related to the nodes. */
  state: DeploymentAllocationState
  /** The desired number of nodes for model allocation. */
  target_allocation_count: integer
}

export class TrainedModelAllocation {
  /**
   * The overall allocation state.
   */
  allocation_state: DeploymentAllocationState
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
