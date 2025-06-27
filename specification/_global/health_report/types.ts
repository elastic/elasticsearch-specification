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

import { IndexName, Indices } from '@_types/common'
import { LifecycleOperationMode } from '@_types/Lifecycle'
import { integer, long } from '@_types/Numeric'
import { Dictionary } from '@spec_utils/Dictionary'

export enum IndicatorHealthStatus {
  green,
  yellow,
  red,
  unknown,
  unavailable
}

export class Indicators {
  master_is_stable?: MasterIsStableIndicator
  shards_availability?: ShardsAvailabilityIndicator
  disk?: DiskIndicator
  repository_integrity?: RepositoryIntegrityIndicator
  data_stream_lifecycle?: DataStreamLifecycleIndicator
  ilm?: IlmIndicator
  slm?: SlmIndicator
  shards_capacity?: ShardsCapacityIndicator
  file_settings?: FileSettingsIndicator
}

export class BaseIndicator {
  status: IndicatorHealthStatus
  symptom: string
  impacts?: Impact[]
  diagnosis?: Diagnosis[]
}

export class Diagnosis {
  id: string
  action: string
  affected_resources: DiagnosisAffectedResources
  cause: string
  help_url: string
}

export class DiagnosisAffectedResources {
  indices?: Indices
  nodes?: IndicatorNode[]
  slm_policies?: string[]
  feature_states?: string[]
  snapshot_repositories?: string[]
}

export class Impact {
  description: string
  id: string
  impact_areas: ImpactArea[]
  severity: integer
}

export enum ImpactArea {
  search,
  ingest,
  backup,
  deployment_management
}

/** MASTER_IS_STABLE */

export class MasterIsStableIndicator extends BaseIndicator {
  details?: MasterIsStableIndicatorDetails
}
export class MasterIsStableIndicatorDetails {
  current_master: IndicatorNode
  recent_masters: IndicatorNode[]
  exception_fetching_history?: MasterIsStableIndicatorExceptionFetchingHistory
  cluster_formation?: MasterIsStableIndicatorClusterFormationNode[]
}
export class IndicatorNode {
  name: string | null
  node_id: string | null
}
export class MasterIsStableIndicatorExceptionFetchingHistory {
  message: string
  stack_trace: string
}
export class MasterIsStableIndicatorClusterFormationNode {
  name?: string
  node_id: string
  cluster_formation_message: string
}

/** SHARDS_AVAILABILITY */

export class ShardsAvailabilityIndicator extends BaseIndicator {
  details?: ShardsAvailabilityIndicatorDetails
}
export class ShardsAvailabilityIndicatorDetails {
  creating_primaries: long
  creating_replicas: long
  initializing_primaries: long
  initializing_replicas: long
  restarting_primaries: long
  restarting_replicas: long
  started_primaries: long
  started_replicas: long
  unassigned_primaries: long
  unassigned_replicas: long
}

/** DISK */

export class DiskIndicator extends BaseIndicator {
  details?: DiskIndicatorDetails
}
export class DiskIndicatorDetails {
  indices_with_readonly_block: long
  nodes_with_enough_disk_space: long
  nodes_over_high_watermark: long
  nodes_over_flood_stage_watermark: long
  nodes_with_unknown_disk_status: long
}

/** REPOSITORY_INTEGRITY */

export class RepositoryIntegrityIndicator extends BaseIndicator {
  details?: RepositoryIntegrityIndicatorDetails
}
export class RepositoryIntegrityIndicatorDetails {
  total_repositories?: long
  corrupted_repositories?: long
  corrupted?: string[]
}

/** DATA_STREAM_LIFECYCLE */

export class DataStreamLifecycleIndicator extends BaseIndicator {
  details?: DataStreamLifecycleDetails
}
export class DataStreamLifecycleDetails {
  stagnating_backing_indices_count: integer
  total_backing_indices_in_error: integer
  stagnating_backing_indices?: StagnatingBackingIndices[]
}
export class StagnatingBackingIndices {
  index_name: IndexName
  first_occurrence_timestamp: long
  retry_count: integer
}

/** ILM */

export class IlmIndicator extends BaseIndicator {
  details?: IlmIndicatorDetails
}
export class IlmIndicatorDetails {
  ilm_status: LifecycleOperationMode
  policies: long
  stagnating_indices: integer
}

/** SLM */

export class SlmIndicator extends BaseIndicator {
  details?: SlmIndicatorDetails
}
export class SlmIndicatorDetails {
  slm_status: LifecycleOperationMode
  policies: long
  unhealthy_policies?: SlmIndicatorUnhealthyPolicies
}

export class SlmIndicatorUnhealthyPolicies {
  count: long
  invocations_since_last_success?: Dictionary<string, long>
}

/** SHARDS_CAPACITY */

export class ShardsCapacityIndicator extends BaseIndicator {
  details?: ShardsCapacityIndicatorDetails
}

export class ShardsCapacityIndicatorDetails {
  data: ShardsCapacityIndicatorTierDetail
  frozen: ShardsCapacityIndicatorTierDetail
}

export class ShardsCapacityIndicatorTierDetail {
  max_shards_in_cluster: integer
  current_used_shards?: integer
}

/** FILE_SETTINGS **/

export class FileSettingsIndicator extends BaseIndicator {
  details?: FileSettingsIndicatorDetails
}

export class FileSettingsIndicatorDetails {
  failure_streak: long
  most_recent_failure: string
}
