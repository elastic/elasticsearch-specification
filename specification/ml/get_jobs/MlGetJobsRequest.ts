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
import { Ids } from '@_types/common'

/**
 * Get anomaly detection jobs configuration info.
 *
 * You can get information for multiple anomaly detection jobs in a single API
 * request by using a group name, a comma-separated list of jobs, or a wildcard
 * expression. You can get information for all anomaly detection jobs by using
 * `_all`, by specifying `*` as the `<job_id>`, or by omitting the `<job_id>`.
 * @rest_spec_name ml.get_jobs
 * @availability stack since=5.5.0 stability=stable
 * @availability serverless stability=stable visibility=public
 * @cluster_privileges monitor_ml
 * @doc_tag ml anomaly
 * @doc_id ml-get-job
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_ml/anomaly_detectors/{job_id}'
      methods: ['GET']
    },
    {
      path: '/_ml/anomaly_detectors'
      methods: ['GET']
    }
  ]
  path_parts: {
    /**
     * Identifier for the anomaly detection job. It can be a job identifier, a
     * group name, or a wildcard expression. If you do not specify one of these
     * options, the API returns information for all anomaly detection jobs.
     */
    job_id?: Ids
  }
  query_parameters: {
    /**
     * Specifies what to do when the request:
     *
     * 1. Contains wildcard expressions and there are no jobs that match.
     * 2. Contains the _all string or no identifiers and there are no matches.
     * 3. Contains wildcard expressions and there are only partial matches.
     *
     * The default value is `true`, which returns an empty `jobs` array when
     * there are no matches and the subset of results when there are partial
     * matches. If this parameter is `false`, the request returns a `404` status
     * code when there are no matches or only partial matches.
     * @server_default true
     */
    allow_no_match?: boolean
    /**
     * Indicates if certain fields should be removed from the configuration on
     * retrieval. This allows the configuration to be in an acceptable format to
     * be retrieved and then added to another cluster.
     * @server_default false
     */
    exclude_generated?: boolean
  }
}
