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
import { DateTime } from '@_types/Time'

/**
 * Force buffered data to be processed.
 *
 * The flush jobs API is only applicable when sending data for analysis using
 * the post data API. Depending on the content of the buffer, then it might
 * additionally calculate new results. Both flush and close operations are
 * similar, however the flush is more efficient if you are expecting to send
 * more data for analysis. When flushing, the job remains open and is available
 * to continue analyzing data. A close operation additionally prunes and
 * persists the model state to disk and the job must be opened again before
 * analyzing further data.
 * @rest_spec_name ml.flush_job
 * @category ai/ml
 * @availability stack since=5.4.0 stability=stable
 * @availability serverless stability=stable visibility=public
 * @cluster_privileges manage_ml
 * @deprecated 9.1.0 Forcing any buffered data to be processed is deprecated, in a future major version a datafeed will be required.
 * @doc_tag ml anomaly
 * @doc_id ml-flush-job
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_ml/anomaly_detectors/{job_id}/_flush'
      methods: ['POST']
    }
  ]
  path_parts: {
    /**
     * Identifier for the anomaly detection job.
     */
    job_id: Id
  }
  request_media_type: MediaType.Json
  response_media_type: MediaType.Json
  query_parameters: {
    /**
     * Specifies to advance to a particular time value. Results are generated
     * and the model is updated for data from the specified time interval.
     */
    // Also accepts `now` as a value, epoch seconds (< 10 digits) and epoch milliseconds
    advance_time?: DateTime
    /**
     * If true, calculates the interim results for the most recent bucket or all
     * buckets within the latency period.
     */
    calc_interim?: boolean
    /**
     * When used in conjunction with `calc_interim` and `start`, specifies the
     * range of buckets on which to calculate interim results.
     */
    // Also accepts `now` as a value, epoch seconds (< 10 digits) and epoch milliseconds
    end?: DateTime
    /**
     * Specifies to skip to a particular time value. Results are not generated
     * and the model is not updated for data from the specified time interval.
     */
    // Also accepts `now` as a value, epoch seconds (< 10 digits) and epoch milliseconds
    skip_time?: DateTime
    /**
     * When used in conjunction with `calc_interim`, specifies the range of
     * buckets on which to calculate interim results.
     */
    // Also accepts `now` as a value, epoch seconds (< 10 digits) and epoch milliseconds
    start?: DateTime
  }
  body?: {
    /**
     * Refer to the description for the `advance_time` query parameter.
     */
    advance_time?: DateTime
    /**
     * Refer to the description for the `calc_interim` query parameter.
     */
    calc_interim?: boolean
    /**
     * Refer to the description for the `end` query parameter.
     */
    end?: DateTime
    /**
     * Refer to the description for the `skip_time` query parameter.
     */
    skip_time?: DateTime
    /**
     * Refer to the description for the `start` query parameter.
     */
    start?: DateTime
  }
}
