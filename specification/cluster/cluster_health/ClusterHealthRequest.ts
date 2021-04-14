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

import { Indices, WaitForActiveShards } from '../../__common/common'
import { ExpandWildcards } from '../../__common/common/ExpandWildcards'
import { Level } from '../../__common/common/Level'
import { WaitForEvents } from '../../__common/common/WaitForEvents'
import { WaitForStatus } from '../../__common/common/WaitForStatus'
import { RequestBase } from '../../__common/common_abstractions/request/RequestBase'
import { Time } from '../../__common/common_options/time_unit/Time'

/**
 * @rest_spec_name cluster.health
 * @since 0.0.0
 * @stability TODO
 */
export interface ClusterHealthRequest extends RequestBase {
  path_parts?: {
    index?: Indices
  }
  query_parameters?: {
    expand_wildcards?: ExpandWildcards
    level?: Level
    local?: boolean
    master_timeout?: Time
    timeout?: Time
    wait_for_active_shards?: WaitForActiveShards
    wait_for_events?: WaitForEvents
    wait_for_nodes?: string
    wait_for_no_initializing_shards?: boolean
    wait_for_no_relocating_shards?: boolean
    wait_for_status?: WaitForStatus
  }
  body?: {}
}
