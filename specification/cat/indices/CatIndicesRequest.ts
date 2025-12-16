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

import {
  ExpandWildcards,
  HealthStatus,
  Indices,
  MediaType,
  Names
} from '@_types/common'
import { Duration } from '@_types/Time'
import { CatIndicesColumns, CatRequestBase } from '@cat/_types/CatBase'

/**
 * Get index information.
 *
 * Get high-level information about indices in a cluster, including backing indices for data streams.
 *
 * Use this request to get the following information for each index in a cluster:
 * - shard count
 * - document count
 * - deleted document count
 * - primary store size
 * - total store size of all shards, including shard replicas
 *
 * These metrics are retrieved directly from Lucene, which Elasticsearch uses internally to power indexing and search. As a result, all document counts include hidden nested documents.
 * To get an accurate count of Elasticsearch documents, use the cat count or count APIs.
 *
 * CAT APIs are only intended for human consumption using the command line or Kibana console.
 * They are not intended for use by applications. For application consumption, use an index endpoint.
 * @rest_spec_name cat.indices
 * @availability stack stability=stable
 * @availability serverless stability=stable visibility=public
 * @doc_id cat-indices
 * @cluster_privileges monitor
 * @index_privileges monitor
 */
export interface Request extends CatRequestBase {
  urls: [
    {
      path: '/_cat/indices'
      methods: ['GET']
    },
    {
      path: '/_cat/indices/{index}'
      methods: ['GET']
    }
  ]
  path_parts: {
    /**
     * Comma-separated list of data streams, indices, and aliases used to limit the request.
     * Supports wildcards (`*`). To target all data streams and indices, omit this parameter or use `*` or `_all`.
     */
    index?: Indices
  }
  response_media_type: MediaType.Text | MediaType.Json
  query_parameters: {
    /**
     * The type of index that wildcard patterns can match.
     * @server_default all
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
    /**
     * Period to wait for a connection to the master node.
     * @server_default 30s
     */
    master_timeout?: Duration
    /**
     * A comma-separated list of columns names to display. It supports simple wildcards.
     */
    h?: CatIndicesColumns
    /**
     * List of columns that determine how the table should be sorted.
     * Sorting defaults to ascending and can be changed by setting `:asc`
     * or `:desc` as a suffix to the column name.
     */
    s?: Names
  }
}
