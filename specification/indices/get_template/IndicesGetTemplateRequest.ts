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
 * Get legacy index templates.
 * Get information about one or more index templates.
 *
 * IMPORTANT: This documentation is about legacy index templates, which are deprecated and will be replaced by the composable templates introduced in Elasticsearch 7.8.
 * @rest_spec_name indices.get_template
 * @availability stack stability=stable
 * @doc_id indices-get-template-v1
 * @ext_doc_id index-templates
 * @cluster_privileges manage_index_templates
 * @deprecated 7.8.0
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_template'
      methods: ['GET']
    },
    {
      path: '/_template/{name}'
      methods: ['GET']
    }
  ]
  path_parts: {
    /**
     * Comma-separated list of index template names used to limit the request.
     * Wildcard (`*`) expressions are supported.
     * To return all index templates, omit this parameter or use a value of `_all` or `*`.
     */
    name?: Names
  }
  response_media_type: MediaType.Json
  query_parameters: {
    /**
     * If `true`, returns settings in flat format.
     * @server_default false
     */
    flat_settings?: boolean
    /**
     * If `true`, the request retrieves information from the local node only.
     * @deprecated 9.0.0 This parameter is a no-op and templates are always retrieved locally.
     * @server_default false
     */
    local?: boolean
    /**
     * Period to wait for a connection to the master node.
     * If no response is received before the timeout expires, the request fails and returns an error.
     * @server_default 30s
     */
    master_timeout?: Duration
  }
}
