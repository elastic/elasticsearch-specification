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
  IndexAlias,
  IndexName,
  MediaType,
  SearchType
} from '@_types/common'
import { integer, long } from '@_types/Numeric'
import { RequestItem } from '@global/msearch/types'
import { Checkpoint } from '../_types/Checkpoints'

/**
 * Run multiple Fleet searches.
 *
 * Run several Fleet searches with a single API request.
 * The API follows the same structure as the multi search API.
 * However, similar to the Fleet search API, it supports the `wait_for_checkpoints` parameter.
 * @rest_spec_name fleet.msearch
 * @availability stack since=7.16.0 stability=experimental
 * @availability serverless stability=experimental visibility=private
 * @index_privileges read
 * @doc_id fleet-multi-search
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_fleet/_fleet_msearch'
      methods: ['GET', 'POST']
    },
    {
      path: '/{index}/_fleet/_fleet_msearch'
      methods: ['GET', 'POST']
    }
  ]
  path_parts: {
    /**
     * A single target to search. If the target is an index alias, it must resolve to a single index.
     */
    // eslint-disable-next-line es-spec-validator/no-inline-unions -- TODO: create named alias
    index?: IndexName | IndexAlias
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
     */
    expand_wildcards?: ExpandWildcards
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
     * Maximum number of concurrent searches the multi search API can execute.
     */
    max_concurrent_searches?: integer
    /**
     * Maximum number of concurrent shard requests that each sub-search request executes per node.
     * @server_default 5
     */
    max_concurrent_shard_requests?: integer
    /**
     * Defines a threshold that enforces a pre-filter roundtrip to prefilter search shards based on query rewriting if the number of shards the search request expands to exceeds the threshold. This filter roundtrip can limit the number of shards significantly if for instance a shard can not match any documents based on its rewrite method i.e., if date filters are mandatory to match but the shard bounds and the query are disjoint.
     */
    pre_filter_shard_size?: long
    /**
     * Indicates whether global term and document frequencies should be used when scoring returned documents.
     */
    search_type?: SearchType
    /**
     * If true, hits.total are returned as an integer in the response. Defaults to false, which returns an object.
     * @server_default false
     */
    rest_total_hits_as_int?: boolean
    /**
     * Specifies whether aggregation and suggester names should be prefixed by their respective types in the response.
     */
    typed_keys?: boolean
    /**
     *  A comma separated list of checkpoints. When configured, the search API will only be executed on a shard
     * after the relevant checkpoint has become visible for search. Defaults to an empty list which will cause
     * Elasticsearch to immediately execute the search.
     * @server_default []
     */
    wait_for_checkpoints?: Checkpoint[]
    /**
     * If true, returns partial results if there are shard request timeouts or shard failures.
     * If false, returns an error with no partial results.
     * Defaults to the configured cluster setting `search.default_allow_partial_results`, which is true by default.
     */
    allow_partial_search_results?: boolean
  }
  /** @codegen_name searches */
  body: Array<RequestItem>
}
