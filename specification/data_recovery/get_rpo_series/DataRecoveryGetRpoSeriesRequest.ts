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
import { DateTime, Duration } from '@_types/Time'
import { MediaType } from '@_types/common'

/**
 * Get the recovery point objective series.
 *
 * Get, for each bucket in the half-open range `[start, end)`, the maximum age
 * that the newest recoverable state reached during that bucket.
 * This API is intended for internal operator use.
 * The range is divided into at most 1,000 buckets. A bucket has no value if
 * no retained recovery point covers its start.
 * @rest_spec_name data_recovery.get_rpo_series
 * @availability serverless visibility=private
 * @doc_id data-recovery-get-rpo-series
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_data_recovery/rpo'
      methods: ['GET']
    }
  ]
  response_media_type: MediaType.Json
  query_parameters: {
    /**
     * The inclusive start of the range, as a date or epoch milliseconds.
     * When omitted, it is seven days before `end`, rounded down to a whole multiple of `bucket_duration`,
     * so that repeated requests with default parameters return the same bucket boundaries.
     */
    start?: DateTime
    /**
     * The exclusive end of the range, as a date or epoch milliseconds.
     * @server_default now
     */
    end?: DateTime
    /**
     * The duration of each bucket. It must be greater than zero, and the range must divide into at most 1,000 buckets.
     * @server_default 1h
     */
    bucket_duration?: Duration
    /**
     * The period to wait for a connection to the master node.
     * If no response is received before the timeout expires, the request fails and returns an error.
     * @server_default 30s
     */
    master_timeout?: Duration
  }
}
