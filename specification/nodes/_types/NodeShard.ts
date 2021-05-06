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

import { UnassignedInformation } from '@cluster/cluster_allocation_explain/UnassignedInformation'
import { ShardRoutingState } from '@indices/stats/ShardRoutingState'
import { Dictionary } from '@spec_utils/Dictionary'
import { Id, IndexName, NodeName } from '@_types/common'
import { integer } from '@_types/Numeric'

export class NodeShard {
  state: ShardRoutingState
  primary: boolean
  node?: NodeName
  shard: integer
  index: IndexName
  allocation_id?: Dictionary<string, Id>
  recovery_source?: Dictionary<string, Id>
  unassigned_info?: UnassignedInformation
}
