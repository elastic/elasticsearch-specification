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
import { IndexName, MediaType } from '@_types/common'
import { Duration } from '@_types/Time'

/**
 * Delete sampling configuration.
 *
 * Delete the sampling configuration for the specified index.
 * @rest_spec_name indices.delete_sample_configuration
 * @availability stack visibility=feature_flag feature_flag=random_sampling since=9.3.0 stability=experimental
 * @doc_id indices-delete-sample-configuration
 * @doc_tag random_sample
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/{index}/_sample/config'
      methods: ['DELETE']
    }
  ]
  path_parts: {
    /**
     * The name of the index.
     */
    index: IndexName
  }
  request_media_type: MediaType.Json
  response_media_type: MediaType.Json
  query_parameters: {
    /**
     * Period to wait for a connection to the master node. If no response is
     * received before the timeout expires, the request fails and returns an
     * error.
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
