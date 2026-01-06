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
import { ExpandWildcards, Indices, MediaType } from '@_types/common'
import { QueryContainer } from '@_types/query_dsl/abstractions'
import { Operator } from '@_types/query_dsl/Operator'

/**
 * Validate a query.
 *
 * Validates a query without running it.
 * @rest_spec_name indices.validate_query
 * @availability stack since=1.3.0 stability=stable
 * @availability serverless stability=stable visibility=public
 * @doc_id search-validate
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_validate/query'
      methods: ['GET', 'POST']
    },
    {
      path: '/{index}/_validate/query'
      methods: ['GET', 'POST']
    }
  ]
  path_parts: {
    /**
     * Comma-separated list of data streams, indices, and aliases to search.
     * Supports wildcards (`*`).
     * To search all data streams or indices, omit this parameter or use `*` or `_all`.
     */
    index?: Indices
  }
  request_media_type: MediaType.Json
  response_media_type: MediaType.Json
  query_parameters: {
    /**
     * If `false`, the request returns an error if any wildcard expression, index alias, or `_all` value targets only missing or closed indices.
     * This behavior applies even if the request targets other open indices.
     * @server_default true
     */
    allow_no_indices?: boolean
    /**
     * If `true`, the validation is executed on all shards instead of one random shard per index.
     * @server_default false
     */
    all_shards?: boolean
    /**
     * Analyzer to use for the query string.
     * This parameter can only be used when the `q` query string parameter is specified.
     */
    analyzer?: string
    /**
     * If `true`, wildcard and prefix queries are analyzed.
     * @server_default false
     */
    analyze_wildcard?: boolean
    /**
     * The default operator for query string query: `and` or `or`.
     * @server_default or
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
     * If `true`, the response returns detailed information if an error has occurred.
     * @server_default false
     */
    explain?: boolean
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
     * If `true`, returns a more detailed explanation showing the actual Lucene query that will be executed.
     * @server_default false
     */
    rewrite?: boolean
    /**
     * Query in the Lucene query string syntax.
     */
    q?: string
  }
  body?: {
    /**
     * Query in the Lucene query string syntax.
     */
    query?: QueryContainer
  }
}
