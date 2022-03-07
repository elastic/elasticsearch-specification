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

import { IndexName } from '@_types/common'
import { integer, long } from '@_types/Numeric'
import {
  Decision,
  AllocationDecision,
  ClusterInfo,
  CurrentNode,
  NodeAllocationExplanation,
  UnassignedInformation
} from './types'

export class Response {
  '200': {
    body: {
      allocate_explanation?: string
      allocation_delay?: string
      allocation_delay_in_millis?: long
      can_allocate?: Decision
      can_move_to_other_node?: Decision
      can_rebalance_cluster?: Decision
      can_rebalance_cluster_decisions?: AllocationDecision[]
      can_rebalance_to_other_node?: Decision
      can_remain_decisions?: AllocationDecision[]
      can_remain_on_current_node?: Decision
      cluster_info?: ClusterInfo
      configured_delay?: string
      configured_delay_in_millis?: long
      current_node?: CurrentNode
      current_state: string
      index: IndexName
      move_explanation?: string
      node_allocation_decisions?: NodeAllocationExplanation[]
      primary: boolean
      rebalance_explanation?: string
      remaining_delay?: string
      remaining_delay_in_millis?: long
      shard: integer
      unassigned_info?: UnassignedInformation
      /** @since 7.14.0 */
      note?: string
    }
  }
}
