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
import { Indices } from '@_types/common'
import { Duration } from '@_types/Time'

/**
 * Get data stream settings.
 *
 * Get setting information for one or more data streams.
 * @rest_spec_name indices.get_data_stream_settings
 * @availability stack stability=stable visibility=public
 * @availability serverless stability=stable visibility=public
 * @index_privileges view_index_metadata
 * @doc_id indices-get-data-stream-settings
 * @doc_tag data stream
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_data_stream/{name}/_settings'
      methods: ['GET']
    }
  ]
  path_parts: {
    /**
     * A comma-separated list of data streams or data stream patterns. Supports wildcards (`*`).
     */
    name: Indices
  }
  query_parameters: {
    /**
     * The period to wait for a connection to the master node. If no response is
     * received before the timeout expires, the request fails and returns an
     * error.
     * @server_default 30s
     */
    master_timeout?: Duration
  }
}
