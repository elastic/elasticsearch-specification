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
import { Duration } from '@_types/Time'

/**
 * Get the status for a data stream lifecycle.
 *
 * Get information about an index or data stream's current data stream lifecycle status, such as time since index creation, time since rollover, the lifecycle configuration managing the index, or any errors encountered during lifecycle execution.
 * @rest_spec_name indices.explain_data_lifecycle
 * @category management
 * @availability stack since=8.11.0 stability=stable
 * @availability serverless stability=stable visibility=public
 * @doc_tag data stream
 * @doc_id data-stream-explain-lifecycle
 * @ext_doc_id data-stream-lifecycle
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/{index}/_lifecycle/explain'
      methods: ['GET']
    }
  ]
  path_parts: {
    /** Comma-separated list of index names to explain */
    index: Indices
  }
  response_media_type: MediaType.Json
  query_parameters: {
    /**
     * Indicates if the API should return the default values the system uses for the index's lifecycle
     * @server_default false
     */
    include_defaults?: boolean
    /**
     * The period to wait for a connection to the master node.
     * @server_default 30s
     */
    master_timeout?: Duration
  }
}
