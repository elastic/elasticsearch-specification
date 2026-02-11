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
import { Duration } from '@_types/Time'

/**
 * Close anomaly detection jobs.
 *
 * A job can be opened and closed multiple times throughout its lifecycle. A closed job cannot receive data or perform analysis operations, but you can still explore and navigate results.
 * When you close a job, it runs housekeeping tasks such as pruning the model history, flushing buffers, calculating final results and persisting the model snapshots. Depending upon the size of the job, it could take several minutes to close and the equivalent time to re-open. After it is closed, the job has a minimal overhead on the cluster except for maintaining its meta data. Therefore it is a best practice to close jobs that are no longer required to process data.
 * If you close an anomaly detection job whose datafeed is running, the request first tries to stop the datafeed. This behavior is equivalent to calling stop datafeed API with the same timeout and force parameters as the close job request.
 * When a datafeed that has a specified end date stops, it automatically closes its associated job.
 * @rest_spec_name ml.close_job
 * @category ai/ml
 * @availability stack since=5.4.0 stability=stable
 * @availability serverless stability=stable visibility=public
 * @cluster_privileges manage_ml
 * @doc_id ml-close-job
 * @doc_tag ml anomaly
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_ml/anomaly_detectors/{job_id}/_close'
      methods: ['POST']
    }
  ]
  path_parts: {
    /**
     * Identifier for the anomaly detection job. It can be a job identifier, a group name, or a wildcard expression. You can close multiple anomaly detection jobs in a single API request by using a group name, a comma-separated list of jobs, or a wildcard expression. You can close all jobs by using `_all` or by specifying `*` as the job identifier.
     */
    job_id: Id
  }
  request_media_type: MediaType.Json
  response_media_type: MediaType.Json
  query_parameters: {
    /**
     * Specifies what to do when the request: contains wildcard expressions and there are no jobs that match; contains the  `_all` string or no identifiers and there are no matches; or contains wildcard expressions and there are only partial matches. By default, it returns an empty jobs array when there are no matches and the subset of results when there are partial matches.
     * If `false`, the request returns a 404 status code when there are no matches or only partial matches.
     * @server_default true
     */
    allow_no_match?: boolean
    /**
     * Use to close a failed job, or to forcefully close a job which has not responded to its initial close request; the request returns without performing the associated actions such as flushing buffers and persisting the model snapshots.
     * If you want the job to be in a consistent state after the close job API returns, do not set to `true`. This parameter should be used only in situations where the job has already failed or where you are not interested in results the job might have recently produced or might produce in the future.
     * @server_default false
     */
    force?: boolean
    /**
     * Controls the time to wait until a job has closed.
     * @server_default 30m */
    timeout?: Duration
  }
  body?: {
    /**
     * Refer to the description for the `allow_no_match` query parameter.
     * @server_default true
     */
    allow_no_match?: boolean
    /**
     * Refer to the descriptiion for the `force` query parameter.
     * @server_default false
     */
    force?: boolean
    /**
     * Refer to the description for the `timeout` query parameter.
     * @server_default 30m */
    timeout?: Duration
  }
}
