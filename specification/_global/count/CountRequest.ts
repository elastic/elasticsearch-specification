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
  ProjectRouting,
  Routing
} from '@_types/common'
import { double, long } from '@_types/Numeric'
import { QueryContainer } from '@_types/query_dsl/abstractions'
import { Operator } from '@_types/query_dsl/Operator'

/**
 * Count search results.
 * Get the number of documents matching a query.
 *
 * The query can be provided either by using a simple query string as a parameter, or by defining Query DSL within the request body.
 * The query is optional. When no query is provided, the API uses `match_all` to count all the documents.
 *
 * The count API supports multi-target syntax. You can run a single count API search across multiple data streams and indices.
 *
 * The operation is broadcast across all shards.
 * For each shard ID group, a replica is chosen and the search is run against it.
 * This means that replicas increase the scalability of the count.
 * @rest_spec_name count
 * @availability stack stability=stable
 * @availability serverless stability=stable visibility=public
 * @doc_tag search
 * @doc_id search-count
 * @index_privileges read
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_count'
      methods: ['POST', 'GET']
    },
    {
      path: '/{index}/_count'
      methods: ['POST', 'GET']
    }
  ]
  path_parts: {
    /**
     * A comma-separated list of data streams, indices, and aliases to search.
     * It supports wildcards (`*`).
     * To search all data streams and indices, omit this parameter or use `*` or `_all`.
     */
    index?: Indices
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
     * The analyzer to use for the query string.
     * This parameter can be used only when the `q` query string parameter is specified.
     */
    analyzer?: string
    /**
     * If `true`, wildcard and prefix queries are analyzed.
     * This parameter can be used only when the `q` query string parameter is specified.
     * @server_default false
     */
    analyze_wildcard?: boolean
    /**
     * The default operator for query string query: `AND` or `OR`.
     * This parameter can be used only when the `q` query string parameter is specified.
     * @server_default OR
     */
    default_operator?: Operator
    /**
     * The field to use as a default when no field prefix is given in the query string.
     * This parameter can be used only when the `q` query string parameter is specified.
     */
    df?: string
    /**
     * The type of index that wildcard patterns can match.
     * If the request can target data streams, this argument determines whether wildcard expressions match hidden data streams.
     * It supports comma-separated values, such as `open,hidden`.
     * @server_default open
     */
    expand_wildcards?: ExpandWildcards
    /**
     * If `true`, concrete, expanded, or aliased indices are ignored when frozen.
     * @server_default true
     * @deprecated 7.16.0
     */
    ignore_throttled?: boolean
    /**
     * If `false`, the request returns an error if it targets a missing or closed index.
     * @server_default false
     */
    ignore_unavailable?: boolean
    /**
     * If `true`, format-based query failures (such as providing text to a numeric field) in the query string will be ignored.
     * This parameter can be used only when the `q` query string parameter is specified.
     * @server_default false
     */
    lenient?: boolean
    /**
     * The minimum `_score` value that documents must have to be included in the result.
     */
    min_score?: double
    /**
     * The node or shard the operation should be performed on.
     * By default, it is random.
     */
    preference?: string
    /**
     * Specifies a subset of projects to target for the search using project
     * metadata tags in a subset of Lucene query syntax.
     * Allowed Lucene queries: the _alias tag and a single value (possibly wildcarded).
     * Examples:
     *  _alias:my-project
     *  _alias:_origin
     *  _alias:*pr*
     * Supported in serverless only.
     * @availability serverless stability=stable visibility=feature_flag feature_flag=serverless.cross_project.enabled
     */
    project_routing?: ProjectRouting
    /**
     * A custom value used to route operations to a specific shard.
     */
    routing?: Routing
    /**
     * The maximum number of documents to collect for each shard.
     * If a query reaches this limit, Elasticsearch terminates the query early.
     * Elasticsearch collects documents before sorting.
     *
     * IMPORTANT: Use with caution.
     * Elasticsearch applies this parameter to each shard handling the request.
     * When possible, let Elasticsearch perform early termination automatically.
     * Avoid specifying this parameter for requests that target data streams with backing indices across multiple data tiers.
     */
    terminate_after?: long
    /**
     * The query in Lucene query string syntax. This parameter cannot be used with a request body.
     */
    q?: string
  }
  body: {
    /**
     * Defines the search query using Query DSL. A request body query cannot be used
     * with the `q` query string parameter.
     */
    query?: QueryContainer
  }
}
