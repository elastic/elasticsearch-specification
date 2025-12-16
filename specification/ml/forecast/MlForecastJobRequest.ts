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
 * Predict future behavior of a time series.
 *
 * Forecasts are not supported for jobs that perform population analysis; an
 * error occurs if you try to create a forecast for a job that has an
 * `over_field_name` in its configuration. Forcasts predict future behavior
 * based on historical data.
 *
 * @rest_spec_name ml.forecast
 * @availability stack since=6.1.0 stability=stable
 * @availability serverless stability=stable visibility=private
 * @cluster_privileges manage_ml
 * @doc_tag ml anomaly
 * @doc_id ml-forecast
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_ml/anomaly_detectors/{job_id}/_forecast'
      methods: ['POST']
    }
  ]
  path_parts: {
    /**
     * Identifier for the anomaly detection job. The job must be open when you
     * create a forecast; otherwise, an error occurs.
     */
    job_id: Id
  }
  request_media_type: MediaType.Json
  response_media_type: MediaType.Json
  query_parameters: {
    /**
     * A period of time that indicates how far into the future to forecast. For
     * example, `30d` corresponds to 30 days. The forecast starts at the last
     * record that was processed.
     * @server_default 1d
     */
    duration?: Duration
    /**
     * The period of time that forecast results are retained. After a forecast
     * expires, the results are deleted. If set to a value of 0, the forecast is
     * never automatically deleted.
     * @server_default 14d
     */
    expires_in?: Duration
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
  body?: {
    /**
     * Refer to the description for the `duration` query parameter.
     * @server_default 1d
     */
    duration?: Duration
    /**
     * Refer to the description for the `expires_in` query parameter.
     * @server_default 14d
     */
    expires_in?: Duration
    /**
     * Refer to the description for the `max_model_memory` query parameter.
     * @server_default 20mb
     */
    max_model_memory?: string
  }
}
