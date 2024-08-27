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
import { ExpandWildcards, Indices, Routing } from '@_types/common'
import { double, long } from '@_types/Numeric'
import { QueryContainer } from '@_types/query_dsl/abstractions'
import { Operator } from '@_types/query_dsl/Operator'

/**
 * @rest_spec_name count
 * @availability stack stability=stable
 * @availability serverless stability=stable visibility=public
 */
export interface Request extends RequestBase {
  path_parts: {
    /**
     * Comma-separated list of data streams, indices, and aliases to search.
     * Supports wildcards (`*`).
     * To search all data streams and indices, omit this parameter or use `*` or `_all`.
     */
    index?: Indices
  }
  query_parameters: {
    /**
     * If `false`, the request returns an error if any wildcard expression, index alias, or `_all` value targets only missing or closed indices.
     * This behavior applies even if the request targets other open indices.
     * @server_default true
     */
    allow_no_indices?: boolean
    /**
     * Analyzer to use for the query string.
     * This parameter can only be used when the `q` query string parameter is specified.
     */
    analyzer?: string
    /**
     * If `true`, wildcard and prefix queries are analyzed.
     * This parameter can only be used when the `q` query string parameter is specified.
     * @server_default false
     */
    analyze_wildcard?: boolean
    /**
     * The default operator for query string query: `AND` or `OR`.
     * This parameter can only be used when the `q` query string parameter is specified.
     */
    default_operator?: Operator
    /**
     * Field to use as default where no field prefix is given in the query string.
     * This parameter can only be used when the `q` query string parameter is specified.
     */
    df?: string
    /**
     * Type of index that wildcard patterns can match.
     * If the request can target data streams, this argument determines whether wildcard expressions match hidden data streams.
     * Supports comma-separated values, such as `open,hidden`.
     * @server_default open
     */
    expand_wildcards?: ExpandWildcards
    /**
     * If `true`, concrete, expanded or aliased indices are ignored when frozen.
     * @server_default true
     */
    ignore_throttled?: boolean
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
     * Sets the minimum `_score` value that documents must have to be included in the result.
     */
    min_score?: double
    /**
     * Specifies the node or shard the operation should be performed on.
     * Random by default.
     */
    preference?: string
    /**
     * Custom value used to route operations to a specific shard.
     */
    routing?: Routing
    /**
     * Maximum number of documents to collect for each shard.
     * If a query reaches this limit, Elasticsearch terminates the query early.
     * Elasticsearch collects documents before sorting.
     */
    terminate_after?: long
    /**
     * Query in the Lucene query string syntax.
     */
    q?: string
  }
  body: {
    /**
     * Defines the search definition using the Query DSL.
     */
    query?: QueryContainer
  }
}
