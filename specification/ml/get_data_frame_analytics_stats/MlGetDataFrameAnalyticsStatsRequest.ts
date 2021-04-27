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
import { integer } from '@_types/Numeric'

/**
 * @rest_spec_name ml.get_data_frame_analytics_stats
 * @since 7.3.0
 * @stability TODO
 */
export interface MlGetDataFrameAnalyticsStatsRequest extends RequestBase {
  path_parts?: {
    /** Identifier for the data frame analytics job. If you do not specify this option, the API returns information for the first hundred data frame analytics jobs. */
    id?: Id
  }
  query_parameters?: {
    /**
     * @server_default true
     */
    allow_no_match?: boolean
    /**
     * Skips the specified number of data frame analytics jobs.
     * @server_default 0
     */
    from?: integer
    /**
     * Specifies the maximum number of data frame analytics jobs to obtain.
     * @server_default 100
     */
    size?: integer
    /**
     * Defines whether the stats response should be verbose.
     * @server_default false
     */
    verbose?: boolean
  }
}
