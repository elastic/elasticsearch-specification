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
import { Name } from '@_types/common'
import { Duration } from '@_types/Time'

/**
 * Get component templates.
 * Get information about component templates.
 * @rest_spec_name cluster.get_component_template
 * @availability stack since=7.8.0 stability=stable
 * @availability serverless stability=stable visibility=public
 * @cluster_privileges manage_index_templates
 * @doc_id indices-component-template
 * @doc_tag indices
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_component_template'
      methods: ['GET']
    },
    {
      path: '/_component_template/{name}'
      methods: ['GET']
    }
  ]
  path_parts: {
    /**
     * Comma-separated list of component template names used to limit the request.
     * Wildcard (`*`) expressions are supported.
     */
    name?: Name
  }
  query_parameters: {
    /**
     * If `true`, returns settings in flat format.
     * @server_default false
     */
    flat_settings?: boolean
    /**
     * Filter out results, for example to filter out sensitive information. Supports wildcards or full settings keys
     */
    settings_filter?: string | string[]
    /**
     * @server_default false
     * @availability stack since=8.11.0 stability=stable
     * @availability serverless stability=stable
     */
    include_defaults?: boolean
    /**
     * If `true`, the request retrieves information from the local node only.
     * If `false`, information is retrieved from the master node.
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
