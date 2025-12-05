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
import { MediaType } from '@_types/common'
import { Duration } from '@_types/Time'
import { SecuritySettings } from '@security/_types/SecuritySettings'

/**
 * Update security index settings.
 *
 * Update the user-configurable settings for the security internal index (`.security` and associated indices). Only a subset of settings are allowed to be modified. This includes `index.auto_expand_replicas` and `index.number_of_replicas`.
 *
 * NOTE: If `index.auto_expand_replicas` is set, `index.number_of_replicas` will be ignored during updates.
 *
 * If a specific index is not in use on the system and settings are provided for it, the request will be rejected.
 * This API does not yet support configuring the settings for indices before they are in use.
 * @rest_spec_name security.update_settings
 * @availability stack stability=stable visibility=public
 * @cluster_privileges manage_security
 * @doc_id security-api-update-settings
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_security/settings'
      methods: ['PUT']
    }
  ]
  request_media_type: MediaType.Json
  response_media_type: MediaType.Json
  query_parameters: {
    /**
     * The period to wait for a connection to the master node.
     * If no response is received before the timeout expires, the request fails and returns an error.
     * @server_default 30s
     */
    master_timeout?: Duration
    /**
     * The period to wait for a response.
     * If no response is received before the timeout expires, the request fails and returns an error.
     */
    timeout?: Duration
  }
  body: {
    /**
     * Settings for the index used for most security configuration, including native realm users and roles configured with the API.
     */
    security?: SecuritySettings
    /**
     * Settings for the index used to store profile information.
     */
    'security-profile'?: SecuritySettings
    /**
     * Settings for the index used to store tokens.
     */
    'security-tokens'?: SecuritySettings
  }
}
