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
import { integer } from '@_types/Numeric'
import { SortOrder } from '@_types/sort'
import { DateTime } from '@_types/Time'
import { RecoveryRunStatus } from '../_types/RecoveryRunStatus'

/**
 * List recoveries.
 *
 * List the recoveries that were started with the start recovery API, including those that have finished.
 * This API is intended for internal operator use.
 * Recoveries are ordered by start time, and the most recent are returned first by default.
 * To retrieve further pages, pass the start time and identifier of the last recovery of a page as `search_after_started_at` and `search_after_recovery_id`.
 * @rest_spec_name data_recovery.list_recoveries
 * @availability serverless visibility=private
 * @doc_id data-recovery-list-recoveries
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_data_recovery/recoveries'
      methods: ['GET']
    }
  ]
  response_media_type: MediaType.Json
  query_parameters: {
    /**
     * The maximum number of recoveries to return. The value must be between 1 and 1000.
     * @server_default 100
     */
    size?: integer
    /** Return only recoveries that started at or after this time, as an ISO-8601 timestamp. */
    started_at_gte?: DateTime
    /** Return only recoveries that started before this time, as an ISO-8601 timestamp. It must not be earlier than `started_at_gte`. */
    started_at_lt?: DateTime
    /**
     * The order of the recoveries by start time.
     * @server_default desc
     */
    order?: SortOrder
    /**
     * Return only recoveries after this start time in the sort order, to retrieve the next page.
     * It must be provided together with `search_after_recovery_id`.
     */
    search_after_started_at?: DateTime
    /**
     * Return only recoveries after this identifier in the sort order for recoveries with the same start time, to retrieve the next page.
     * It must be provided together with `search_after_started_at`.
     */
    search_after_recovery_id?: Id
    /**
     * A comma-separated list of statuses. Return only recoveries with one of these statuses. By default, recoveries with any status are returned.
     */
    status?: RecoveryRunStatus | RecoveryRunStatus[]
  }
}
