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
  Conflicts,
  ExpandWildcards,
  Indices,
  Routing,
  SearchType,
  Slices,
  WaitForActiveShards
} from '@_types/common'
import { float, long } from '@_types/Numeric'
import { QueryContainer } from '@_types/query_dsl/abstractions'
import { Operator } from '@_types/query_dsl/Operator'
import { SlicedScroll } from '@_types/SlicedScroll'
import { Duration } from '@_types/Time'

/**
 * Deletes documents that match the specified query.
 * @rest_spec_name delete_by_query
 * @availability stack since=5.0.0 stability=stable
 * @availability serverless stability=stable visibility=public
 */
export interface Request extends RequestBase {
  path_parts: {
    /**
     * Comma-separated list of data streams, indices, and aliases to search.
     * Supports wildcards (`*`).
     * To search all data streams or indices, omit this parameter or use `*` or `_all`.
     */
    index: Indices
  }
  query_parameters: {
    /**
     * If `false`, the request returns an error if any wildcard expression, index alias, or `_all` value targets only missing or closed indices.
     * This behavior applies even if the request targets other open indices.
     * For example, a request targeting `foo*,bar*` returns an error if an index starts with `foo` but no index starts with `bar`.
     * @server_default true
     */
    allow_no_indices?: boolean
    /**
     * Analyzer to use for the query string.
     */
    analyzer?: string
    /**
     * If `true`, wildcard and prefix queries are analyzed.
     * @server_default false
     */
    analyze_wildcard?: boolean
    /**
     * What to do if delete by query hits version conflicts: `abort` or `proceed`.
     * @server_default abort
     */
    conflicts?: Conflicts
    /**
     * The default operator for query string query: `AND` or `OR`.
     * @server_default OR
     */
    default_operator?: Operator
    /**
     * Field to use as default where no field prefix is given in the query string.
     */
    df?: string
    /**
     * Type of index that wildcard patterns can match.
     * If the request can target data streams, this argument determines whether wildcard expressions match hidden data streams.
     * Supports comma-separated values, such as `open,hidden`. Valid values are: `all`, `open`, `closed`, `hidden`, `none`.
     * @server_default open
     */
    expand_wildcards?: ExpandWildcards
    from?: long
    /**
     * If `false`, the request returns an error if it targets a missing or closed index.
     * @server_default false
     */
    ignore_unavailable?: boolean
    /**
     * If `true`, format-based query failures (such as providing text to a numeric field) in the query string will be ignored.
     * @server_default false
     */
    lenient?: boolean
    /**
     * Maximum number of documents to process.
     * Defaults to all documents.
     */
    max_docs?: long
    /**
     * Specifies the node or shard the operation should be performed on.
     * Random by default.
     */
    preference?: string
    /**
     * If `true`, Elasticsearch refreshes all shards involved in the delete by query after the request completes.
     * @server_default false
     */
    refresh?: boolean
    /**
     * If `true`, the request cache is used for this request.
     * Defaults to the index-level setting.
     */
    request_cache?: boolean
    /**
     * The throttle for this request in sub-requests per second.
     */
    requests_per_second?: float
    /**
     * Custom value used to route operations to a specific shard.
     */
    routing?: Routing
    /**
     * Query in the Lucene query string syntax.
     */
    q?: string
    /**
     * Period to retain the search context for scrolling.
     */
    scroll?: Duration
    /**
     * Size of the scroll request that powers the operation.
     * @server_default 1000
     */
    scroll_size?: long
    /**
     * Explicit timeout for each search request.
     * Defaults to no timeout.
     */
    search_timeout?: Duration
    /**
     * The type of the search operation.
     * Available options: `query_then_fetch`, `dfs_query_then_fetch`.
     */
    search_type?: SearchType
    /**
     * The number of slices this task should be divided into.
     * @server_default 1
     */
    slices?: Slices
    /**
     * A comma-separated list of <field>:<direction> pairs.
     */
    sort?: string[]
    /**
     * Specific `tag` of the request for logging and statistical purposes.
     */
    stats?: string[]
    /**
     * Maximum number of documents to collect for each shard.
     * If a query reaches this limit, Elasticsearch terminates the query early.
     * Elasticsearch collects documents before sorting.
     * Use with caution.
     * Elasticsearch applies this parameter to each shard handling the request.
     * When possible, let Elasticsearch perform early termination automatically.
     * Avoid specifying this parameter for requests that target data streams with backing indices across multiple data tiers.
     */
    terminate_after?: long
    /**
     * Period each deletion request waits for active shards.
     * @server_default 1m
     */
    timeout?: Duration
    /**
     * If `true`, returns the document version as part of a hit.
     */
    version?: boolean
    /**
     * The number of shard copies that must be active before proceeding with the operation.
     * Set to all or any positive integer up to the total number of shards in the index (`number_of_replicas+1`).
     * @server_default 1
     */
    wait_for_active_shards?: WaitForActiveShards
    /**
     * If `true`, the request blocks until the operation is complete.
     * @server_default true
     */
    wait_for_completion?: boolean
  }
  body: {
    /**
     * The maximum number of documents to delete.
     */
    max_docs?: long
    /**
     * Specifies the documents to delete using the Query DSL.
     */
    query?: QueryContainer
    /**
     * Slice the request manually using the provided slice ID and total number of slices.
     */
    slice?: SlicedScroll
  }
}
