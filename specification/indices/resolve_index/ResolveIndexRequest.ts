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
import { ExpandWildcards, Names } from '@_types/common'
import { IndexMode } from '@indices/_types/DataStream'

/**
 * Resolve indices.
 * Resolve the names and/or index patterns for indices, aliases, and data streams.
 * Multiple patterns and remote clusters are supported.
 * @rest_spec_name indices.resolve_index
 * @availability stack since=7.9.0 stability=stable
 * @availability serverless stability=stable visibility=public
 * @doc_id indices-resolve-index-api
 * @index_privileges view_index_metadata
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_resolve/index/{name}'
      methods: ['GET']
    }
  ]
  path_parts: {
    /**
     * Comma-separated name(s) or index pattern(s) of the indices, aliases, and data streams to resolve.
     * Resources on remote clusters can be specified using the `<cluster>`:`<name>` syntax.
     */
    name: Names
  }
  query_parameters: {
    /**
     * Type of index that wildcard patterns can match.
     * If the request can target data streams, this argument determines whether wildcard expressions match hidden data streams.
     * Supports comma-separated values, such as `open,hidden`.
     * @server_default open
     */
    expand_wildcards?: ExpandWildcards
    /**
     * If `false`, the request returns an error if it targets a missing or closed index.
     * @server_default false
     */
    ignore_unavailable?: boolean
    /**
     * If `false`, the request returns an error if any wildcard expression, index alias, or `_all` value targets only missing or closed indices.
     * This behavior applies even if the request targets other open indices.
     * For example, a request targeting `foo*,bar*` returns an error if an index starts with `foo` but no index starts with `bar`.
     * @server_default true
     */
    allow_no_indices?: boolean
    /**
     * Filter indices by index mode - standard, lookup, time_series, etc. Comma-separated list of IndexMode. Empty means no filter.
     */
    mode?: IndexMode | IndexMode[]
  }
}
