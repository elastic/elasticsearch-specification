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
import { Time } from '@_types/Time'

/**
 * Predicts the future behavior of a time series by using its historical
 * behavior.
 * You can create a forecast job based on an anomaly detection job to
 * extrapolate future behavior. You can delete a forecast by using the Delete
 * forecast API.
 * @rest_spec_name ml.forecast
 * @since 6.1.0
 * @stability stable
 * @cluster_privileges manage_ml
 */
export interface Request extends RequestBase {
  path_parts: {
    /**
     * Identifier for the anomaly detection job.
     */
    job_id: Id
  }
  body: {
    /**
     * A period of time that indicates how far into the future to forecast. For
     * example, `30d` corresponds to 30 days. The forecast starts at the last
     * record that was processed.
     * @server_default 1d
     */
    duration?: Time
    /**
     * The period of time that forecast results are retained. After a forecast
     * expires, the results are deleted. If set to a value of 0, the forecast is
     * never automatically deleted.
     * @server_default 14d
     */
    expires_in?: Time
    /**
     * The maximum memory the forecast can use. If the forecast needs to use
     * more than the provided amount, it will spool to disk. Default is 20mb,
     * maximum is 500mb and minimum is 1mb. If set to 40% or more of the job’s
     * configured memory limit, it is automatically reduced to below that
     * amount.
     * @server_default 20mb
     */
    max_model_memory?: string
  }
}
