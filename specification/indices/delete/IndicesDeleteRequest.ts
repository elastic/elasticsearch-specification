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
import { Duration } from '@_types/Time'

/**
 * Delete indices.
 * Deleting an index deletes its documents, shards, and metadata.
 * It does not delete related Kibana components, such as data views, visualizations, or dashboards.
 *
 * You cannot delete the current write index of a data stream.
 * To delete the index, you must roll over the data stream so a new write index is created.
 * You can then use the delete index API to delete the previous write index.
 * @rest_spec_name indices.delete
 * @availability stack stability=stable
 * @availability serverless stability=stable visibility=public
 * @doc_id indices-delete-index
 * @index_privileges delete_index
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/{index}'
      methods: ['DELETE']
    }
  ]
  path_parts: {
    /**
     * Comma-separated list of indices to delete.
     * You cannot specify index aliases.
     * By default, this parameter does not support wildcards (`*`) or `_all`.
     * To use wildcards or `_all`, set the `action.destructive_requires_name` cluster setting to `false`.
     */
    index: Indices
  }
  response_media_type: MediaType.Json
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
     * @server_default open,closed
     */
    expand_wildcards?: ExpandWildcards
    /**
     * If `false`, the request returns an error if it targets a missing or closed index.
     * @server_default false
     */
    ignore_unavailable?: boolean
    /**
     * Period to wait for a connection to the master node.
     * If no response is received before the timeout expires, the request fails and returns an error.
     * @server_default 30s
     */
    master_timeout?: Duration
    /**
     * Period to wait for a response.
     * If no response is received before the timeout expires, the request fails and returns an error.
     * @server_default 30s
     */
    timeout?: Duration
  }
}
