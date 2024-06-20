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
import { Duration } from '@_types/Time'

/**
 * Opens one or more anomaly detection jobs.
 * An anomaly detection job must be opened in order for it to be ready to
 * receive and analyze data. It can be opened and closed multiple times
 * throughout its lifecycle.
 * When you open a new job, it starts with an empty model.
 * When you open an existing job, the most recent model state is automatically
 * loaded. The job is ready to resume its analysis from where it left off, once
 * new data is received.
 * @rest_spec_name ml.open_job
 * @availability stack since=5.4.0 stability=stable
 * @availability serverless stability=stable visibility=public
 * @cluster_privileges manage_ml
 */
export interface Request extends RequestBase {
  path_parts: {
    /**
     * Identifier for the anomaly detection job.
     */
    job_id: Id
  }
  query_parameters: {
    /**
     * Controls the time to wait until a job has opened.
     * @server_default 30m
     */
    timeout?: Duration
  }
  body: {
    /**
     * Refer to the description for the `timeout` query parameter.
     * @server_default 30m
     */
    timeout?: Duration
  }
}
