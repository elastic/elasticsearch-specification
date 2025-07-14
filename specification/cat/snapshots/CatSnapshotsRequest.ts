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

import { Names } from '@_types/common'
import { Duration, TimeUnit } from '@_types/Time'
import { CatRequestBase, CatSnapshotsColumns } from '@cat/_types/CatBase'

/**
 * Get snapshot information.
 *
 * Get information about the snapshots stored in one or more repositories.
 * A snapshot is a backup of an index or running Elasticsearch cluster.
 * IMPORTANT: cat APIs are only intended for human consumption using the command line or Kibana console. They are not intended for use by applications. For application consumption, use the get snapshot API.
 * @rest_spec_name cat.snapshots
 * @availability stack since=2.1.0 stability=stable
 * @availability serverless stability=stable visibility=private
 * @doc_id cat-snapshots
 * @cluster_privileges monitor_snapshot
 */
export interface Request extends CatRequestBase {
  urls: [
    {
      path: '/_cat/snapshots'
      methods: ['GET']
    },
    {
      path: '/_cat/snapshots/{repository}'
      methods: ['GET']
    }
  ]
  path_parts: {
    /**
     * A comma-separated list of snapshot repositories used to limit the request.
     * Accepts wildcard expressions.
     * `_all` returns all repositories.
     * If any repository fails during the request, Elasticsearch returns an error.
     */
    repository?: Names
  }
  query_parameters: {
    /**
     * If `true`, the response does not include information from unavailable snapshots.
     * @server_default false
     */
    ignore_unavailable?: boolean
    /**
     * A comma-separated list of columns names to display.
     * It supports simple wildcards.
     * @server_default ip,hp,rp,r,m,n,cpu,l
     */
    h?: CatSnapshotsColumns
    /**
     * List of columns that determine how the table should be sorted.
     * Sorting defaults to ascending and can be changed by setting `:asc`
     * or `:desc` as a suffix to the column name.
     */
    s?: Names
    /**
     * Period to wait for a connection to the master node.
     * @server_default 30s
     */
    master_timeout?: Duration
    /**
     * Unit used to display time values.
     */
    time?: TimeUnit
  }
}
