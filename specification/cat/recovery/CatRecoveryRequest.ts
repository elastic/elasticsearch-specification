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

import { CatRequestBase } from '@cat/_types/CatBase'
import { Bytes, Indices } from '@_types/common'

/**
 * Returns information about ongoing and completed shard recoveries.
 * Shard recovery is the process of initializing a shard copy, such as restoring a primary shard from a snapshot or syncing a replica shard from a primary shard. When a shard recovery completes, the recovered shard is available for search and indexing.
 * For data streams, the API returns information about the stream’s backing indices.
 * IMPORTANT: cat APIs are only intended for human consumption using the command line or Kibana console. They are not intended for use by applications. For application consumption, use the index recovery API.
 * @rest_spec_name cat.recovery
 * @availability stack since=0.0.0 stability=stable
 * @doc_id cat-recovery
 * @cluster_privileges monitor
 * @index_privileges monitor
 */
export interface Request extends CatRequestBase {
  path_parts: {
    /**
     * A comma-separated list of data streams, indices, and aliases used to limit the request.
     * Supports wildcards (`*`). To target all data streams and indices, omit this parameter or use `*` or `_all`.
     */
    index?: Indices
  }
  query_parameters: {
    /**
     * If `true`, the response only includes ongoing shard recoveries.
     * @server_default false
     */
    active_only?: boolean
    /**
     * The unit used to display byte values.
     */
    bytes?: Bytes
    /**
     * If `true`, the response includes detailed information about shard recoveries.
     * @server_default false
     */
    detailed?: boolean
  }
}
