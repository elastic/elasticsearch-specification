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
import { Id } from '@_types/common'

/**
 * Delete an async EQL search.
 *
 * Delete an async EQL search or a stored synchronous EQL search.
 * The API also deletes results for the search.
 * @rest_spec_name eql.delete
 * @availability stack since=7.9.0 stability=stable
 * @availability serverless stability=stable visibility=public
 * @doc_id eql-async-search-delete
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_eql/search/{id}'
      methods: ['DELETE']
    }
  ]
  path_parts: {
    /**
     * Identifier for the search to delete.
     * A search ID is provided in the EQL search API's response for an async search.
     * A search ID is also provided if the request’s `keep_on_completion` parameter is `true`.
     */
    id: Id
  }
}
