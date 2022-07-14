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

import { NodeId, NodeName } from '@_types/common'
import { LifecycleOperationMode } from '@_types/Lifecycle'
import { integer, long } from '@_types/Numeric'
import { HealthStatus } from '@_types/common'

export class Components {
  cluster_coordination?: ClusterCoordinationComponent
  data?: DataComponent
  snapshot?: SnapshotComponent
}

export class Component {
  status?: HealthStatus
}

export class Indicator {
  status: HealthStatus
  summary: string
  help_url?: string
  impacts?: IndicatorImpact[]
  user_actions?: IndicatorUserAction[]
}

export class IndicatorImpact {
  description: string
  impact_areas: string[]
  severity: integer
}

export class IndicatorUserAction {
  affected_resources: string[]
  help_url: string
  message: string
}

/** CLUSTER COORDINATION */

export class ClusterCoordinationComponent extends Component {
  indicators: ClusterCoordinationIndicators
}

export class ClusterCoordinationIndicators {
  master_is_stable?: ClusterCoordinationMasterIsStableIndicator
}

export class ClusterCoordinationMasterIsStableIndicator extends Indicator {
  details: ClusterCoordinationMasterIsStableIndicatorDetails
}

export class ClusterCoordinationMasterIsStableIndicatorDetails {
  current_master: ClusterCoordinationMasterIsStableIndicatorDetailsMaster
  recent_masters?: ClusterCoordinationMasterIsStableIndicatorDetailsMaster[]
}

export class ClusterCoordinationMasterIsStableIndicatorDetailsMaster {
  name: NodeName
  node_id: NodeId
}

/** DATA */

export class DataComponent extends Component {
  indicators: DataIndicators
}

export class DataIndicators {
  ilm?: DataIlmIndicator
  shards_availability?: DataShardsAvailabilityIndicator
}

export class DataIlmIndicator extends Indicator {
  details: DataIlmIndicatorDetails
}

export class DataIlmIndicatorDetails {
  ilm_status: LifecycleOperationMode
  policies: integer
}

export class DataShardsAvailabilityIndicator extends Indicator {
  details: DataShardsAvailabilityIndicatorDetails
}

export class DataShardsAvailabilityIndicatorDetails {
  creating_primaries: long
  initializing_primaries: long
  initializing_replicas: long
  restarting_primaries: long
  restarting_replicas: long
  started_primaries: long
  started_replicas: long
  unassigned_primaries: long
  unassigned_replicas: long
}

/** SNAPSHOT */

export class SnapshotComponent extends Component {
  indicators: SnapshotIndicators
}

export class SnapshotIndicators {
  repository_integrity?: SnapshotRepositoryIntegrityIndiciator
  slm?: SnapshotSlmIndicator
}

export class SnapshotRepositoryIntegrityIndiciator extends Indicator {}

export class SnapshotSlmIndicator extends Indicator {
  details: SnapshotSlmIndicatorDetails
}

export class SnapshotSlmIndicatorDetails {
  policies: long
  slm_status: LifecycleOperationMode
}
