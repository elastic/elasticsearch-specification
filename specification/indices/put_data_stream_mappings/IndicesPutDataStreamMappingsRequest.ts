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
import { Indices, MediaType } from '@_types/common'
import { TypeMapping } from '@_types/mapping/TypeMapping'
import { Duration } from '@_types/Time'

/**
 * Update data stream mappings.
 *
 * This API can be used to override mappings on specific data streams. These overrides will take precedence over what
 * is specified in the template that the data stream matches. The mapping change is only applied to new write indices
 * that are created during rollover after this API is called. No indices are changed by this API.
 * @rest_spec_name indices.put_data_stream_mappings
 * @availability stack since=9.2.0 stability=stable visibility=public
 * @availability serverless stability=stable visibility=public
 * @index_privileges manage
 * @doc_id indices-put-data-stream-mappings
 * @doc_tag data stream
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_data_stream/{name}/_mappings'
      methods: ['PUT']
    }
  ]
  path_parts: {
    /**
     * A comma-separated list of data streams or data stream patterns.
     */
    name: Indices
  }
  response_media_type: MediaType.Json
  query_parameters: {
    /**
     * If `true`, the request does not actually change the mappings on any data streams. Instead, it
     * simulates changing the settings and reports back to the user what would have happened had these settings
     * actually been applied.
     * @server_default false
     */
    dry_run?: boolean
    /**
     * The period to wait for a connection to the master node. If no response is
     * received before the timeout expires, the request fails and returns an
     * error.
     * @server_default 30s
     */
    master_timeout?: Duration
    /**
     *  The period to wait for a response. If no response is received before the
     *  timeout expires, the request fails and returns an error.
     * @server_default 30s
     */
    timeout?: Duration
  }
  /** Mappings to be applied to the data stream.
   * @codegen_name mappings */
  body: TypeMapping
}
