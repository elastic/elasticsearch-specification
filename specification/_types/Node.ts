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

import { ErrorCause } from '@_types/Errors'
import { integer } from '@_types/Numeric'
import { UnassignedInformation } from '@cluster/allocation_explain/types'
import { ShardRoutingState } from '@indices/stats/types'
import { Dictionary } from '@spec_utils/Dictionary'
import { Id, IndexName, NodeId, NodeName } from './common'
import { TransportAddress } from './Networking'

/**
 * Contains statistics about the number of nodes selected by the request.
 */
export class NodeStatistics {
  failures?: ErrorCause[]
  /** Total number of nodes selected by the request. */
  total: integer
  /** Number of nodes that responded successfully to the request. */
  successful: integer
  /** Number of nodes that rejected the request or failed to respond. If this value is not 0, a reason for the rejection or failure is included in the response. */
  failed: integer
}

export class NodeAttributes {
  /** Lists node attributes. */
  attributes: Dictionary<string, string>
  /** The ephemeral ID of the node. */
  ephemeral_id: Id
  /** The unique identifier of the node. */
  id?: NodeId
  /** The unique identifier of the node. */
  name: NodeName
  /** The host and port where transport HTTP connections are accepted. */
  transport_address: TransportAddress
}

export class NodeShard {
  state: ShardRoutingState
  primary: boolean
  node?: NodeName
  shard: integer
  index: IndexName
  allocation_id?: Dictionary<string, Id>
  recovery_source?: Dictionary<string, Id>
  unassigned_info?: UnassignedInformation
  relocating_node?: NodeId | null
  relocation_failure_info?: RelocationFailureInfo
}

export class RelocationFailureInfo {
  failed_attempts: integer
}

/**
 * @doc_id node-roles
 */
export enum NodeRole {
  master,
  data,
  data_cold,
  data_content,
  data_frozen,
  data_hot,
  data_warm,
  client,
  ingest,
  ml,
  voting_only,
  transform,
  remote_cluster_client,
  coordinating_only
}

/**
 * @doc_id node-roles
 */
export type NodeRoles = NodeRole[]
