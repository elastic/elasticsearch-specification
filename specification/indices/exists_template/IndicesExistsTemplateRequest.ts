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
import { MediaType, Names } from '@_types/common'
import { Duration } from '@_types/Time'

/**
 * Check existence of index templates.
 *
 * Get information about whether index templates exist.
 * Index templates define settings, mappings, and aliases that can be applied automatically to new indices.
 *
 * IMPORTANT: This documentation is about legacy index templates, which are deprecated and will be replaced by the composable templates introduced in Elasticsearch 7.8.
 * @rest_spec_name indices.exists_template
 * @category management
 * @availability stack stability=stable
 * @doc_id indices-template-exists-v1
 * @ext_doc_id index-templates
 * @cluster_privileges manage_index_templates
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_template/{name}'
      methods: ['HEAD']
    }
  ]
  path_parts: {
    /**
     * A comma-separated list of index template names used to limit the request.
     * Wildcard (`*`) expressions are supported.
     */
    name: Names
  }
  response_media_type: MediaType.Json
  query_parameters: {
    /**
     * Indicates whether to use a flat format for the response.
     * @server_default false
     */
    flat_settings?: boolean
    /**
     * Indicates whether to get information from the local node only.
     * @deprecated 9.0.0 This parameter has no effect, is now deprecated, and will be removed in a future version.
     * @server_default false
     */
    local?: boolean
    /**
     * The period to wait for the master node.
     * If the master node is not available before the timeout expires, the request fails and returns an error.
     * To indicate that the request should never timeout, set it to `-1`.
     * @server_default 30s
     */
    master_timeout?: Duration
  }
}
