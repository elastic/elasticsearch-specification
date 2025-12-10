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
import {
  ExpandWildcards,
  Indices,
  MediaType,
  Routing,
  SearchType
} from '@_types/common'
import { long } from '@_types/Numeric'
import { RequestItem } from './types'

/**
 * Run multiple searches.
 *
 * The format of the request is similar to the bulk API format and makes use of the newline delimited JSON (NDJSON) format.
 * The structure is as follows:
 *
 * ```
 * header\n
 * body\n
 * header\n
 * body\n
 * ```
 *
 * This structure is specifically optimized to reduce parsing if a specific search ends up redirected to another node.
 *
 * IMPORTANT: The final line of data must end with a newline character `\n`.
 * Each newline character may be preceded by a carriage return `\r`.
 * When sending requests to this endpoint the `Content-Type` header should be set to `application/x-ndjson`.
 * @rest_spec_name msearch
 * @availability stack since=1.3.0 stability=stable
 * @availability serverless stability=stable visibility=public
 * @index_privileges read
 * @doc_tag search
 * @doc_id search-multi-search
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_msearch'
      methods: ['GET', 'POST']
    },
    {
      path: '/{index}/_msearch'
      methods: ['GET', 'POST']
    }
  ]
  path_parts: {
    /**
     * Comma-separated list of data streams, indices, and index aliases to search.
     */
    index?: Indices
  }
  request_media_type: MediaType.Ndjson
  response_media_type: MediaType.Json
  query_parameters: {
    /**
     * If false, the request returns an error if any wildcard expression, index alias, or _all value targets only missing or closed indices. This behavior applies even if the request targets other open indices. For example, a request targeting foo*,bar* returns an error if an index starts with foo but no index starts with bar.
     */
    allow_no_indices?: boolean
    /**
     * If true, network roundtrips between the coordinating node and remote clusters are minimized for cross-cluster search requests.
     * @server_default true
     * @doc_id ccs-network-delays
     */
    ccs_minimize_roundtrips?: boolean
    /**
     * Type of index that wildcard expressions can match. If the request can target data streams, this argument determines whether wildcard expressions match hidden data streams.
     * @server_default open
     */
    expand_wildcards?: ExpandWildcards
    /**
     * If true, concrete, expanded or aliased indices are ignored when frozen.
     * @deprecated 7.16.0 This parameter is deprecated because frozen indices have been deprecated.
     * @server_default false
     */
    ignore_throttled?: boolean
    /**
     * If true, missing or closed indices are not included in the response.
     * @server_default false
     */
    ignore_unavailable?: boolean
    /**
     * Indicates whether hit.matched_queries should be rendered as a map that includes
     * the name of the matched query associated with its score (true)
     * or as an array containing the name of the matched queries (false)
     * This functionality reruns each named query on every hit in a search response.
     * Typically, this adds a small overhead to a request.
     * However, using computationally expensive named queries on a large number of hits may add significant overhead.
     * @server_default false
     */
    include_named_queries_score?: boolean
    /**
     * Comma-separated list of data streams, indices, and index aliases to use as default
     */
    index?: Indices
    /**
     * Maximum number of concurrent searches the multi search API can execute.
     */
    max_concurrent_searches?: long
    /**
     * Maximum number of concurrent shard requests that each sub-search request executes per node.
     * @server_default 5
     */
    max_concurrent_shard_requests?: long
    /**
     * Defines a threshold that enforces a pre-filter roundtrip to prefilter search shards based on query rewriting if the number of shards the search request expands to exceeds the threshold. This filter roundtrip can limit the number of shards significantly if for instance a shard can not match any documents based on its rewrite method i.e., if date filters are mandatory to match but the shard bounds and the query are disjoint.
     */
    pre_filter_shard_size?: long
    /**
     * If true, hits.total are returned as an integer in the response. Defaults to false, which returns an object.
     * @server_default false
     */
    rest_total_hits_as_int?: boolean
    /**
     * Custom routing value used to route search operations to a specific shard.
     */
    routing?: Routing
    /**
     * Indicates whether global term and document frequencies should be used when scoring returned documents.
     */
    search_type?: SearchType
    /**
     * Specifies whether aggregation and suggester names should be prefixed by their respective types in the response.
     */
    typed_keys?: boolean
  }
  /** @codegen_name searches */
  body: Array<RequestItem>
}
