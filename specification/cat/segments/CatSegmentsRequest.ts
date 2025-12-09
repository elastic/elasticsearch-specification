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

import { ExpandWildcards, Indices, MediaType, Names } from '@_types/common'
import { Duration } from '@_types/Time'
import { CatRequestBase, CatSegmentsColumns } from '@cat/_types/CatBase'

/**
 * Get segment information.
 *
 * Get low-level information about the Lucene segments in index shards.
 * For data streams, the API returns information about the backing indices.
 * IMPORTANT: cat APIs are only intended for human consumption using the command line or Kibana console. They are not intended for use by applications. For application consumption, use the index segments API.
 * @rest_spec_name cat.segments
 * @availability stack stability=stable
 * @availability serverless stability=stable visibility=private
 * @doc_id cat-segments
 * @cluster_privileges monitor
 * @index_privileges monitor
 */
export interface Request extends CatRequestBase {
  urls: [
    {
      path: '/_cat/segments'
      methods: ['GET']
    },
    {
      path: '/_cat/segments/{index}'
      methods: ['GET']
    }
  ]
  path_parts: {
    /**
     * A comma-separated list of data streams, indices, and aliases used to limit the request.
     * Supports wildcards (`*`).
     * To target all data streams and indices, omit this parameter or use `*` or `_all`.
     */
    index?: Indices
  }
  response_media_type: MediaType.Text | MediaType.Json
  query_parameters: {
    /**
     * A comma-separated list of columns names to display.
     * It supports simple wildcards.
     * @server_default ip,hp,rp,r,m,n,cpu,l
     */
    h?: CatSegmentsColumns
    /**
     * A comma-separated list of column names or aliases that determines the sort order.
     * Sorting defaults to ascending and can be changed by setting `:asc`
     * or `:desc` as a suffix to the column name.
     */
    s?: Names
    /**
     * If `true`, the request computes the list of selected nodes from the
     * local cluster state. If `false` the list of selected nodes are computed
     * from the cluster state of the master node. In both cases the coordinating
     * node will send requests for further information to each selected node.
     * @server_default false
     */
    local?: boolean
    /**
     * Period to wait for a connection to the master node.
     * @server_default 30s
     */
    master_timeout?: Duration
    /**
     * Type of index that wildcard expressions can match. If the request can target data streams, this argument
     * determines whether wildcard expressions match hidden data streams. Supports comma-separated values,
     * such as open,hidden.
     * @server_default open
     */
    expand_wildcards?: ExpandWildcards
    /**
     * If false, the request returns an error if any wildcard expression, index alias, or _all value targets only
     * missing or closed indices. This behavior applies even if the request targets other open indices. For example,
     * a request targeting foo*,bar* returns an error if an index starts with foo but no index starts with bar.
     * @server_default true
     */
    allow_no_indices?: boolean
    /**
     * If true, concrete, expanded or aliased indices are ignored when frozen.
     * @server_default false
     */
    ignore_throttled?: boolean
    /**
     * If true, missing or closed indices are not included in the response.
     * @server_default false
     */
    ignore_unavailable?: boolean
    /**
     * If true, allow closed indices to be returned in the response otherwise if false, keep the legacy behaviour
     * of throwing an exception if index pattern matches closed indices
     * @server_default false
     */
    allow_closed?: boolean
  }
}
