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
  Id,
  IndexName,
  Name,
  NodeId,
  NodeName,
  VersionString
} from '@_types/common'
import { TransportAddress } from '@_types/Networking'
import { NodeRoles, NodeShard } from '@_types/Node'
import { integer } from '@_types/Numeric'
import { QueryContainer } from '@_types/query_dsl/abstractions'
import { Dictionary } from '@spec_utils/Dictionary'

export class Response {
  body: {
    nodes: Dictionary<NodeId, SearchShardsNodeAttributes>
    shards: NodeShard[][]
    indices: Dictionary<IndexName, ShardStoreIndex>
  }
}

class SearchShardsNodeAttributes {
  /** The human-readable identifier of the node. */
  name: NodeName
  /** The ephemeral ID of the node. */
  ephemeral_id: Id
  /** The host and port where transport HTTP connections are accepted. */
  transport_address: TransportAddress
  /**
   * @availability stack since=8.3.0
   * @availability serverless
   */
  external_id: string
  /** Lists node attributes. */
  attributes: Dictionary<string, string>
  roles: NodeRoles
  version: VersionString
  min_index_version: integer
  max_index_version: integer
}

export class ShardStoreIndex {
  aliases?: Name[]
  filter?: QueryContainer
}
