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

import { ClusterStateMetadata } from '@cluster/_types/ClusterStateMetadata'
import { ClusterStateRoutingNodes } from '@cluster/_types/ClusterStateRoutingNodes'
import {
  ClusterStateDeletedSnapshots,
  ClusterStateSnapshots
} from '@cluster/_types/ClusterStateSnapshots'
import { NodeAttributes } from '@nodes/_types/NodeAttributes'
import { EmptyObject, NodeName, Uuid, VersionNumber } from '@_types/common'
import { Dictionary } from '_spec_utils/Dictionary'

export class ClusterRerouteState {
  cluster_uuid: Uuid
  state_uuid?: Uuid
  master_node?: string
  version?: VersionNumber
  blocks?: EmptyObject // TODO: this is likely wrong too
  nodes?: Dictionary<NodeName, NodeAttributes>
  routing_table?: Dictionary<string, EmptyObject> // TODO: this is wrong, but the tests are not exhaustive enough
  routing_nodes?: ClusterStateRoutingNodes
  security_tokens?: Dictionary<string, string>
  snapshots?: ClusterStateSnapshots
  snapshot_deletions?: ClusterStateDeletedSnapshots
  metadata?: ClusterStateMetadata
}
