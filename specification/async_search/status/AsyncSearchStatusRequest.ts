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
import { Id, MediaType } from '@_types/common'
import { Duration } from '@_types/Time'

/**
 * Get the async search status.
 *
 * Get the status of a previously submitted async search request given its identifier, without retrieving search results.
 * If the Elasticsearch security features are enabled, the access to the status of a specific async search is restricted to:
 *
 * * The user or API key that submitted the original async search request.
 * * Users that have the `monitor` cluster privilege or greater privileges.
 * @rest_spec_name async_search.status
 * @category search
 * @availability stack since=7.11.0 stability=stable
 * @availability serverless stability=stable visibility=public
 * @cluster_privileges monitor
 * @doc_id async-search
 * @doc_tag search
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_async_search/status/{id}'
      methods: ['GET']
    }
  ]
  path_parts: {
    /** A unique identifier for the async search. */
    id: Id
  }
  response_media_type: MediaType.Json
  query_parameters: {
    /**
     * The length of time that the async search needs to be available.
     * Ongoing async searches and any saved search results are deleted after this period.
     * @server_default 5d
     */
    keep_alive?: Duration
  }
}
