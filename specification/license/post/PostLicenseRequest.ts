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
import { License } from '@license/_types/License'

/**
 * Update the license.
 *
 * You can update your license at runtime without shutting down your nodes.
 * License updates take effect immediately.
 * If the license you are installing does not support all of the features that were available with your previous license, however, you are notified in the response.
 * You must then re-submit the API request with the acknowledge parameter set to true.
 *
 * NOTE: If Elasticsearch security features are enabled and you are installing a gold or higher license, you must enable TLS on the transport networking layer before you install the license.
 * If the operator privileges feature is enabled, only operator users can use this API.
 * @rest_spec_name license.post
 * @availability stack stability=stable
 * @cluster_privileges manage
 * @doc_id update-license
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_license'
      methods: ['PUT', 'POST']
    }
  ]
  request_media_type: MediaType.Json
  response_media_type: MediaType.Json
  query_parameters: {
    /**
     * Specifies whether you acknowledge the license changes.
     * @server_default false
     */
    acknowledge?: boolean
    /**
     * The period to wait for a connection to the master node.
     * @server_default 30s
     */
    master_timeout?: Duration
    /**
     * The period to wait for a response. If no response is received before the timeout expires, the request fails and returns an error.
     * @server_default 30s
     */
    timeout?: Duration
  }
  body?: {
    license?: License
    /**
     * A sequence of one or more JSON documents containing the license information.
     */
    licenses?: Array<License>
  }
}
