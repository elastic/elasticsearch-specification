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

import { Dictionary } from '@spec_utils/Dictionary'
import { UserDefinedValue } from '@spec_utils/UserDefinedValue'
import { RequestBase } from '@_types/Base'
import {
  ExpandWildcards,
  Id,
  Indices,
  Routing,
  SearchType
} from '@_types/common'
import { Duration } from '@_types/Time'

/**
 * @rest_spec_name search_template
 * @availability stack since=2.0.0 stability=stable
 * @availability serverless stability=stable visibility=public
 */
export interface Request extends RequestBase {
  path_parts: {
    /**
     * Comma-separated list of data streams, indices,
     * and aliases to search. Supports wildcards (*).
     */
    index?: Indices
  }
  query_parameters: {
    /** @server_default true */
    allow_no_indices?: boolean
    /** @server_default false */
    ccs_minimize_roundtrips?: boolean
    expand_wildcards?: ExpandWildcards
    /** @server_default false */
    explain?: boolean
    /** @server_default true */
    ignore_throttled?: boolean
    /** @server_default false */
    ignore_unavailable?: boolean
    preference?: string
    /** @server_default false */
    profile?: boolean
    /** Custom value used to route operations to a specific shard. */
    routing?: Routing
    /**
     * Specifies how long a consistent view of the index
     * should be maintained for scrolled search.
     */
    scroll?: Duration
    /** The type of the search operation. */
    search_type?: SearchType
    /**
     * If true, hits.total are rendered as an integer in the response.
     * @since 7.0.0
     * @server_default false
     */
    rest_total_hits_as_int?: boolean
    /** @server_default false */
    typed_keys?: boolean
  }
  body: {
    /** @server_default false */
    explain?: boolean
    /**
     * ID of the search template to use. If no source is specified,
     * this parameter is required.
     */
    id?: Id
    params?: Dictionary<string, UserDefinedValue>
    /** @server_default false */
    profile?: boolean
    /**
     * An inline search template. Supports the same parameters as the search API's
     * request body. Also supports Mustache variables. If no id is specified, this
     * parameter is required.
     */
    source?: string
  }
}
