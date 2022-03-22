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
import { Indices } from '@_types/common'
import { Time } from '@_types/Time'

/**
 * A search request by default executes against the most recent visible data of the target indices,
 * which is called point in time. Elasticsearch pit (point in time) is a lightweight view into the
 * state of the data as it existed when initiated. In some cases, it’s preferred to perform multiple
 * search requests using the same point in time. For example, if refreshes happen between
 * `search_after` requests, then the results of those requests might not be consistent as changes happening
 * between searches are only visible to the more recent point in time.
 * @rest_spec_name open_point_in_time
 * @since 7.10.0
 * @stability stable
 * @doc_id point-in-time-api
 * @index_privileges read
 */
export interface Request extends RequestBase {
  path_parts: {
    index: Indices
  }
  query_parameters: {
    keep_alive: Time
    ignore_unavailable?: boolean
  }
}
