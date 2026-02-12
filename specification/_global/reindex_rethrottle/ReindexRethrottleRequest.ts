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
import { float } from '@_types/Numeric'

/**
 * Throttle a reindex operation.
 *
 * Change the number of requests per second for a particular reindex operation.
 * For example:
 *
 * ```
 * POST _reindex/r1A2WoRbTwKZ516z6NEs5A:36619/_rethrottle?requests_per_second=-1
 * ```
 *
 * Rethrottling that speeds up the query takes effect immediately.
 * Rethrottling that slows down the query will take effect after completing the current batch.
 * This behavior prevents scroll timeouts.
 * @rest_spec_name reindex_rethrottle
 * @category document management
 * @availability stack since=2.4.0 stability=stable
 * @availability serverless stability=stable visibility=private
 * @doc_tag document
 * @doc_id docs-reindex
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_reindex/{task_id}/_rethrottle'
      methods: ['POST']
    }
  ]
  path_parts: {
    /**
     * The task identifier, which can be found by using the tasks API.
     */
    task_id: Id
  }
  response_media_type: MediaType.Json
  query_parameters: {
    /**
     * The throttle for this request in sub-requests per second.
     * It can be either `-1` to turn off throttling or any decimal number like `1.7` or `12` to throttle to that level.
     */
    requests_per_second: float
  }
}
