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
import { Duration } from '@_types/Time'
import { CatNodeColumns, CatRequestBase } from '@cat/_types/CatBase'

/**
 * Get node information.
 *
 * Get information about the nodes in a cluster.
 * IMPORTANT: cat APIs are only intended for human consumption using the command line or Kibana console. They are not intended for use by applications. For application consumption, use the nodes info API.
 * @rest_spec_name cat.nodes
 * @availability stack stability=stable
 * @availability serverless stability=stable visibility=private
 * @doc_id cat-nodes
 * @cluster_privileges monitor
 */
export interface Request extends CatRequestBase {
  urls: [
    {
      path: '/_cat/nodes'
      methods: ['GET']
    }
  ]
  query_parameters: {
    /**
     * If `true`, return the full node ID. If `false`, return the shortened node ID.
     * @server_default false
     */
    full_id?: boolean | string
    /**
     * If true, the response includes information from segments that are not loaded into memory.
     * @server_default false
     */
    include_unloaded_segments?: boolean
    /**
     * A comma-separated list of columns names to display.
     * It supports simple wildcards.
     * @server_default ip,hp,rp,r,m,n,cpu,l
     */
    h?: CatNodeColumns
    /**
     * A comma-separated list of column names or aliases that determines the sort order.
     * Sorting defaults to ascending and can be changed by setting `:asc`
     * or `:desc` as a suffix to the column name.
     */
    s?: Names
    /**
     * The period to wait for a connection to the master node.
     * @server_default 30s
     */
    master_timeout?: Duration
  }
}
