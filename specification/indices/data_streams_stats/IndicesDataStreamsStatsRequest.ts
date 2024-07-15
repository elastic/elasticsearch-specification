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
import { ExpandWildcards, IndexName } from '@_types/common'

/**
 * Get data stream stats.
 * Retrieves statistics for one or more data streams.
 * @rest_spec_name indices.data_streams_stats
 * @availability stack since=7.9.0 stability=stable
 * @availability serverless stability=stable visibility=public
 * @index_privileges monitor
 */
export interface Request extends RequestBase {
  path_parts: {
    /**
     * Comma-separated list of data streams used to limit the request.
     * Wildcard expressions (`*`) are supported.
     * To target all data streams in a cluster, omit this parameter or use `*`.
     */
    name?: IndexName
  }
  query_parameters: {
    /**
     * Type of data stream that wildcard patterns can match.
     * Supports comma-separated values, such as `open,hidden`.
     * @server_default open
     */
    expand_wildcards?: ExpandWildcards
  }
}
