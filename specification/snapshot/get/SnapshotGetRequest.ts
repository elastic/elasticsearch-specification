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
import { SortOrder } from '@_types/sort'
import { Duration } from '@_types/Time'
import { SnapshotSort } from '@snapshot/_types/SnapshotInfo'

/**
 * Get snapshot information.
 * @rest_spec_name snapshot.get
 * @availability stack since=0.0.0 stability=stable
 * @availability serverless stability=stable visibility=private
 * @cluster_privileges monitor_snapshot
 * @doc_id snapshot-get
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_snapshot/{repository}/{snapshot}'
      methods: ['GET']
    }
  ]
  path_parts: {
    /**
     * Comma-separated list of snapshot repository names used to limit the request. Wildcard (*) expressions are supported.
     */
    repository: Name
    /**
     * Comma-separated list of snapshot names to retrieve. Also accepts wildcards (*).
     * - To get information about all snapshots in a registered repository, use a wildcard (*) or _all.
     * - To get information about any snapshots that are currently running, use _current.
     */
    snapshot: Names
  }
  query_parameters: {
    /**
     * If false, the request returns an error for any snapshots that are unavailable.
     * @server_default false
     */
    ignore_unavailable?: boolean
    /**
     * Period to wait for a connection to the master node. If no response is received before the timeout expires, the request fails and returns an error.
     * @server_default 30s
     */
    master_timeout?: Duration
    /**
     * If true, returns additional information about each snapshot such as the version of Elasticsearch which took the snapshot, the start and end times of the snapshot, and the number of shards snapshotted.
     * @server_default true
     */
    verbose?: boolean
    /**
     * If true, returns additional information about each index in the snapshot comprising the number of shards in the index, the total size of the index in bytes, and the maximum number of segments per shard in the index. Defaults to false, meaning that this information is omitted.
     * @server_default false
     * @availability stack since=7.13.0
     * @availability serverless
     */
    index_details?: boolean
    /**
     * If true, returns the name of each index in each snapshot.
     * @server_default true
     * @availability stack since=8.3.0
     * @availability serverless
     */
    index_names?: boolean
    /**
     * If true, returns the repository name in each snapshot.
     * @server_default true
     */
    include_repository?: boolean
    /**
     * Allows setting a sort order for the result. Defaults to start_time, i.e. sorting by snapshot start time stamp.
     * @server_default start_time
     * @availability stack since=7.14.0
     * @availability serverless
     */
    sort?: SnapshotSort
    /**
     * Maximum number of snapshots to return. Defaults to 0 which means return all that match the request without limit.
     * @server_default 0
     * @availability stack since=7.14.0
     * @availability serverless
     */
    size?: integer
    /**
     * Sort order. Valid values are asc for ascending and desc for descending order. Defaults to asc, meaning ascending order.
     * @server_default asc
     * @availability stack since=7.14.0
     * @availability serverless
     */
    order?: SortOrder
    /**
     * Offset identifier to start pagination from as returned by the next field in the response body.
     * @availability stack since=7.14.0
     * @availability serverless
     */
    after?: string
    /**
     * Numeric offset to start pagination from based on the snapshots matching this request. Using a non-zero value for this parameter is mutually exclusive with using the after parameter. Defaults to 0.
     * @server_default 0
     * @availability stack since=7.15.0
     * @availability serverless
     */
    offset?: integer
    /**
     * Value of the current sort column at which to start retrieval. Can either be a string snapshot- or repository name when sorting by snapshot or repository name, a millisecond time value or a number when sorting by index- or shard count.
     * @availability stack since=7.16.0
     * @availability serverless
     */
    from_sort_value?: string
    /**
     * Filter snapshots by a comma-separated list of SLM policy names that snapshots belong to. Also accepts wildcards (*) and combinations of wildcards followed by exclude patterns starting with -. To include snapshots not created by an SLM policy you can use the special pattern _none that will match all snapshots without an SLM policy.
     * @availability stack since=7.16.0
     * @availability serverless
     */
    slm_policy_filter?: Name
  }
}
