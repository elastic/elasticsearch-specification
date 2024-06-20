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
import { DateTime } from '@_types/Time'

/**
 * Retrieves information about the scheduled events in calendars.
 * @rest_spec_name ml.get_calendar_events
 * @availability stack since=6.2.0 stability=stable
 * @availability serverless stability=stable visibility=public
 * @cluster_privileges monitor_ml
 */
export interface Request extends RequestBase {
  path_parts: {
    /** A string that uniquely identifies a calendar. You can get information for multiple calendars by using a comma-separated list of ids or a wildcard expression. You can get information for all calendars by using `_all` or `*` or by omitting the calendar identifier.*/
    calendar_id: Id
  }
  query_parameters: {
    /** Specifies to get events with timestamps earlier than this time. */
    end?: DateTime
    /** Skips the specified number of events.
     * @server_default 0
     */
    from?: integer
    /** Specifies to get events for a specific anomaly detection job identifier or job group. It must be used with a calendar identifier of `_all` or `*`. */
    job_id?: Id
    /** Specifies the maximum number of events to obtain.
     * @server_default 100
     */
    size?: integer
    /** Specifies to get events with timestamps after this time. */
    start?: DateTime
  }
}
