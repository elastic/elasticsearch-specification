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
import { Name, Id } from '@_types/common'
import { TransportAddress } from '@_types/Networking'
import { long, double, integer } from '@_types/Numeric'
import { DateTime } from '@_types/Time'

export class AllocationDecision {
  decider: string
  decision: AllocationExplainDecision
  explanation: string
}

export enum AllocationExplainDecision {
  NO = 0,
  YES = 1,
  THROTTLE = 2,
  ALWAYS = 3
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
  attributes: Dictionary<string, string>
  transport_address: TransportAddress
  weight_ranking: integer
}

export enum Decision {
  yes = 0,
  no = 1,
  worse_balance = 2,
  throttled = 3,
  awaiting_info = 4,
  allocation_delayed = 5,
  no_valid_shard_copy = 6,
  no_attempt = 7
}

export class NodeAllocationExplanation {
  deciders: AllocationDecision[]
  node_attributes: Dictionary<string, string>
  node_decision: Decision
  node_id: Id
  node_name: Name
  store?: AllocationStore
  transport_address: TransportAddress
  weight_ranking: integer
}

export enum StoreCopy {
  NONE = 0,
  AVAILABLE = 1,
  CORRUPT = 2,
  IO_ERROR = 3,
  STALE = 4,
  UNKNOWN = 5
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
  INDEX_CREATED = 0,
  CLUSTER_RECOVERED = 1,
  INDEX_REOPENED = 2,
  DANGLING_INDEX_IMPORTED = 3,
  NEW_INDEX_RESTORED = 4,
  EXISTING_INDEX_RESTORED = 5,
  REPLICA_ADDED = 6,
  ALLOCATION_FAILED = 7,
  NODE_LEFT = 8,
  REROUTE_CANCELLED = 9,
  REINITIALIZED = 10,
  REALLOCATED_REPLICA = 11,
  PRIMARY_FAILED = 12,
  FORCED_EMPTY_PRIMARY = 13,
  MANUAL_ALLOCATION = 14
}
