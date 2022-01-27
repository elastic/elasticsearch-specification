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
import { UserDefinedValue } from '@spec_utils/UserDefinedValue'
import { Id, VersionNumber, Name } from '@_types/common'
import { TransportAddress } from '@_types/Networking'

export class IndicesShardStores {
  shards: Dictionary<string, ShardStoreWrapper>
}

export class ShardStore {
  allocation: ShardStoreAllocation
  allocation_id: Id
  attributes: Dictionary<string, UserDefinedValue>
  id: Id
  legacy_version: VersionNumber
  name: Name
  store_exception: ShardStoreException
  transport_address: TransportAddress
}

export enum ShardStoreAllocation {
  primary = 0,
  replica = 1,
  unused = 2
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
  green = 0,
  /** One or more replica shards are unassigned. */
  yellow = 1,
  /** The primary shard is unassigned. */
  red = 2,
  /** Return all shards, regardless of health status.  */
  all = 3
}
