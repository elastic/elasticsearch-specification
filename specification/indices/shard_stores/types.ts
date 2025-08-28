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

import { Id, Name, NodeId } from '@_types/common'
import { TransportAddress } from '@_types/Networking'
import { AdditionalProperty } from '@spec_utils/behaviors'
import { Dictionary } from '@spec_utils/Dictionary'

export class IndicesShardStores {
  shards: Dictionary<string, ShardStoreWrapper>
}

/**
 * @behavior_meta AdditionalProperty key=node_id value=node
 */
export class ShardStore implements AdditionalProperty<NodeId, ShardStoreNode> {
  allocation: ShardStoreAllocation
  allocation_id?: Id
  store_exception?: ShardStoreException
}

export class ShardStoreNode {
  attributes: Dictionary<string, string>
  ephemeral_id?: string
  external_id?: string
  name: Name
  roles: string[]
  transport_address: TransportAddress
}

export enum ShardStoreAllocation {
  primary,
  replica,
  unused
}

export class ShardStoreException {
  reason: string
  type: string
}

export class ShardStoreWrapper {
  stores: ShardStore[]
}

export enum ShardStoreStatus {
  /** The primary shard and all replica shards are assigned. */
  green,
  /** One or more replica shards are unassigned. */
  yellow,
  /** The primary shard is unassigned. */
  red,
  /** Return all shards, regardless of health status.  */
  all
}
