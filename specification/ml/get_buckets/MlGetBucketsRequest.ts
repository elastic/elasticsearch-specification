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
import { Field, Id } from '@_types/common'
import { double, integer } from '@_types/Numeric'
import { DateTime } from '@_types/Time'
import { Page } from '@ml/_types/Page'

/**
 * Get anomaly detection job results for buckets.
 * The API presents a chronological view of the records, grouped by bucket.
 * @rest_spec_name ml.get_buckets
 * @availability stack since=5.4.0 stability=stable
 * @availability serverless stability=stable visibility=private
 * @cluster_privileges monitor_ml
 * @doc_tag ml anomaly
 * @doc_id ml-get-bucket
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_ml/anomaly_detectors/{job_id}/results/buckets/{timestamp}'
      methods: ['GET', 'POST']
    },
    {
      path: '/_ml/anomaly_detectors/{job_id}/results/buckets'
      methods: ['GET', 'POST']
    }
  ]
  path_parts: {
    /**
     * Identifier for the anomaly detection job.
     */
    job_id: Id
    /**
     * The timestamp of a single bucket result. If you do not specify this
     * parameter, the API returns information about all buckets.
     */
    timestamp?: DateTime
  }
  query_parameters: {
    /**
     * Returns buckets with anomaly scores greater or equal than this value.
     * @server_default 0.0
     */
    anomaly_score?: double
    /**
     * If `true`, the buckets are sorted in descending order.
     * @server_default false
     */
    desc?: boolean
    /**
     * Returns buckets with timestamps earlier than this time. `-1` means it is
     * unset and results are not limited to specific timestamps.
     * @server_default -1
     */
    end?: DateTime
    /**
     *  If `true`, the output excludes interim results.
     * @server_default false
     */
    exclude_interim?: boolean
    /**
     * If true, the output includes anomaly records.
     * @server_default false
     */
    expand?: boolean
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
     * Specifies the sort field for the requested buckets.
     * @server_default timestamp
     */
    sort?: Field
    /**
     * Returns buckets with timestamps after this time. `-1` means it is unset
     * and results are not limited to specific timestamps.
     * @server_default -1
     */
    start?: DateTime
  }
  body: {
    /**
     * Refer to the description for the `anomaly_score` query parameter.
     * @server_default 0.0
     */
    anomaly_score?: double
    /**
     * Refer to the description for the `desc` query parameter.
     * @server_default false
     */
    desc?: boolean
    /**
     * Refer to the description for the `end` query parameter.
     * @server_default -1
     */
    end?: DateTime
    /**
     * Refer to the description for the `exclude_interim` query parameter.
     * @server_default false
     */
    exclude_interim?: boolean
    /**
     * Refer to the description for the `expand` query parameter.
     * @server_default false
     */
    expand?: boolean
    page?: Page
    /**
     * Refer to the desription for the `sort` query parameter.
     * @server_default timestamp
     */
    sort?: Field
    /**
     * Refer to the description for the `start` query parameter.
     * @server_default -1
     */
    start?: DateTime
  }
}
