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
import { ExpandWildcards, Fields, Indices } from '@_types/common'
import { RuntimeFields } from '@_types/mapping/RuntimeFields'
import { QueryContainer } from '@_types/query_dsl/abstractions'

/**
 * Get the field capabilities.
 *
 * Get information about the capabilities of fields among multiple indices.
 *
 * For data streams, the API returns field capabilities among the stream’s backing indices.
 * It returns runtime fields like any other field.
 * For example, a runtime field with a type of keyword is returned the same as any other field that belongs to the `keyword` family.
 * @rest_spec_name field_caps
 * @availability stack since=5.4.0 stability=stable
 * @availability serverless stability=stable visibility=public
 * @index_privileges view_index_metadata,read
 * @doc_tag search
 * @doc_id search-field-caps
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_field_caps'
      methods: ['GET', 'POST']
    },
    {
      path: '/{index}/_field_caps'
      methods: ['GET', 'POST']
    }
  ]
  path_parts: {
    /**
     * A comma-separated list of data streams, indices, and aliases used to limit the request. Supports wildcards (*). To target all data streams and indices, omit this parameter or use * or _all.
     */
    index?: Indices
  }
  query_parameters: {
    /**
     * If false, the request returns an error if any wildcard expression, index alias,
     * or `_all` value targets only missing or closed indices. This behavior applies even if the request targets other open indices. For example, a request
     * targeting `foo*,bar*` returns an error if an index starts with foo but no index starts with bar.
     * @server_default true
     */
    allow_no_indices?: boolean
    /**
     * The type of index that wildcard patterns can match. If the request can target data streams, this argument determines whether wildcard expressions match hidden data streams. Supports comma-separated values, such as `open,hidden`.
     * @server_default open
     */
    expand_wildcards?: ExpandWildcards
    /**
     * A comma-separated list of fields to retrieve capabilities for. Wildcard (`*`) expressions are supported.
     */
    fields?: Fields
    /**
     * If `true`, missing or closed indices are not included in the response.
     * @server_default false
     */
    ignore_unavailable?: boolean
    /**
     * If true, unmapped fields are included in the response.
     * @server_default false
     */
    include_unmapped?: boolean
    /**
     * A comma-separated list of filters to apply to the response.
     * @availability stack since=8.2.0
     * @availability serverless
     */
    filters?: string
    /**
     * A comma-separated list of field types to include.
     * Any fields that do not match one of these types will be excluded from the results.
     * It defaults to empty, meaning that all field types are returned.
     * @availability stack since=8.2.0
     * @availability serverless
     */
    types?: string[]
    /**
     * If false, empty fields are not included in the response.
     * @availability stack since=8.13.0
     * @availability serverless
     * @server_default true
     */
    include_empty_fields?: boolean
  }
  body?: {
    /**
     * A list of fields to retrieve capabilities for. Wildcard (`*`) expressions are supported.
     * @availability stack since=8.5.0
     * @availability serverless
     */
    fields?: Fields
    /**
     * Filter indices if the provided query rewrites to `match_none` on every shard.
     *
     * IMPORTANT: The filtering is done on a best-effort basis, it uses index statistics and mappings to rewrite queries to `match_none` instead of fully running the request.
     * For instance a range query over a date field can rewrite to `match_none` if all documents within a shard (including deleted documents) are outside of the provided range.
     * However, not all queries can rewrite to `match_none` so this API may return an index even if the provided filter matches no document.
     */
    index_filter?: QueryContainer
    /**
     * Define ad-hoc runtime fields in the request similar to the way it is done in search requests.
     * These fields exist only as part of the query and take precedence over fields defined with the same name in the index mappings.
     * @doc_id runtime-search-request
     * @availability stack since=7.12.0
     * @availability serverless
     */
    runtime_mappings?: RuntimeFields
  }
}
