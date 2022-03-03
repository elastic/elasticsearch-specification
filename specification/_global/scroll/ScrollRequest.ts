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
import { ScrollId } from '@_types/common'
import { Time } from '@_types/Time'

/**
 * @rest_spec_name scroll
 * @since 0.0.0
 * @stability stable
 */
export interface Request extends RequestBase {
  path_parts: {
    /** @deprecated 7.0.0 */
    scroll_id?: ScrollId
  }
  query_parameters: {
    /**
     * Period to retain the search context for scrolling.
     * @doc_id scroll-search-results
     * @server_default 1d
     */
    scroll?: Time
    /** @deprecated 7.0.0 */
    scroll_id?: ScrollId
    /**
     * If true, the API response’s hit.total property is returned as an integer. If false, the API response’s hit.total property is returned as an object.
     * @server_default false
     */
    rest_total_hits_as_int?: boolean
  }
  body: {
    /**
     * Period to retain the search context for scrolling.
     * @doc_id scroll-search-results
     * @server_default 1d
     */
    scroll?: Time
    /** Scroll ID of the search. */
    scroll_id: ScrollId
  }
}
