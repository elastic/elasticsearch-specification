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
import { Name, Names } from '@_types/common'
import { integer } from '@_types/Numeric'
import { Time } from '@_types/Time'

/**
 * @rest_spec_name snapshot.get
 * @since 0.0.0
 * @stability TODO
 */
export interface Request extends RequestBase {
  path_parts: {
    repository: Name
    snapshot: Names
  }
  query_parameters?: {
    /**
     * If false, the request returns an error for any snapshots that are unavailable.
     * @server_default false
     */
    ignore_unavailable?: boolean
    /**
     * Period to wait for a connection to the master node. If no response is received before the timeout expires, the request fails and returns an error.
     * @server_default 30s
     */
    master_timeout?: Time
    /**
     * If true, returns additional information about each snapshot such as the version of Elasticsearch which took the snapshot, the start and end times of the snapshot, and the number of shards snapshotted.
     * @server_default true
     */
    verbose?: boolean
    /**
     * If true, returns additional information about each index in the snapshot comprising the number of shards in the index, the total size of the index in bytes, and the maximum number of segments per shard in the index.
     * @server_default false
     * @since 7.13.0
     */
    index_details?: boolean
    human?: boolean
    /** @since 7.14.0 */
    include_repository?: boolean
    /**
     * Allows setting a sort order for the result. i.e. sorting by snapshot start time stamp.
     * @server_default start_time
     * @since 7.14.0
     */
    sort?: string
    /**
     * Maximum number of snapshots to return. Defaults to 0 which means return all that match the request without limit.
     * @server_default 0
     * @since 7.14.0
     */
    size?: integer
    /**
     * Sort order. Valid values are asc for ascending and desc for descending order. Defaults to asc, meaning ascending order.
     * @server_default asc
     * @since 7.14.0
     */
    order?: string
    /**
     * Offset identifier to start pagination from as returned by the next field in the response body.
     * @since 7.14.0
     */
    after?: string
  }
}
