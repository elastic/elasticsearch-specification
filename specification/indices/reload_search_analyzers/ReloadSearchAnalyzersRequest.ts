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
import { ExpandWildcards, Indices } from '@_types/common'

/**
 * Reload search analyzers.
 *
 * Reload an index's search analyzers and their resources.
 * For data streams, the API reloads search analyzers and resources for the stream's backing indices.
 *
 * IMPORTANT: After reloading the search analyzers you should clear the request cache to make sure it doesn't contain responses derived from the previous versions of the analyzer.
 *
 * You can use the reload search analyzers API to pick up changes to synonym files used in the `synonym_graph` or `synonym` token filter of a search analyzer.
 * To be eligible, the token filter must have an `updateable` flag of `true` and only be used in search analyzers.
 *
 * NOTE: This API does not perform a reload for each shard of an index.
 * Instead, it performs a reload for each node containing index shards.
 * As a result, the total shard count returned by the API can differ from the number of index shards.
 * Because reloading affects every node with an index shard, it is important to update the synonym file on every data node in the cluster--including nodes that don't contain a shard replica--before using this API.
 * This ensures the synonym file is updated everywhere in the cluster in case shards are relocated in the future.
 * @rest_spec_name indices.reload_search_analyzers
 * @availability stack since=7.3.0 stability=stable
 * @index_privileges manage
 * @doc_id indices-reload-analyzers
 * @ext_doc_id search-analyzer
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/{index}/_reload_search_analyzers'
      methods: ['GET', 'POST']
    }
  ]
  path_parts: {
    /** A comma-separated list of index names to reload analyzers for */
    index: Indices
  }
  query_parameters: {
    /**
     * Whether to ignore if a wildcard indices expression resolves into no concrete indices.
     * (This includes `_all` string or when no indices have been specified)
     */
    allow_no_indices?: boolean
    /**
     * Whether to expand wildcard expression to concrete indices that are open, closed or both.
     * @server_default open
     */
    expand_wildcards?: ExpandWildcards
    /**
     * Whether specified concrete indices should be ignored when unavailable (missing or closed)
     */
    ignore_unavailable?: boolean
    /**
     * Changed resource to reload analyzers from if applicable
     */
    resource?: string
  }
}
