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
import { DataStreamNames, ExpandWildcards, MediaType } from '@_types/common'
import { Duration } from '@_types/Time'

/**
 * Get data streams.
 *
 * Get information about one or more data streams.
 * @rest_spec_name indices.get_data_stream
 * @availability stack since=7.9.0 stability=stable
 * @availability serverless stability=stable visibility=public
 * @index_privileges view_index_metadata
 * @doc_tag data stream
 * @doc_id data-stream-get
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_data_stream'
      methods: ['GET']
    },
    {
      path: '/_data_stream/{name}'
      methods: ['GET']
    }
  ]
  path_parts: {
    /**
     * Comma-separated list of data stream names used to limit the request.
     * Wildcard (`*`) expressions are supported. If omitted, all data streams are returned.
     */
    name?: DataStreamNames
  }
  response_media_type: MediaType.Json
  query_parameters: {
    /**
     * Type of data stream that wildcard patterns can match.
     * Supports comma-separated values, such as `open,hidden`.
     * @server_default open
     */
    expand_wildcards?: ExpandWildcards
    /**
     * If true, returns all relevant default configurations for the index template.
     * @server_default false
     * @availability stack since=8.11.0 stability=stable
     * @availability serverless stability=stable
     */
    include_defaults?: boolean
    /**
     * Period to wait for a connection to the master node. If no response is received before the timeout expires, the request fails and returns an error.
     * @server_default 30s
     */
    master_timeout?: Duration
    /**
     * Whether the maximum timestamp for each data stream should be calculated and returned.
     * @server_default false
     */
    verbose?: boolean
  }
}
