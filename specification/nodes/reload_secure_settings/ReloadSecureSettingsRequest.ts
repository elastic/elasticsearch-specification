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
import { MediaType, NodeIds, Password } from '@_types/common'
import { Duration } from '@_types/Time'

/**
 * Reload the keystore on nodes in the cluster.
 *
 * Secure settings are stored in an on-disk keystore. Certain of these settings are reloadable.
 * That is, you can change them on disk and reload them without restarting any nodes in the cluster.
 * When you have updated reloadable secure settings in your keystore, you can use this API to reload those settings on each node.
 *
 * When the Elasticsearch keystore is password protected and not simply obfuscated, you must provide the password for the keystore when you reload the secure settings.
 * Reloading the settings for the whole cluster assumes that the keystores for all nodes are protected with the same password; this method is allowed only when inter-node communications are encrypted.
 * Alternatively, you can reload the secure settings on each node by locally accessing the API and passing the node-specific Elasticsearch keystore password.
 * @rest_spec_name nodes.reload_secure_settings
 * @category unknown
 * @availability stack since=6.5.0 stability=stable
 * @doc_tag cluster
 * @doc_id cluster-nodes-reload-secure-settings
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_nodes/reload_secure_settings'
      methods: ['POST']
    },
    {
      path: '/_nodes/{node_id}/reload_secure_settings'
      methods: ['POST']
    }
  ]
  path_parts: {
    /**
     * The names of particular nodes in the cluster to target.
     */
    node_id?: NodeIds
  }
  request_media_type: MediaType.Json
  response_media_type: MediaType.Json
  query_parameters: {
    /**
     * Period to wait for a response.
     * If no response is received before the timeout expires, the request fails and returns an error.
     * @server_default 30s
     */
    timeout?: Duration
  }
  body?: {
    /**
     * The password for the Elasticsearch keystore.
     */
    secure_settings_password?: Password
  }
}
