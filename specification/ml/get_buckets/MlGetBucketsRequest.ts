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

import { Page } from '@ml/_types/Page'
import { RequestBase } from '@_types/Base'
import { Field, Id } from '@_types/common'
import { double, integer } from '@_types/Numeric'
import { DateString, Timestamp } from '@_types/Time'

/**
 * Retrieves anomaly detection job results for one or more buckets.
 * The API presents a chronological view of the records, grouped by bucket.
 * @rest_spec_name ml.get_buckets
 * @since 5.4.0
 * @stability stable
 * @cluster_privileges monitor_ml
 */
export interface Request extends RequestBase {
  path_parts: {
    /**
     * Identifier for the anomaly detection job.
     */
    job_id: Id
    /**
     * The timestamp of a single bucket result. If you do not specify this
     * parameter, the API returns information about all buckets.
     */
    timestamp?: Timestamp
  }
  query_parameters: {
    /**
     * Skips the specified number of buckets.
     * @server_default 0
     */
    from?: integer
    /**
     * Specifies the maximum number of buckets to obtain.
     * @server_default 100
     */
    size?: integer
    /**
     *  If `true`, the output excludes interim results.
     * @server_default false
     */
    exclude_interim?: boolean
    /**
     * Specifies the sort field for the requested buckets.
     * @server_default timestamp
     */
    sort?: Field
    /**
     * If `true`, the buckets are sorted in descending order.
     * @server_default false
     */
    desc?: boolean
    /**
     * Returns buckets with timestamps after this time. `-1` means it is unset
     * and results are not limited to specific timestamps.
     * @server_default -1
     */
    start?: DateString
    /**
     * Returns buckets with timestamps earlier than this time. `-1` means it is
     * unset and results are not limited to specific timestamps.
     * @server_default -1
     */
    end?: DateString
  }
  body: {
    /**
     * Returns buckets with anomaly scores greater or equal than this value.
     * @server_default 0.0
     */
    anomaly_score?: double
    /**
     *  If `true`, the buckets are sorted in descending order.
     * @server_default false
     */
    desc?: boolean
    /**
     * If `true`, the output excludes interim results.
     * @server_default false
     */
    exclude_interim?: boolean
    /**
     * If true, the output includes anomaly records.
     * @server_default false
     */
    expand?: boolean
    /**
     * Specifies the sort field for the requested buckets.
     * @server_default timestamp
     */
    sort?: Field
    /**
     * Returns buckets with timestamps after this time. `-1` means it is unset
     * and results are not limited to specific timestamps.
     * @server_default -1
     */
    start?: DateString
    /**
     * Returns buckets with timestamps earlier than this time. `-1` means it is
     * unset and results are not limited to specific timestamps.
     * @server_default -1
     */
    end?: DateString
  }
}
