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
import { MediaType, ScrollIds } from '@_types/common'

/**
 * Clear a scrolling search.
 * Clear the search context and results for a scrolling search.
 * @rest_spec_name clear_scroll
 * @availability stack stability=stable
 * @availability serverless stability=stable visibility=public
 * @doc_id clear-scroll-api
 * @doc_tag search
 * @ext_doc_id scroll-search-results
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_search/scroll'
      methods: ['DELETE']
    },
    {
      /** @deprecated 7.0.0 A scroll id can be quite large and should be specified as part of the body */
      path: '/_search/scroll/{scroll_id}'
      methods: ['DELETE']
    }
  ]
  path_parts: {
    /**
     * A comma-separated list of scroll IDs to clear.
     * To clear all scroll IDs, use `_all`.
     * IMPORTANT: Scroll IDs can be long. It is recommended to specify scroll IDs in the request body parameter.
     * @deprecated 7.0.0
     */
    scroll_id?: ScrollIds
  }
  request_media_type: MediaType.Text | MediaType.Json
  response_media_type: MediaType.Json
  body?: {
    /**
     * The scroll IDs to clear.
     * To clear all scroll IDs, use `_all`.
     */
    scroll_id?: ScrollIds
  }
}
