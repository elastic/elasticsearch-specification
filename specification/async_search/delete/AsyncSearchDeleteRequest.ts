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

/**
 * Delete an async search.
 *
 * If the asynchronous search is still running, it is cancelled.
 * Otherwise, the saved search results are deleted.
 * If the Elasticsearch security features are enabled, the deletion of a specific async search is restricted to: the authenticated user that submitted the original search request; users that have the `cancel_task` cluster privilege.
 * @rest_spec_name async_search.delete
 * @category search
 * @availability stack since=7.7.0 stability=stable
 * @availability serverless stability=stable visibility=public
 * @doc_id async-search
 * @doc_tag search
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_async_search/{id}'
      methods: ['DELETE']
    }
  ]
  path_parts: {
    /** A unique identifier for the async search. */
    id: Id
  }
  response_media_type: MediaType.Json
}
