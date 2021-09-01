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
import { ExpandWildcards, Indices } from '@_types/common'
import { Time } from '@_types/Time'

/**
 * @rest_spec_name indices.get
 * @since 0.0.0
 * @stability TODO
 */
export interface Request extends RequestBase {
  path_parts?: {
    /** Comma-separated list of data streams, indices, and index aliases used to limit the request. Wildcard expressions (*) are supported. */
    index: Indices
  }
  query_parameters?: {
    /** @server_default true */
    allow_no_indices?: boolean
    /**
     * Type of index that wildcard expressions can match. If the request can target data streams, this argument determines whether wildcard expressions match hidden data streams. Supports comma-separated values, such as open,hidden.
     * @server_default open
     */
    expand_wildcards?: ExpandWildcards
    /**
     * If true, returns settings in flat format.
     * @server_default false
     */
    flat_settings?: boolean
    /**
     * If false, requests that target a missing index return an error.
     * @server_default false
     */
    ignore_unavailable?: boolean
    /**
     * If true, return all default settings in the response.
     * @server_default false
     */
    include_defaults?: boolean
    /**
     * If true, a mapping type is expected in the body of mappings.
     * @server_default false
     */
    include_type_name?: boolean
    /**
     * If true, the request retrieves information from the local node only. Defaults to false, which means information is retrieved from the master node.
     * @server_default false
     */
    local?: boolean
    /**
     * Period to wait for a connection to the master node. If no response is received before the timeout expires, the request fails and returns an error.
     * @server_default 30s
     */
    master_timeout?: Time
  }
}
