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
  ByteSize,
  Field,
  Id,
  IndexName,
  Metadata,
  Name,
  VersionString
} from '@_types/common'
import { double, integer, long } from '@_types/Numeric'
import {
  DateTime,
  DurationValue,
  EpochTime,
  UnitFloatMillis,
  UnitMillis
} from '@_types/Time'
import { Dictionary } from '@spec_utils/Dictionary'
import { UserDefinedValue } from '@spec_utils/UserDefinedValue'
import { DiscoveryNode } from './DiscoveryNode'
import { InferenceConfigCreateContainer } from './inference'

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
  adaptive_allocations?: AdaptiveAllocationsSettings
  /** The detailed allocation status for the deployment. */
  allocation_status?: TrainedModelDeploymentAllocationStatus
  cache_size?: ByteSize
  /** The unique identifier for the trained model deployment. */
  deployment_id: Id
  /** The sum of `error_count` for all nodes in the deployment. */
  error_count?: integer
  /** The sum of `inference_count` for all nodes in the deployment. */
  inference_count?: integer
  /** The unique identifier for the trained model. */
  model_id: Id
  /**
   * The deployment stats for each node that currently has the model allocated.
   * In serverless, stats are reported for a single unnamed virtual node.
   */
  nodes: TrainedModelDeploymentNodesStats[]
  /** The number of allocations requested. */
  number_of_allocations?: integer

  peak_throughput_per_minute: long

  priority: TrainingPriority
  /** The number of inference requests that can be queued before new requests are rejected. */
  queue_capacity?: integer
  /**
   * The sum of `rejected_execution_count` for all nodes in the deployment.
   * Individual nodes reject an inference request if the inference queue is full.
   * The queue size is controlled by the `queue_capacity` setting in the start
   * trained model deployment API.
   */
  rejected_execution_count?: integer
  /** The reason for the current deployment state. Usually only populated when
   * the model is not deployed to a node.
   */
  reason?: string
  /** The epoch timestamp when the deployment started. */
  start_time: EpochTime<UnitMillis>
  /** The overall state of the deployment. */
  state?: DeploymentAssignmentState
  /** The number of threads used be each allocation during inference. */
  threads_per_allocation?: integer
  /** The sum of `timeout_count` for all nodes in the deployment. */
  timeout_count?: integer
}

export class AdaptiveAllocationsSettings {
  /**
   * If true, adaptive_allocations is enabled
   */
  enabled: boolean
  /**
   * Specifies the minimum number of allocations to scale to.
   * If set, it must be greater than or equal to 0.
   * If not defined, the deployment scales to 0.
   */
  min_number_of_allocations?: integer
  /**
   * Specifies the maximum number of allocations to scale to.
   * If set, it must be greater than or equal to min_number_of_allocations.
   */
  max_number_of_allocations?: integer
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
  timestamp: EpochTime<UnitMillis>
}

export class TrainedModelSizeStats {
  /** The size of the model in bytes. */
  model_size_bytes: ByteSize
  /** The amount of memory required to load the model in bytes. */
  required_native_memory_bytes: ByteSize
}

export class TrainedModelDeploymentNodesStats {
  /** The average time for each inference call to complete on this node. */
  average_inference_time_ms?: DurationValue<UnitFloatMillis>

  average_inference_time_ms_last_minute?: DurationValue<UnitFloatMillis>

  /** The average time for each inference call to complete on this node, excluding cache */
  average_inference_time_ms_excluding_cache_hits?: DurationValue<UnitFloatMillis>

  /** The number of errors when evaluating the trained model. */
  error_count?: integer
  /** The total number of inference calls made against this node for this model. */
  inference_count?: long

  inference_cache_hit_count?: long

  inference_cache_hit_count_last_minute?: long

  /** The epoch time stamp of the last inference call for the model on this node. */
  last_access?: EpochTime<UnitMillis>
  /**
   * Information pertaining to the node.
   * @availability stack
   */
  node?: DiscoveryNode
  /**
   * The number of allocations assigned to this node.
   */
  number_of_allocations?: integer
  /** The number of inference requests queued to be processed. */
  number_of_pending_requests?: integer

  peak_throughput_per_minute: long
  /** The number of inference requests that were not processed because the queue was full. */
  rejected_execution_count?: integer
  /** The current routing state and reason for the current routing state for this allocation. */
  routing_state: TrainedModelAssignmentRoutingStateAndReason
  /** The epoch timestamp when the allocation started. */
  start_time?: EpochTime<UnitMillis>
  /** The number of threads used by each allocation during inference. */
  threads_per_allocation?: integer

  throughput_last_minute: integer
  /** The number of inference requests that timed out before being processed. */
  timeout_count?: integer
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
  create_time?: DateTime
  /** Any field map described in the inference configuration takes precedence. */
  default_field_map?: Dictionary<string, string>
  /** The free-text description of the trained model. */
  description?: string
  /** The estimated heap usage in bytes to keep the trained model in memory. */
  estimated_heap_memory_usage_bytes?: integer
  /** The estimated number of operations to use the trained model. */
  estimated_operations?: integer
  /** True if the full model definition is present. */
  fully_defined?: boolean
  /** The default configuration for inference. This can be either a regression, classification, or one of the many NLP focused configurations. It must match the underlying definition.trained_model's target_type. For pre-packaged models such as ELSER the config is not required. */
  inference_config?: InferenceConfigCreateContainer
  /** The input field names for the model definition. */
  input: TrainedModelConfigInput
  /** The license level of the trained model. */
  license_level?: string
  /** An object containing metadata about the trained model. For example, models created by data frame analytics contain analysis_config and input objects. */
  metadata?: TrainedModelConfigMetadata
  model_size_bytes?: ByteSize
  model_package?: ModelPackageConfig
  location?: TrainedModelLocation
  platform_architecture?: string
  prefix_strings?: TrainedModelPrefixStrings
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

export class ModelPackageConfig {
  create_time?: EpochTime<UnitMillis>
  description?: string
  inference_config?: Dictionary<string, UserDefinedValue>
  metadata?: Metadata
  minimum_version?: string
  model_repository?: string
  model_type?: string
  packaged_model_id: Id
  platform_architecture?: string
  prefix_strings?: TrainedModelPrefixStrings
  size?: ByteSize
  sha256?: string
  tags?: string[]
  vocabulary_file?: string
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

export enum DeploymentAllocationState {
  /**
   * The trained model is started on at least one node.
   */
  started,
  /**
   * Trained model deployment is starting but it is not yet deployed on any nodes.
   */
  starting,
  /**
   * Trained model deployment has started on all valid nodes.
   */
  fully_allocated
}

export enum DeploymentAssignmentState {
  /**
   * The deployment is usable; at least one node has the model allocated.
   */
  started,
  /**
   * The deployment has recently started but is not yet usable; the model is not allocated on any nodes.
   */
  starting,
  /**
   * The deployment is preparing to stop and deallocate the model from the relevant nodes.
   */
  stopping,
  /**
   * The deployment is on a failed state and must be re-deployed.
   */
  failed
}

export enum TrainingPriority {
  normal,
  low
}

export class TrainedModelAssignmentTaskParameters {
  /**
   * The size of the trained model in bytes.
   */
  model_bytes: ByteSize
  /**
   * The unique identifier for the trained model.
   */
  model_id: Id
  /**
   * The unique identifier for the trained model deployment.
   */
  deployment_id: Id
  /**
   * The size of the trained model cache.
   * @availability stack since=8.4.0
   * @availability serverless
   */
  cache_size?: ByteSize
  /**
   * The total number of allocations this model is assigned across ML nodes.
   */
  number_of_allocations: integer
  priority: TrainingPriority

  per_deployment_memory_bytes: ByteSize
  per_allocation_memory_bytes: ByteSize

  /**
   * Number of inference requests are allowed in the queue at a time.
   */
  queue_capacity: integer
  /**
   * Number of threads per allocation.
   */
  threads_per_allocation: integer
}

export enum RoutingState {
  /**
   * The allocation attempt failed.
   */
  failed,
  /**
   * The trained model is allocated and ready to accept inference requests.
   */
  started,
  /**
   * The trained model is attempting to allocate on this node; inference requests are not yet accepted.
   */
  starting,
  /**
   * The trained model is fully deallocated from this node.
   */
  stopped,
  /**
   * The trained model is being deallocated from this node.
   */
  stopping
}

export class TrainedModelAssignmentRoutingStateAndReason {
  /**
   * The reason for the current state. It is usually populated only when the
   * `routing_state` is `failed`.
   */
  reason?: string
  /**
   * The current routing state.
   */
  routing_state: RoutingState
}

export class TrainedModelAssignmentRoutingTable {
  /**
   * The reason for the current state. It is usually populated only when the
   * `routing_state` is `failed`.
   */
  reason?: string
  /**
   * The current routing state.
   */
  routing_state: RoutingState
  /**
   * Current number of allocations.
   */
  current_allocations: integer
  /**
   * Target number of allocations.
   */
  target_allocations: integer
}

export class TrainedModelDeploymentAllocationStatus {
  /** The current number of nodes where the model is allocated. */
  allocation_count: integer
  /** The detailed allocation state related to the nodes. */
  state: DeploymentAllocationState
  /** The desired number of nodes for model allocation. */
  target_allocation_count: integer
}

export class TrainedModelAssignment {
  adaptive_allocations?: AdaptiveAllocationsSettings | null
  /**
   * The overall assignment state.
   */
  assignment_state: DeploymentAssignmentState
  max_assigned_allocations?: integer
  reason?: string
  /**
   * The allocation state for each node.
   */
  routing_table: Dictionary<string, TrainedModelAssignmentRoutingTable>
  /**
   * The timestamp when the deployment started.
   */
  start_time: DateTime
  task_parameters: TrainedModelAssignmentTaskParameters
}

export class TrainedModelLocation {
  index: TrainedModelLocationIndex
}

export class TrainedModelLocationIndex {
  name: IndexName
}

export class TrainedModelPrefixStrings {
  /**
   * String prepended to input at ingest
   */
  ingest?: string
  /**
   * String prepended to input at search
   */
  search?: string
}
