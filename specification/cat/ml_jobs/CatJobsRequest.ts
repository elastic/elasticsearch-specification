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

import { CatRequestBase, CatAnonalyDetectorColumns } from '@cat/_types/CatBase'
import { Bytes, Id } from '@_types/common'
import { TimeUnit } from '@_types/Time'

/**
 * Get anomaly detection jobs.
 * Returns configuration and usage information for anomaly detection jobs.
 * This API returns a maximum of 10,000 jobs.
 * If the Elasticsearch security features are enabled, you must have `monitor_ml`,
 * `monitor`, `manage_ml`, or `manage` cluster privileges to use this API.
 *
 * CAT APIs are only intended for human consumption using the Kibana
 * console or command line. They are not intended for use by applications. For
 * application consumption, use the get anomaly detection job statistics API.
 *
 * @rest_spec_name cat.ml_jobs
 * @availability stack since=7.7.0 stability=stable
 * @availability serverless stability=stable visibility=public
 * @cluster_privileges monitor_ml
 * @doc_id cat-anomaly-detectors
 */
export interface Request extends CatRequestBase {
  path_parts: {
    /**
     * Identifier for the anomaly detection job.
     */
    job_id?: Id
  }
  query_parameters: {
    /**
     * Specifies what to do when the request:
     *
     * * Contains wildcard expressions and there are no jobs that match.
     * * Contains the `_all` string or no identifiers and there are no matches.
     * * Contains wildcard expressions and there are only partial matches.
     *
     * If `true`, the API returns an empty jobs array when there are no matches and the subset of results when there
     * are partial matches. If `false`, the API returns a 404 status code when there are no matches or only partial
     * matches.
     * @server_default true
     */
    allow_no_match?: boolean
    /**
     * The unit used to display byte values.
     */
    bytes?: Bytes
    /**
     * Comma-separated list of column names to display.
     * @server_default buckets.count,data.processed_records,forecasts.total,id,model.bytes,model.memory_status,state
     */
    h?: CatAnonalyDetectorColumns
    /** Comma-separated list of column names or column aliases used to sort the response. */
    s?: CatAnonalyDetectorColumns
    /**
     * The unit used to display time values.
     */
    time?: TimeUnit
  }
}
