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

/**
 * Retrieves the data stream lifecycle configuration of one or more data streams.
 * @rest_spec_name indices.get_data_lifecycle
 * @availability stack since=8.11.0 stability=stable
 * @availability serverless stability=stable visibility=public
 */
export interface Request extends RequestBase {
  path_parts: {
    /**
     * Comma-separated list of data streams to limit the request.
     * Supports wildcards (`*`).
     * To target all data streams, omit this parameter or use `*` or `_all`.
     */
    name: DataStreamNames
  }
  query_parameters: {
    /**
     * Type of data stream that wildcard patterns can match.
     * Supports comma-separated values, such as `open,hidden`.
     * Valid values are: `all`, `open`, `closed`, `hidden`, `none`.
     * @server_default open
     */
    expand_wildcards?: ExpandWildcards
    /**
     * If `true`, return all default settings in the response.
     * @server_default false
     */
    include_defaults?: boolean
  }
}
