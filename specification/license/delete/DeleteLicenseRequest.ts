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
 * Delete the license.
 *
 * When the license expires, your subscription level reverts to Basic.
 *
 * If the operator privileges feature is enabled, only operator users can use this API.
 * @rest_spec_name license.delete
 * @category info
 * @availability stack stability=stable
 * @cluster_privileges manage
 * @doc_id delete-license
 * @ext_doc_id license-management
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_license'
      methods: ['DELETE']
    }
  ]
  response_media_type: MediaType.Json
  query_parameters: {
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
}
