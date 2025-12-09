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
import { Duration } from '@_types/Time'
import { MediaType } from '@_types/common'

/**
 * Get cluster-wide settings.
 * By default, it returns only settings that have been explicitly defined.
 * @rest_spec_name cluster.get_settings
 * @availability stack stability=stable
 * @availability serverless stability=stable visibility=private
 * @cluster_privileges monitor
 * @doc_id cluster-get-settings
 * @ext_doc_id es-settings
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_cluster/settings'
      methods: ['GET']
    }
  ]
  response_media_type: MediaType.Json
  query_parameters: {
    /**
     * If `true`, returns settings in flat format.
     * @server_default false
     */
    flat_settings?: boolean
    /**
     * If `true`, also returns default values for all other cluster settings, reflecting the values
     * in the `elasticsearch.yml` file of one of the nodes in the cluster. If the nodes in your
     * cluster do not all have the same values in their `elasticsearch.yml` config files then the
     * values returned by this API may vary from invocation to invocation and may not reflect the
     * values that Elasticsearch uses in all situations. Use the `GET _nodes/settings` API to
     * fetch the settings for each individual node in your cluster.
     * @server_default false
     */
    include_defaults?: boolean
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
