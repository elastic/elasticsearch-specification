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

import { Id, Name } from '@_types/common'
import { TransportAddress } from '@_types/Networking'
import { NodeRoles } from '@_types/Node'
import { double, integer, long } from '@_types/Numeric'
import { DateTime } from '@_types/Time'
import { Dictionary } from '@spec_utils/Dictionary'

export class AllocationDecision {
  decider: string
  decision: AllocationExplainDecision
  explanation: string
}

export enum AllocationExplainDecision {
  NO,
  YES,
  THROTTLE,
  ALWAYS
}

export class AllocationStore {
  allocation_id: string
  found: boolean
  in_sync: boolean
  matching_size_in_bytes: long
  matching_sync_id: boolean
  store_exception: string
}

export class ClusterInfo {
  nodes: Dictionary<string, NodeDiskUsage>
  shard_sizes: Dictionary<string, long>
  shard_data_set_sizes?: Dictionary<string, string>
  shard_paths: Dictionary<string, string>
  reserved_sizes: ReservedSize[]
}

export class NodeDiskUsage {
  node_name: Name
  least_available: DiskUsage
  most_available: DiskUsage
}

export class DiskUsage {
  path: string
  total_bytes: long
  used_bytes: long
  free_bytes: long
  free_disk_percent: double
  used_disk_percent: double
}

export class ReservedSize {
  node_id: Id
  path: string
  total: long
  shards: string[]
}

export class CurrentNode {
  id: Id
  name: Name
  /**
   * @availability stack since=8.11.0 stability=stable
   * @availability serverless
   */
  roles: NodeRoles
  attributes: Dictionary<string, string>
  transport_address: TransportAddress
  weight_ranking: integer
}

export enum Decision {
  yes,
  no,
  worse_balance,
  throttled,
  awaiting_info,
  allocation_delayed,
  no_valid_shard_copy,
  no_attempt
}

export class NodeAllocationExplanation {
  deciders: AllocationDecision[]
  node_attributes: Dictionary<string, string>
  node_decision: Decision
  node_id: Id
  node_name: Name
  /**
   * @availability stack since=8.11.0 stability=stable
   * @availability serverless
   */
  roles: NodeRoles
  store?: AllocationStore
  transport_address: TransportAddress
  weight_ranking: integer
}

export enum StoreCopy {
  NONE,
  AVAILABLE,
  CORRUPT,
  IO_ERROR,
  STALE,
  UNKNOWN
}

export class UnassignedInformation {
  at: DateTime
  last_allocation_status?: string
  reason: UnassignedInformationReason
  details?: string
  failed_allocation_attempts?: integer
  delayed?: boolean
  allocation_status?: string
}

/**
 * @doc_id cat-shards
 */
export enum UnassignedInformationReason {
  INDEX_CREATED,
  CLUSTER_RECOVERED,
  INDEX_REOPENED,
  DANGLING_INDEX_IMPORTED,
  NEW_INDEX_RESTORED,
  EXISTING_INDEX_RESTORED,
  REPLICA_ADDED,
  ALLOCATION_FAILED,
  NODE_LEFT,
  REROUTE_CANCELLED,
  REINITIALIZED,
  REALLOCATED_REPLICA,
  PRIMARY_FAILED,
  FORCED_EMPTY_PRIMARY,
  MANUAL_ALLOCATION
}
