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
import { Indices, Name, Routing } from '@_types/common'
import { QueryContainer } from '@_types/query_dsl/abstractions'
import { Duration } from '@_types/Time'

/**
 * Create or update an alias.
 * Adds a data stream or index to an alias.
 * @rest_spec_name indices.put_alias
 * @availability stack stability=stable
 * @availability serverless stability=stable visibility=public
 * @doc_id alias-update
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/{index}/_alias/{name}'
      methods: ['PUT', 'POST']
    },
    {
      path: '/{index}/_aliases/{name}'
      methods: ['PUT', 'POST']
    }
  ]
  path_parts: {
    /**
     * Comma-separated list of data streams or indices to add.
     * Supports wildcards (`*`).
     * Wildcard patterns that match both data streams and indices return an error.
     */
    index: Indices
    /**
     * Alias to update.
     * If the alias doesn’t exist, the request creates it.
     * Index alias names support date math.
     * @doc_id api-date-math-index-names
     */
    name: Name
  }
  query_parameters: {
    /**
     * Period to wait for a connection to the master node.
     * If no response is received before the timeout expires, the request fails and returns an error.
     * @server_default 30s
     */
    master_timeout?: Duration
    /**
     * Period to wait for a response.
     * If no response is received before the timeout expires, the request fails and returns an error.
     * @server_default 30s
     */
    timeout?: Duration
  }
  body: {
    /**
     * Query used to limit documents the alias can access.
     */
    filter?: QueryContainer
    /**
     * Value used to route indexing operations to a specific shard.
     * If specified, this overwrites the `routing` value for indexing operations.
     * Data stream aliases don’t support this parameter.
     */
    index_routing?: Routing
    /**
     * If `true`, sets the write index or data stream for the alias.
     * If an alias points to multiple indices or data streams and `is_write_index` isn’t set, the alias rejects write requests.
     * If an index alias points to one index and `is_write_index` isn’t set, the index automatically acts as the write index.
     * Data stream aliases don’t automatically set a write data stream, even if the alias points to one data stream.
     */
    is_write_index?: boolean
    /**
     * Value used to route indexing and search operations to a specific shard.
     * Data stream aliases don’t support this parameter.
     */
    routing?: Routing
    /**
     * Value used to route search operations to a specific shard.
     * If specified, this overwrites the `routing` value for search operations.
     * Data stream aliases don’t support this parameter.
     */
    search_routing?: Routing
  }
}
