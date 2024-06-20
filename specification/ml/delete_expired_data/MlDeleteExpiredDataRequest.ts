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
import { float } from '@_types/Numeric'
import { Duration } from '@_types/Time'

/**
 * Deletes expired and unused machine learning data.
 * Deletes all job results, model snapshots and forecast data that have exceeded
 * their retention days period. Machine learning state documents that are not
 * associated with any job are also deleted.
 * You can limit the request to a single or set of anomaly detection jobs by
 * using a job identifier, a group name, a comma-separated list of jobs, or a
 * wildcard expression. You can delete expired data for all anomaly detection
 * jobs by using _all, by specifying * as the <job_id>, or by omitting the
 * <job_id>.
 * @rest_spec_name ml.delete_expired_data
 * @availability stack since=5.4.0 stability=stable
 * @availability serverless stability=stable visibility=private
 * @cluster_privileges manage_ml
 */
export interface Request extends RequestBase {
  path_parts: {
    /**
     * Identifier for an anomaly detection job. It can be a job identifier, a
     * group name, or a wildcard expression.
     */
    job_id?: Id
  }
  query_parameters: {
    /**
     * The desired requests per second for the deletion processes. The default
     * behavior is no throttling.
     */
    requests_per_second?: float
    /**
     * How long can the underlying delete processes run until they are canceled.
     * @server_default 8h
     */
    timeout?: Duration
  }
  body: {
    /**
     * The desired requests per second for the deletion processes. The default
     * behavior is no throttling.
     */
    requests_per_second?: float
    /**
     * How long can the underlying delete processes run until they are canceled.
     * @server_default 8h
     */
    timeout?: Duration
  }
}
