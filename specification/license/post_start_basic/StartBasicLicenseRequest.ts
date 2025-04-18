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

/**
 * Start a basic license.
 *
 * Start an indefinite basic license, which gives access to all the basic features.
 *
 * NOTE: In order to start a basic license, you must not currently have a basic license.
 *
 * If the basic license does not support all of the features that are available with your current license, however, you are notified in the response.
 * You must then re-submit the API request with the `acknowledge` parameter set to `true`.
 *
 * To check the status of your basic license, use the get basic license API.
 * @rest_spec_name license.post_start_basic
 * @availability stack since=6.3.0 stability=stable
 * @cluster_privileges manage
 * @doc_id start-basic
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_license/start_basic'
      methods: ['POST']
    }
  ]
  query_parameters: {
    acknowledge?: boolean
    /**
     * Period to wait for a connection to the master node.
     * @server_default 30s
     */
    master_timeout?: Duration
    /**
     * Period to wait for a response. If no response is received before the timeout expires, the request fails and returns an error.
     * @server_default 30s
     */
    timeout?: Duration
  }
}
