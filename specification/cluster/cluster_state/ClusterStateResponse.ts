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

import { ClusterStateBlockIndex } from '@cluster/ClusterStateBlocksIndex'
import { ClusterStateMetadata } from '@cluster/ClusterStateMetadata'
import { ClusterStateRoutingNodes } from '@cluster/ClusterStateRoutingNodes'
import {
  ClusterStateDeletedSnapshots,
  ClusterStateSnapshots
} from '@cluster/ClusterStateSnapshots'
import {
  EmptyObject,
  IndexName,
  Name,
  NodeName,
  Uuid,
  VersionNumber
} from '@common/common'
import { ResponseBase } from '@common/common_abstractions/response/ResponseBase'
import { Dictionary } from '@spec_utils/Dictionary'
import { NodeAttributes } from '@nodes/NodeAttributes'

export class ClusterStateResponse extends ResponseBase {
  cluster_name: Name
  cluster_uuid: Uuid
  master_node?: string
  state?: string[]
  state_uuid?: Uuid
  version?: VersionNumber
  blocks?: ClusterStateBlocks
  metadata?: ClusterStateMetadata
  nodes?: Dictionary<NodeName, NodeAttributes>
  routing_table?: Dictionary<string, EmptyObject> // TODO: this is wrong, but the tests are not exhaustive enough
  routing_nodes?: ClusterStateRoutingNodes
  snapshots?: ClusterStateSnapshots
  snapshot_deletions?: ClusterStateDeletedSnapshots
}

export class ClusterStateBlocks {
  indices?: Dictionary<IndexName, Dictionary<string, ClusterStateBlockIndex>>
}
