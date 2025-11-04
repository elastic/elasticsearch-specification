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
import { Duration } from '@_types/Time'

/**
 * Get the snapshot status.
 * Get a detailed description of the current state for each shard participating in the snapshot.
 *
 * Note that this API should be used only to obtain detailed shard-level information for ongoing snapshots.
 * If this detail is not needed or you want to obtain information about one or more existing snapshots, use the get snapshot API.
 *
 * If you omit the `<snapshot>` request path parameter, the request retrieves information only for currently running snapshots.
 * This usage is preferred.
 * If needed, you can specify `<repository>` and `<snapshot>` to retrieve information for specific snapshots, even if they're not currently running.
 *
 * Note that the stats will not be available for any shard snapshots in an ongoing snapshot completed by a node that (even momentarily) left the cluster.
 * Loading the stats from the repository is an expensive operation (see the WARNING below).
 * Therefore the stats values for such shards will be -1 even though the "stage" value will be "DONE", in order to minimize latency.
 * A "description" field will be present for a shard snapshot completed by a departed node explaining why the shard snapshot's stats results are invalid.
 * Consequently, the total stats for the index will be less than expected due to the missing values from these shards.
 *
 * WARNING: Using the API to return the status of any snapshots other than currently running snapshots can be expensive.
 * The API requires a read from the repository for each shard in each snapshot.
 * For example, if you have 100 snapshots with 1,000 shards each, an API request that includes all snapshots will require 100,000 reads (100 snapshots x 1,000 shards).
 *
 * Depending on the latency of your storage, such requests can take an extremely long time to return results.
 * These requests can also tax machine resources and, when using cloud storage, incur high processing costs.
 * @rest_spec_name snapshot.status
 * @availability stack since=7.8.0 stability=stable
 * @availability serverless stability=stable visibility=private
 * @cluster_privileges monitor_snapshot
 * @doc_id snapshot-status
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_snapshot/_status'
      methods: ['GET']
    },
    {
      path: '/_snapshot/{repository}/_status'
      methods: ['GET']
    },
    {
      path: '/_snapshot/{repository}/{snapshot}/_status'
      methods: ['GET']
    }
  ]
  path_parts: {
    /**
     * The snapshot repository name used to limit the request.
     * It supports wildcards (`*`) if `<snapshot>` isn't specified.
     */
    repository?: Name
    /**
     * A comma-separated list of snapshots to retrieve status for.
     * The default is currently running snapshots.
     * Wildcards (`*`) are not supported.
     */
    snapshot?: Names
  }
  query_parameters: {
    /**
     * If `false`, the request returns an error for any snapshots that are unavailable.
     * If `true`, the request ignores snapshots that are unavailable, such as those that are corrupted or temporarily cannot be returned.
     * @server_default false
     */
    ignore_unavailable?: boolean
    /**
     * The period to wait for the master node.
     * If the master node is not available before the timeout expires, the request fails and returns an error.
     * To indicate that the request should never timeout, set it to `-1`.
     * @server_default 30s
     */
    master_timeout?: Duration
  }
}
