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
import { DataStreamNames, ExpandWildcards } from '@_types/common'
import { Duration } from '@_types/Time'

/**
 * Delete data stream options.
 *
 * Removes the data stream options from a data stream.
 * @rest_spec_name indices.delete_data_stream_options
 * @availability stack since=8.19.0 stability=stable
 * @availability serverless stability=stable visibility=private
 * @doc_tag data stream
 * @doc_id data-stream-delete-options
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_data_stream/{name}/_options'
      methods: ['DELETE']
    }
  ]
  path_parts: {
    /**
     * A comma-separated list of data streams of which the data stream options will be deleted.
     * Use `*` to get all data streams
     */
    name: DataStreamNames
  }
  query_parameters: {
    /**
     * Whether wildcard expressions should get expanded to open or closed indices
     * @server_default open
     */
    expand_wildcards?: ExpandWildcards
    /**
     * The period to wait for a connection to the master node.
     * @server_default 30s
     */
    master_timeout?: Duration
    /**
     * The period to wait for a response.
     * @server_default 30s
     */
    timeout?: Duration
  }
}
