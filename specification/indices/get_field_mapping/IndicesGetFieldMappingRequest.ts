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

/**
 * Get mapping definitions.
 * Retrieves mapping definitions for one or more fields.
 * For data streams, the API retrieves field mappings for the stream’s backing indices.
 *
 * This API is useful if you don't need a complete mapping or if an index mapping contains a large number of fields.
 * @rest_spec_name indices.get_field_mapping
 * @availability stack stability=stable
 * @index_privileges view_index_metadata
 * @doc_id indices-get-field-mapping
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_mapping/field/{fields}'
      methods: ['GET']
    },
    {
      path: '/{index}/_mapping/field/{fields}'
      methods: ['GET']
    }
  ]
  path_parts: {
    /**
     * Comma-separated list or wildcard expression of fields used to limit returned information.
     * Supports wildcards (`*`).
     */
    fields: Fields
    /**
     * Comma-separated list of data streams, indices, and aliases used to limit the request.
     * Supports wildcards (`*`).
     * To target all data streams and indices, omit this parameter or use `*` or `_all`.
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
     * If `true`, return all default settings in the response.
     * @server_default false
     */
    include_defaults?: boolean
  }
}
