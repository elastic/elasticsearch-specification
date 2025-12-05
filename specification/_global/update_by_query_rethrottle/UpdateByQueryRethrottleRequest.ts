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
 * Throttle an update by query operation.
 *
 * Change the number of requests per second for a particular update by query operation.
 * Rethrottling that speeds up the query takes effect immediately but rethrotting that slows down the query takes effect after completing the current batch to prevent scroll timeouts.
 * @rest_spec_name update_by_query_rethrottle
 * @availability stack since=6.5.0 stability=stable
 * @availability serverless stability=stable visibility=private
 * @doc_tag document
 * @doc_id docs-update-by-query-rethrottle
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_update_by_query/{task_id}/_rethrottle'
      methods: ['POST']
    }
  ]
  path_parts: {
    /**
     * The ID for the task.
     */
    task_id: Id
  }
  response_media_type: MediaType.Json
  query_parameters: {
    /**
     * The throttle for this request in sub-requests per second.
     * To turn off throttling, set it to `-1`.
     */
    requests_per_second: float
  }
}
