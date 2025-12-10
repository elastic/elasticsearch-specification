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
 * Get the async SQL search status.
 * Get the current status of an async SQL search or a stored synchronous SQL search.
 * @rest_spec_name sql.get_async_status
 * @availability stack since=7.15.0 stability=stable
 * @availability serverless stability=stable visibility=public
 * @cluster_privileges monitor
 * @doc_id sql-async-status-api
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_sql/async/status/{id}'
      methods: ['GET']
    }
  ]
  path_parts: {
    /**
     * The identifier for the search.
     */
    id: Id
  }
  response_media_type: MediaType.Json
}
