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
import { DateTime } from '@_types/Time'

/**
 * Sends data to an anomaly detection job for analysis.
 *
 * IMPORTANT: For each job, data can be accepted from only a single connection at a time.
 * It is not currently possible to post data to multiple jobs using wildcards or a comma-separated list.
 * @rest_spec_name ml.post_data
 * @availability stack since=5.4.0 stability=stable
 * @availability serverless stability=stable visibility=private
 * @deprecated 7.11.0 Posting data directly to anomaly detection jobs is deprecated, in a future major version a datafeed will be required.
 * @cluster_privileges manage_ml
 */
export interface Request<TData> extends RequestBase {
  path_parts: {
    /**
     * Identifier for the anomaly detection job. The job must have a state of open to receive and process the data.
     */
    job_id: Id
  }
  query_parameters: {
    /**
     * Specifies the end of the bucket resetting range.
     */
    reset_end?: DateTime
    /**
     * Specifies the start of the bucket resetting range.
     */
    reset_start?: DateTime
  }
  /**
   * A sequence of one or more JSON documents containing the data to be analyzed.
   * Multiple JSON documents can be sent, either adjacent with no separator in between them or whitespace separated.
   * Newline delimited JSON (NDJSON) is a possible whitespace separated format, and for this the `Content-Type header` should be set to `application/x-ndjson`.
   *
   * The following documents will not be processed:
   *
   * * Documents not in chronological order and outside the latency window
   * * Records with an invalid timestamp
   *
   * Upload sizes are limited to the Elasticsearch HTTP receive buffer size (default 100 Mb).
   * If your data is larger, split it into multiple chunks and upload each one separately in sequential time order.
   * When running in real time, it is generally recommended that you perform many small uploads,
   * rather than queueing data to upload larger files.
   * @codegen_name data
   * */
  body: Array<TData>
}
