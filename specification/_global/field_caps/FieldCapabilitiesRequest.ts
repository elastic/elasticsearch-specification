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
 * @rest_spec_name field_caps
 * @since 5.4.0
 * @stability stable
 * @index_privileges view_index_metadata,read,manage
 */
export interface Request extends RequestBase {
  path_parts: {
    /**
     * Comma-separated list of data streams, indices, and aliases used to limit the request. Supports wildcards (*). To target all data streams and indices, omit this parameter or use * or _all.
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
     * Type of index that wildcard patterns can match. If the request can target data streams, this argument determines whether wildcard expressions match hidden data streams. Supports comma-separated values, such as `open,hidden`.
     * @server_default open
     */
    expand_wildcards?: ExpandWildcards
    /**
     * Comma-separated list of fields to retrieve capabilities for. Wildcard (`*`) expressions are supported.
     */
    fields: Fields
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
  }
  body: {
    /**
     * Allows to filter indices if the provided query rewrites to match_none on every shard.
     */
    index_filter?: QueryContainer
    /**
     * Defines ad-hoc runtime fields in the request similar to the way it is done in search requests.
     * These fields exist only as part of the query and take precedence over fields defined with the same name in the index mappings.
     * @since 7.12.0
     * @doc_id runtime-search-request
     */
    runtime_mappings?: RuntimeFields
  }
}
