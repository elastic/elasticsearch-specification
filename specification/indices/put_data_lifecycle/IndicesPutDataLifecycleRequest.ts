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
import { DownsamplingRound } from '@indices/_types/DownsamplingRound'

/**
 * Update data stream lifecycles.
 *
 * Update the data stream lifecycle of the specified data streams.
 * @rest_spec_name indices.put_data_lifecycle
 * @availability stack since=8.11.0 stability=stable
 * @availability serverless stability=stable visibility=public
 * @doc_tag data stream
 * @doc_id data-stream-put-lifecycle
 * @ext_doc_id data-stream-lifecycle
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_data_stream/{name}/_lifecycle'
      methods: ['PUT']
    }
  ]
  path_parts: {
    /**
     * Comma-separated list of data streams used to limit the request.
     * Supports wildcards (`*`).
     * To target all data streams use `*` or `_all`.
     */
    name: DataStreamNames
  }
  query_parameters: {
    /**
     * Type of data stream that wildcard patterns can match.
     * Supports comma-separated values, such as `open,hidden`.
     * @server_default open
     */
    expand_wildcards?: ExpandWildcards
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
  /*
   * This is DataStreamLifecycle from @indices/_types/DataStreamLifecycle.ts,
   * but kept as a properties body to avoid a breaking change
   */
  body: {
    /**
     * If defined, every document added to this data stream will be stored at least for this time frame.
     * Any time after this duration the document could be deleted.
     * When empty, every document in this data stream will be stored indefinitely.
     */
    data_retention?: Duration
    /**
     * The downsampling configuration to execute for the managed backing index after rollover.
     */
    downsampling?: DownsamplingRound[]
    /**
     * If defined, it turns data stream lifecycle on/off (`true`/`false`) for this data stream. A data stream lifecycle
     * that's disabled (enabled: `false`) will have no effect on the data stream.
     * @server_default true
     */
    enabled?: boolean
  }
}
