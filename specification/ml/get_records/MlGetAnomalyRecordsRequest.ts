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
 * Get anomaly records for an anomaly detection job.
 * Records contain the detailed analytical results. They describe the anomalous
 * activity that has been identified in the input data based on the detector
 * configuration.
 * There can be many anomaly records depending on the characteristics and size
 * of the input data. In practice, there are often too many to be able to
 * manually process them. The machine learning features therefore perform a
 * sophisticated aggregation of the anomaly records into buckets.
 * The number of record results depends on the number of anomalies found in each
 * bucket, which relates to the number of time series being modeled and the
 * number of detectors.
 * @rest_spec_name ml.get_records
 * @availability stack since=5.4.0 stability=stable
 * @availability serverless stability=stable visibility=private
 * @cluster_privileges monitor_ml
 * @doc_tag ml anomaly
 * @doc_id ml-get-record
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_ml/anomaly_detectors/{job_id}/results/records'
      methods: ['GET', 'POST']
    }
  ]
  path_parts: {
    /**
     * Identifier for the anomaly detection job.
     */
    job_id: Id
  }
  query_parameters: {
    /**
     * If true, the results are sorted in descending order.
     * @server_default false
     */
    desc?: boolean
    /**
     * Returns records with timestamps earlier than this time. The default value
     * means results are not limited to specific timestamps.
     * @server_default -1
     */
    end?: DateTime
    /**
     * If `true`, the output excludes interim results.
     * @server_default false
     */
    exclude_interim?: boolean
    /**
     * Skips the specified number of records.
     * @server_default 0
     */
    from?: integer
    /**
     * Returns records with anomaly scores greater or equal than this value.
     * @server_default 0.0
     */
    record_score?: double
    /**
     * Specifies the maximum number of records to obtain.
     * @server_default 100
     */
    size?: integer
    /**
     * Specifies the sort field for the requested records.
     * @server_default record_score
     */
    sort?: Field
    /**
     * Returns records with timestamps after this time. The default value means
     * results are not limited to specific timestamps.
     * @server_default -1
     */
    start?: DateTime
  }
  body?: {
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
    page?: Page
    /**
     * Refer to the description for the `record_score` query parameter.
     * @server_default 0.0
     */
    record_score?: double
    /**
     * Refer to the description for the `sort` query parameter.
     * @server_default record_score
     */
    sort?: Field
    /**
     * Refer to the description for the `start` query parameter.
     * @server_default -1
     */
    start?: DateTime
  }
}
