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
import { Bytes, ExpandWildcards, HealthStatus, Indices } from '@_types/common'
import { TimeUnit } from '@_types/Time'

/**
 * Returns high-level information about indices in a cluster, including backing indices for data streams.
 * IMPORTANT: cat APIs are only intended for human consumption using the command line or Kibana console.
 * They are not intended for use by applications. For application consumption, use the get index API.
 * Use the cat indices API to get the following information for each index in a cluster: shard count; document count; deleted document count; primary store size; total store size of all shards, including shard replicas.
 * These metrics are retrieved directly from Lucene, which Elasticsearch uses internally to power indexing and search. As a result, all document counts include hidden nested documents.
 * To get an accurate count of Elasticsearch documents, use the cat count or count APIs.
 * @rest_spec_name cat.indices
 * @availability stack since=0.0.0 stability=stable
 * @availability serverless stability=stable visibility=public
 * @doc_id cat-indices
 * @cluster_privileges monitor
 * @index_privileges monitor
 */
export interface Request extends CatRequestBase {
  path_parts: {
    /**
     * Comma-separated list of data streams, indices, and aliases used to limit the request.
     * Supports wildcards (`*`). To target all data streams and indices, omit this parameter or use `*` or `_all`.
     */
    index?: Indices
  }
  query_parameters: {
    /** The unit used to display byte values. */
    bytes?: Bytes
    /**
     * The type of index that wildcard patterns can match.
     */
    expand_wildcards?: ExpandWildcards
    /** The health status used to limit returned indices. By default, the response includes indices of any health status. */
    health?: HealthStatus
    /**
     * If true, the response includes information from segments that are not loaded into memory.
     * @server_default false
     */
    include_unloaded_segments?: boolean
    /**
     * If true, the response only includes information from primary shards.
     * @server_default false
     */
    pri?: boolean
    /** The unit used to display time values. */
    time?: TimeUnit
  }
}
