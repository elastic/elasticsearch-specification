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
import { MediaType, ScrollId } from '@_types/common'
import { Duration } from '@_types/Time'

/**
 * Run a scrolling search.
 *
 * IMPORTANT: The scroll API is no longer recommend for deep pagination. If you need to preserve the index state while paging through more than 10,000 hits, use the `search_after` parameter with a point in time (PIT).
 *
 * The scroll API gets large sets of results from a single scrolling search request.
 * To get the necessary scroll ID, submit a search API request that includes an argument for the `scroll` query parameter.
 * The `scroll` parameter indicates how long Elasticsearch should retain the search context for the request.
 * The search response returns a scroll ID in the `_scroll_id` response body parameter.
 * You can then use the scroll ID with the scroll API to retrieve the next batch of results for the request.
 * If the Elasticsearch security features are enabled, the access to the results of a specific scroll ID is restricted to the user or API key that submitted the search.
 *
 * You can also use the scroll API to specify a new scroll parameter that extends or shortens the retention period for the search context.
 *
 * IMPORTANT: Results from a scrolling search reflect the state of the index at the time of the initial search request. Subsequent indexing or document changes only affect later search and scroll requests.
 * @rest_spec_name scroll
 * @availability stack stability=stable
 * @availability serverless stability=stable visibility=public
 * @index_privileges read
 * @doc_tag search
 * @doc_id scroll-api
 * @ext_doc_id scroll-search-results
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_search/scroll'
      methods: ['GET', 'POST']
    },
    {
      /** @deprecated 7.0.0 A scroll id can be quite large and should be specified as part of the body */
      path: '/_search/scroll/{scroll_id}'
      methods: ['GET', 'POST']
    }
  ]
  path_parts: {
    /** @deprecated 7.0.0 */
    scroll_id?: ScrollId
  }
  request_media_type: MediaType.Json
  response_media_type: MediaType.Json
  query_parameters: {
    /**
     * The period to retain the search context for scrolling.
     * @doc_id scroll-search-results
     * @server_default 1d
     */
    scroll?: Duration
    /** @deprecated 7.0.0 */
    scroll_id?: ScrollId
    /**
     * If true, the API response’s hit.total property is returned as an integer. If false, the API response’s hit.total property is returned as an object.
     * @server_default false
     */
    rest_total_hits_as_int?: boolean
  }
  body?: {
    /**
     * The period to retain the search context for scrolling.
     * @doc_id scroll-search-results
     * @server_default 1d
     */
    scroll?: Duration
    /** The scroll ID of the search. */
    scroll_id: ScrollId
  }
}
