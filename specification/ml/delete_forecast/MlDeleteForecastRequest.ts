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
 * Delete forecasts from a job.
 *
 * By default, forecasts are retained for 14 days. You can specify a
 * different retention period with the `expires_in` parameter in the forecast
 * jobs API. The delete forecast API enables you to delete one or more
 * forecasts before they expire.
 * @rest_spec_name ml.delete_forecast
 * @availability stack since=6.5.0 stability=stable
 * @availability serverless stability=stable visibility=private
 * @cluster_privileges manage_ml
 * @doc_tag ml anomaly
 * @doc_id ml-delete-forecast
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_ml/anomaly_detectors/{job_id}/_forecast'
      methods: ['DELETE']
    },
    {
      path: '/_ml/anomaly_detectors/{job_id}/_forecast/{forecast_id}'
      methods: ['DELETE']
    }
  ]
  path_parts: {
    /**
     * Identifier for the anomaly detection job.
     */
    job_id: Id
    /**
     * A comma-separated list of forecast identifiers. If you do not specify
     * this optional parameter or if you specify `_all` or `*` the API deletes
     * all forecasts from the job.
     */
    forecast_id?: Id
  }
  query_parameters: {
    /**
     * Specifies whether an error occurs when there are no forecasts. In
     * particular, if this parameter is set to `false` and there are no
     * forecasts associated with the job, attempts to delete all forecasts
     * return an error.
     * @server_default true
     */
    allow_no_forecasts?: boolean
    /**
     * Specifies the period of time to wait for the completion of the delete
     * operation. When this period of time elapses, the API fails and returns an
     * error.
     * @server_default 30s
     */
    timeout?: Duration
  }
}
