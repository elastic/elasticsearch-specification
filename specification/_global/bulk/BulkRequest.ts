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
import {
  Fields,
  IndexName,
  Refresh,
  Routing,
  Type,
  WaitForActiveShards
} from '@_types/common'
import { Time } from '@_types/Time'
import { BulkOperationContainer } from './BulkOperation'

/**
 * @rest_spec_name bulk
 * @since 0.0.0
 * @stability stable
 *
 */
export interface Request<TSource> extends RequestBase {
  path_parts?: {
    index?: IndexName
    type?: Type
  }
  query_parameters?: {
    pipeline?: string
    refresh?: Refresh
    routing?: Routing
    _source?: boolean | Fields
    _source_excludes?: Fields
    _source_includes?: Fields
    timeout?: Time
    type?: string
    wait_for_active_shards?: WaitForActiveShards
    require_alias?: boolean
  }
  body?: Array<BulkOperationContainer | TSource>
}
