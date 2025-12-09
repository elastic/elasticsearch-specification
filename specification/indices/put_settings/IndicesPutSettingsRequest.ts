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
import { IndexSettings } from '@indices/_types/IndexSettings'

/**
 * Update index settings.
 * Changes dynamic index settings in real time.
 * For data streams, index setting changes are applied to all backing indices by default.
 *
 * To revert a setting to the default value, use a null value.
 * The list of per-index settings that can be updated dynamically on live indices can be found in index settings documentation.
 * To preserve existing settings from being updated, set the `preserve_existing` parameter to `true`.
 *
 *  There are multiple valid ways to represent index settings in the request body. You can specify only the setting, for example:
 *
 * ```
 * {
 *   "number_of_replicas": 1
 * }
 * ```
 *
 * Or you can use an `index` setting object:
 * ```
 * {
 *   "index": {
 *     "number_of_replicas": 1
 *   }
 * }
 * ```
 *
 * Or you can use dot annotation:
 * ```
 * {
 *   "index.number_of_replicas": 1
 * }
 * ```
 *
 * Or you can embed any of the aforementioned options in a `settings` object. For example:
 *
 * ```
 * {
 *   "settings": {
 *     "index": {
 *       "number_of_replicas": 1
 *     }
 *   }
 * }
 * ```
 *
 * NOTE: You can only define new analyzers on closed indices.
 * To add an analyzer, you must close the index, define the analyzer, and reopen the index.
 * You cannot close the write index of a data stream.
 * To update the analyzer for a data stream's write index and future backing indices, update the analyzer in the index template used by the stream.
 * Then roll over the data stream to apply the new analyzer to the stream's write index and future backing indices.
 * This affects searches and any new data added to the stream after the rollover.
 * However, it does not affect the data stream's backing indices or their existing data.
 * To change the analyzer for existing backing indices, you must create a new data stream and reindex your data into it.
 * @rest_spec_name indices.put_settings
 * @availability stack stability=stable
 * @availability serverless stability=stable visibility=public
 * @index_privileges manage
 * @doc_id indices-update-settings
 * @ext_doc_id index-settings
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_settings'
      methods: ['PUT']
    },
    {
      path: '/{index}/_settings'
      methods: ['PUT']
    }
  ]
  path_parts: {
    /**
     * Comma-separated list of data streams, indices, and aliases used to limit
     * the request. Supports wildcards (`*`). To target all data streams and
     * indices, omit this parameter or use `*` or `_all`.
     */
    index?: Indices
  }
  request_media_type: MediaType.Json
  response_media_type: MediaType.Json
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
     * Whether to close and reopen the index to apply non-dynamic settings.
     * If set to `true` the indices to which the settings are being applied
     * will be closed temporarily and then reopened in order to apply the changes.
     * @server_default false
     */
    reopen?: boolean
    /**
     *  Period to wait for a response. If no response is received before the
     *  timeout expires, the request fails and returns an error.
     * @server_default 30s
     */
    timeout?: Duration
  }
  /** Configuration options for the index.
   * @codegen_name settings
   */
  body: IndexSettings
}
