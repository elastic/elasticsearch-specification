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

import { DataStreamLifecycleDownsampling } from '@indices/_types/DataStreamLifecycleDownsampling'
import { RequestBase } from '@_types/Base'
import { DataStreamNames, ExpandWildcards } from '@_types/common'
import { Duration } from '@_types/Time'

/**
 * Update the data lifecycle of the specified data streams.
 * @rest_spec_name indices.put_data_lifecycle
 * @availability stack since=8.11.0 stability=stable
 * @availability serverless stability=stable visibility=public
 */
export interface Request extends RequestBase {
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
     * Valid values are: `all`, `hidden`, `open`, `closed`, `none`.
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
  body: {
    /**
     * If defined, every document added to this data stream will be stored at least for this time frame.
     * Any time after this duration the document could be deleted.
     * When empty, every document in this data stream will be stored indefinitely.
     */
    data_retention?: Duration
    /**
     * If defined, every backing index will execute the configured downsampling configuration after the backing
     * index is not the data stream write index anymore.
     */
    downsampling?: DataStreamLifecycleDownsampling
  }
}
