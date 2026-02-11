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
 * Stop the watch service.
 *
 * Stop the Watcher service if it is running.
 * @rest_spec_name watcher.stop
 * @category info
 * @availability stack stability=stable
 * @cluster_privileges manage_watcher
 * @doc_id watcher-api-stop
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_watcher/_stop'
      methods: ['POST']
    }
  ]
  response_media_type: MediaType.Json
  query_parameters: {
    /**
     * The period to wait for the master node.
     * If the master node is not available before the timeout expires, the request fails and returns an error.
     * To indicate that the request should never timeout, set it to `-1`.
     * @server_default 30s
     */
    master_timeout?: Duration
  }
}
