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

import { IndexName, NodeName } from '@_types/common'
import { integer } from '@_types/Numeric'
export class Command {
  /**
   * Cancel allocation of a shard (or recovery). Accepts index and shard for index name and shard number, and node for the node to cancel the shard allocation on. This can be used to force resynchronization of existing replicas from the primary shard by cancelling them and allowing them to be reinitialized through the standard recovery process. By default only replica shard allocations can be cancelled. If it is necessary to cancel the allocation of a primary shard then the allow_primary flag must also be included in the request.
   */
  cancel?: CommandCancelAction
  /**
   * Move a started shard from one node to another node. Accepts index and shard for index name and shard number, from_node for the node to move the shard from, and to_node for the node to move the shard to.
   */
  move?: CommandMoveAction
  /**
   * Allocate an unassigned replica shard to a node. Accepts index and shard for index name and shard number, and node to allocate the shard to. Takes allocation deciders into account.
   */
  allocate_replica?: CommandAllocateReplicaAction
  /**
   * Allocate a primary shard to a node that holds a stale copy. Accepts the index and shard for index name and shard number, and node to allocate the shard to. Using this command may lead to data loss for the provided shard id. If a node which has the good copy of the data rejoins the cluster later on, that data will be deleted or overwritten with the data of the stale copy that was forcefully allocated with this command. To ensure that these implications are well-understood, this command requires the flag accept_data_loss to be explicitly set to true.
   */
  allocate_stale_primary?: CommandAllocatePrimaryAction
  /**
   * Allocate an empty primary shard to a node. Accepts the index and shard for index name and shard number, and node to allocate the shard to. Using this command leads to a complete loss of all data that was indexed into this shard, if it was previously started. If a node which has a copy of the data rejoins the cluster later on, that data will be deleted. To ensure that these implications are well-understood, this command requires the flag accept_data_loss to be explicitly set to true.
   */
  allocate_empty_primary?: CommandAllocatePrimaryAction
}

export class CommandCancelAction {
  index: IndexName
  shard: integer
  node: string
  allow_primary?: boolean
}

export class CommandAction {
  index: IndexName
  shard: integer
  node: string
  /** By default only replica shard allocations can be cancelled. If it is necessary to cancel the allocation of a primary shard then the allow_primary flag must also be included in the request. */
  allow_primary?: boolean
}

export class CommandMoveAction {
  index: IndexName
  shard: integer
  /** The node to move the shard from */
  from_node: string
  /** The node to move the shard to */
  to_node: string
}

/**
 * @doc_id modules-cluster
 */
export class CommandAllocateReplicaAction {
  index: IndexName
  shard: integer
  node: string
}

export class CommandAllocatePrimaryAction {
  index: IndexName
  shard: integer
  node: string
  /** If a node which has a copy of the data rejoins the cluster later on, that data will be deleted. To ensure that these implications are well-understood, this command requires the flag accept_data_loss to be explicitly set to true */
  accept_data_loss: boolean
}

export class RerouteDecision {
  decider: string
  decision: string
  explanation: string
}

export class RerouteExplanation {
  command: string
  decisions: RerouteDecision[]
  parameters: RerouteParameters
}

export class RerouteParameters {
  allow_primary: boolean
  index: IndexName
  node: NodeName
  shard: integer
  from_node?: NodeName
  to_node?: NodeName
}
