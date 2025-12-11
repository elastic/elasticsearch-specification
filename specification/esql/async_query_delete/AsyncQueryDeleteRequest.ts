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
 * Delete an async ES|QL query.
 *
 * If the query is still running, it is cancelled.
 * Otherwise, the stored results are deleted.
 *
 * If the Elasticsearch security features are enabled, only the following users can use this API to delete a query:
 *
 * * The authenticated user that submitted the original query request
 * * Users with the `cancel_task` cluster privilege
 * @rest_spec_name esql.async_query_delete
 * @availability stack since=8.13.0 stability=stable visibility=public
 * @doc_id esql-async-query-delete
 * @ext_doc_id esql
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_query/async/{id}'
      methods: ['DELETE']
    }
  ]
  path_parts: {
    /**
     * The unique identifier of the query.
     * A query ID is provided in the ES|QL async query API response for a query that does not complete in the designated time.
     * A query ID is also provided when the request was submitted with the `keep_on_completion` parameter set to `true`.
     */
    id: Id
  }
  response_media_type: MediaType.Json
}
