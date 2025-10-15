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
import { double, integer } from '@_types/Numeric'
import { DateTime, Duration } from '@_types/Time'

/**
 * Get overall bucket results.
 *
 * Retrievs overall bucket results that summarize the bucket results of
 * multiple anomaly detection jobs.
 *
 * The `overall_score` is calculated by combining the scores of all the
 * buckets within the overall bucket span. First, the maximum
 * `anomaly_score` per anomaly detection job in the overall bucket is
 * calculated. Then the `top_n` of those scores are averaged to result in
 * the `overall_score`. This means that you can fine-tune the
 * `overall_score` so that it is more or less sensitive to the number of
 * jobs that detect an anomaly at the same time. For example, if you set
 * `top_n` to `1`, the `overall_score` is the maximum bucket score in the
 * overall bucket. Alternatively, if you set `top_n` to the number of jobs,
 * the `overall_score` is high only when all jobs detect anomalies in that
 * overall bucket. If you set the `bucket_span` parameter (to a value
 * greater than its default), the `overall_score` is the maximum
 * `overall_score` of the overall buckets that have a span equal to the
 * jobs' largest bucket span.
 * @rest_spec_name ml.get_overall_buckets
 * @availability stack since=6.1.0 stability=stable
 * @availability serverless stability=stable visibility=public
 * @cluster_privileges monitor_ml
 * @doc_tag ml anomaly
 * @doc_id ml-get-overall-buckets
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_ml/anomaly_detectors/{job_id}/results/overall_buckets'
      methods: ['GET', 'POST']
    }
  ]
  path_parts: {
    /**
     * Identifier for the anomaly detection job. It can be a job identifier, a
     * group name, a comma-separated list of jobs or groups, or a wildcard
     * expression.
     *
     * You can summarize the bucket results for all anomaly detection jobs by
     * using `_all` or by specifying `*` as the `<job_id>`.
     */
    job_id: Id
  }
  query_parameters: {
    /**
     * Specifies what to do when the request:
     *
     * 1. Contains wildcard expressions and there are no jobs that match.
     * 2. Contains the `_all` string or no identifiers and there are no matches.
     * 3. Contains wildcard expressions and there are only partial matches.
     *
     * If `true`, the request returns an empty `jobs` array when there are no
     * matches and the subset of results when there are partial matches. If this
     * parameter is `false`, the request returns a `404` status code when there
     * are no matches or only partial matches.
     * @server_default true
     */
    allow_no_match?: boolean
    /**
     * The span of the overall buckets. Must be greater or equal to the largest
     * bucket span of the specified anomaly detection jobs, which is the default
     * value.
     *
     * By default, an overall bucket has a span equal to the largest bucket span
     * of the specified anomaly detection jobs. To override that behavior, use
     * the optional `bucket_span` parameter.
     */
    bucket_span?: Duration
    /**
     * Returns overall buckets with timestamps earlier than this time.
     */
    end?: DateTime
    /**
     * If `true`, the output excludes interim results.
     * @server_default false
     */
    exclude_interim?: boolean
    /**
     * Returns overall buckets with overall scores greater than or equal to this
     * value.
     */
    overall_score?: double
    /**
     * Returns overall buckets with timestamps after this time.
     */
    start?: DateTime
    /**
     * The number of top anomaly detection job bucket scores to be used in the
     * `overall_score` calculation.
     * @server_default 1
     */
    top_n?: integer
  }
  body?: {
    /**
     * Refer to the description for the `allow_no_match` query parameter.
     * @server_default true
     */
    allow_no_match?: boolean
    /**
     * Refer to the description for the `bucket_span` query parameter.
     */
    bucket_span?: Duration
    /**
     * Refer to the description for the `end` query parameter.
     */
    end?: DateTime
    /**
     * Refer to the description for the `exclude_interim` query parameter.
     * @server_default false
     */
    exclude_interim?: boolean
    /**
     * Refer to the description for the `overall_score` query parameter.
     */
    overall_score?: double
    /**
     * Refer to the description for the `start` query parameter.
     */
    start?: DateTime
    /**
     * Refer to the description for the `top_n` query parameter.
     * @server_default 1
     */
    top_n?: integer
  }
}
