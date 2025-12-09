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

import { Indices, MediaType, Names } from '@_types/common'
import { Duration } from '@_types/Time'
import { CatRequestBase, CatShardColumns } from '@cat/_types/CatBase'

/**
 * Get shard information.
 *
 * Get information about the shards in a cluster.
 * For data streams, the API returns information about the backing indices.
 * IMPORTANT: cat APIs are only intended for human consumption using the command line or Kibana console. They are not intended for use by applications.
 * @rest_spec_name cat.shards
 * @availability stack stability=stable
 * @availability serverless stability=stable visibility=private
 * @doc_id cat-shards
 * @cluster_privileges monitor
 * @index_privileges monitor
 */
export interface Request extends CatRequestBase {
  urls: [
    {
      path: '/_cat/shards'
      methods: ['GET']
    },
    {
      path: '/_cat/shards/{index}'
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
     * List of columns to appear in the response. Supports simple wildcards.
     */
    h?: CatShardColumns
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
