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

import { NodeAttributes } from '@nodes/_types/NodeAttributes'
import { NodeShard } from '@nodes/_types/NodeShard'
import { ResponseBase } from '@_types/Base'
import { IndexName, Name } from '@_types/common'
import { QueryContainer } from '@_types/query_dsl/abstractions/container/QueryContainer'
import { Dictionary } from '_spec_utils/Dictionary'

export class SearchShardsResponse extends ResponseBase {
  nodes: Dictionary<string, NodeAttributes>
  shards: NodeShard[][]
  indices: Dictionary<IndexName, ShardStoreIndex>
}

export class ShardStoreIndex {
  aliases?: Name[]
  filter?: QueryContainer
}
