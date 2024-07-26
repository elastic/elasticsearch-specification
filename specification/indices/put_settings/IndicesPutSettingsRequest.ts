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

import { IndexSettings } from '@indices/_types/IndexSettings'
import { RequestBase } from '@_types/Base'
import { ExpandWildcards, Indices } from '@_types/common'
import { Duration } from '@_types/Time'

/**
 * Update index settings.
 * Changes dynamic index settings in real time. For data streams, index setting
 * changes are applied to all backing indices by default.
 * @rest_spec_name indices.put_settings
 * @availability stack stability=stable
 * @availability serverless stability=stable visibility=public
 * @index_privileges manage
 */
export interface Request extends RequestBase {
  path_parts: {
    /**
     * Comma-separated list of data streams, indices, and aliases used to limit
     * the request. Supports wildcards (`*`). To target all data streams and
     * indices, omit this parameter or use `*` or `_all`.
     */
    index?: Indices
  }
  query_parameters: {
    /**
     * If `false`, the request returns an error if any wildcard expression, index
     * alias, or `_all` value targets only missing or closed indices. This
     * behavior applies even if the request targets other open indices. For
     * example, a request targeting `foo*,bar*` returns an error if an index
     * starts with `foo` but no index starts with `bar`.
     * @server_default false
     */
    allow_no_indices?: boolean
    /**
     * Type of index that wildcard patterns can match. If the request can target
     * data streams, this argument determines whether wildcard expressions match
     * hidden data streams. Supports comma-separated values, such as
     * `open,hidden`.
     * @server_default open
     */
    expand_wildcards?: ExpandWildcards
    /**
     * If `true`, returns settings in flat format.
     * @server_default false
     */
    flat_settings?: boolean
    /**
     * If `true`, returns settings in flat format.
     * @server_default false
     */
    ignore_unavailable?: boolean
    /**
     * Period to wait for a connection to the master node. If no response is
     * received before the timeout expires, the request fails and returns an
     * error.
     * @server_default 30s
     */
    master_timeout?: Duration
    /**
     *  If `true`, existing index settings remain unchanged.
     * @server_default false
     */
    preserve_existing?: boolean
    /**
     *  Period to wait for a response. If no response is received before the
     *  timeout expires, the request fails and returns an error.
     * @server_default 30s
     */
    timeout?: Duration
  }
  /** Configuration options for the index.
   * @codegen_name settings */
  body: IndexSettings
}
