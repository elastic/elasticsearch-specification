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

class ClusterRerouteState {
  cluster_uuid: Uuid
  state_uuid: Uuid
  master_node: string
  version: VersionNumber
  blocks: EmptyObject
  nodes: Dictionary<NodeName, NodeAttributes>
  routing_table: Dictionary<string, EmptyObject> // TODO: this is wrong, but the tests are not exhaustive enough
  routing_nodes: ClusterRerouteStateRoutingNodes
  security_tokens: Dictionary<string, string>
  snapshots: ClusterRerouteStateSnapshots
  snapshot_deletions: ClusterRerouteStateDeletedSnapshots
}

class ClusterRerouteStateSnapshots {
  snapshots: SnapshotStatus[] // TODO: just a guess, but the tests are not exhaustive enough
}

class ClusterRerouteStateDeletedSnapshots {
  snapshot_deletions: string[] // TODO: just a guess, but the tests are not exhaustive enough
}

class ClusterRerouteStateRoutingNodes {
  unassigned: NodeName[]
  nodes: Dictionary<string, ClusterRerouteStateRoutingNodesShard[]>
}

class ClusterRerouteStateRoutingNodesShard {
  state: ShardRoutingState
  primary: boolean
  node: NodeName
  shard: integer
  index: IndexName
  allocation_id: Dictionary<string, string>
}
