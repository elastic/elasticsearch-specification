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
 * @rest_spec_name ml.stop_data_frame_analytics
 * @since 7.3.0
 * @stability stable
 */
export interface Request extends RequestBase {
  path_parts: {
    /** Identifier for the data frame analytics job. This identifier can contain lowercase alphanumeric characters (a-z and 0-9), hyphens, and underscores. It must start and end with alphanumeric characters. */
    id: Id
  }
  query_parameters: {
    /** @server_default true */
    allow_no_match?: boolean
    /**
     * If true, the data frame analytics job is stopped forcefully.
     * @server_default false
     */
    force?: boolean
    /**
     * Controls the amount of time to wait until the data frame analytics job stops. Defaults to 20 seconds.
     * @server_default 20s
     */
    timeout?: Time
  }
}
