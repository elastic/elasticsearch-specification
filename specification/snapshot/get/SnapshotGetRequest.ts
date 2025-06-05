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
 *
 * NOTE: The `after` parameter and `next` field enable you to iterate through snapshots with some consistency guarantees regarding concurrent creation or deletion of snapshots.
 * It is guaranteed that any snapshot that exists at the beginning of the iteration and is not concurrently deleted will be seen during the iteration.
 * Snapshots concurrently created may be seen during an iteration.
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
     * A comma-separated list of snapshot repository names used to limit the request.
     * Wildcard (`*`) expressions are supported.
     */
    repository: Name
    /**
     * A comma-separated list of snapshot names to retrieve
     * Wildcards (`*`) are supported.
     *
     * * To get information about all snapshots in a registered repository, use a wildcard (`*`) or `_all`.
     * * To get information about any snapshots that are currently running, use `_current`.
     */
    snapshot: Names
  }
  query_parameters: {
    /**
     * An offset identifier to start pagination from as returned by the next field in the response body.
     * @availability stack since=7.14.0
     * @availability serverless
     */
    after?: string
    /**
     * The value of the current sort column at which to start retrieval.
     * It can be a string `snapshot-` or a repository name when sorting by snapshot or repository name.
     * It can be a millisecond time value or a number when sorting by `index-` or shard count.
     * @availability stack since=7.16.0
     * @availability serverless
     */
    from_sort_value?: string
    /**
     * If `false`, the request returns an error for any snapshots that are unavailable.
     * @server_default false
     */
    ignore_unavailable?: boolean
    /**
     * If `true`, the response includes additional information about each index in the snapshot comprising the number of shards in the index, the total size of the index in bytes, and the maximum number of segments per shard in the index.
     * The default is `false`, meaning that this information is omitted.
     * @server_default false
     * @availability stack since=7.13.0
     * @availability serverless
     */
    index_details?: boolean
    /**
     * If `true`, the response includes the name of each index in each snapshot.
     * @server_default true
     * @availability stack since=8.3.0
     * @availability serverless
     */
    index_names?: boolean
    /**
     * If `true`, the response includes the repository name in each snapshot.
     * @server_default true
     */
    include_repository?: boolean
    /**
     * The period to wait for a connection to the master node.
     * If no response is received before the timeout expires, the request fails and returns an error.
     * @server_default 30s
     */
    master_timeout?: Duration
    /**
     * The sort order.
     * Valid values are `asc` for ascending and `desc` for descending order.
     * The default behavior is ascending order.
     * @server_default asc
     * @availability stack since=7.14.0
     * @availability serverless
     */
    order?: SortOrder
    /**
     * Numeric offset to start pagination from based on the snapshots matching this request. Using a non-zero value for this parameter is mutually exclusive with using the after parameter. Defaults to 0.
     * @server_default 0
     * @availability stack since=7.15.0
     * @availability serverless
     */
    offset?: integer
    /**
     * The maximum number of snapshots to return.
     * The default is 0, which means to return all that match the request without limit.
     * @server_default 0
     * @availability stack since=7.14.0
     * @availability serverless
     */
    size?: integer
    /**
     * Filter snapshots by a comma-separated list of snapshot lifecycle management (SLM) policy names that snapshots belong to.
     *
     * You can use wildcards (`*`) and combinations of wildcards followed by exclude patterns starting with `-`.
     * For example, the pattern `*,-policy-a-\*` will return all snapshots except for those that were created by an SLM policy with a name starting with `policy-a-`.
     * Note that the wildcard pattern `*` matches all snapshots created by an SLM policy but not those snapshots that were not created by an SLM policy.
     * To include snapshots that were not created by an SLM policy, you can use the special pattern `_none` that will match all snapshots without an SLM policy.
     * @availability stack since=7.16.0
     * @availability serverless
     */
    slm_policy_filter?: Name
    /**
     * The sort order for the result.
     * The default behavior is sorting by snapshot start time stamp.
     * @server_default start_time
     * @availability stack since=7.14.0
     * @availability serverless
     */
    sort?: SnapshotSort
    /**
     * If `true`, returns additional information about each snapshot such as the version of Elasticsearch which took the snapshot, the start and end times of the snapshot, and the number of shards snapshotted.
     *
     * NOTE: The parameters `size`, `order`, `after`, `from_sort_value`, `offset`, `slm_policy_filter`, and `sort` are not supported when you set `verbose=false` and the sort order for requests with `verbose=false` is undefined.
     * @server_default true
     */
    verbose?: boolean
  }
}
