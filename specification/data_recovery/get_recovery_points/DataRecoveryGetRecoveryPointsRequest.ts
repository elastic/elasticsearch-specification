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
import { integer } from '@_types/Numeric'
import { DateTime, Duration } from '@_types/Time'
import { MediaType } from '@_types/common'

/**
 * Get recovery points.
 *
 * Get recovery points from the platform-managed data recovery repository.
 * This API is intended for internal operator use.
 * Recovery points are returned in descending order by end time. Repository,
 * snapshot, and policy identifiers are not exposed.
 * @rest_spec_name data_recovery.get_recovery_points
 * @availability serverless visibility=private
 * @doc_id data-recovery-get-recovery-points
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_data_recovery/points'
      methods: ['GET']
    }
  ]
  response_media_type: MediaType.Json
  query_parameters: {
    /**
     * Return only recovery points whose end time is earlier than this value.
     * The boundary is exclusive and can be set to the last recovery point's
     * end time to retrieve the next page.
     */
    end_time_before?: DateTime
    /**
     * The period to wait for a connection to the master node.
     * If no response is received before the timeout expires, the request fails and returns an error.
     * @server_default 30s
     */
    master_timeout?: Duration
    /**
     * The maximum number of recovery points to return. The value must be between 1 and 1000.
     * @server_default 100
     */
    size?: integer
  }
}
