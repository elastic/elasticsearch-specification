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

import { RequestBase } from '@_types/Base'
import { Conflicts, Slices, WaitForActiveShards } from '@_types/common'
import { float, long } from '@_types/Numeric'
import { Script } from '@_types/Scripting'
import { Duration } from '@_types/Time'
import { Destination, Source } from './types'

/**
 * @rest_spec_name reindex
 * @since 2.3.0
 * @stability stable
 */
export interface Request extends RequestBase {
  query_parameters: {
    refresh?: boolean
    requests_per_second?: float
    scroll?: Duration
    slices?: Slices
    timeout?: Duration
    wait_for_active_shards?: WaitForActiveShards
    wait_for_completion?: boolean
    require_alias?: boolean
  }
  body: {
    conflicts?: Conflicts
    dest: Destination
    max_docs?: long
    script?: Script
    size?: long
    source: Source
  }
}
