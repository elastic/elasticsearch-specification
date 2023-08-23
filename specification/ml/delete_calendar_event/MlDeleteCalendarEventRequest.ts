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

/**
 * Deletes scheduled events from a calendar.
 * @rest_spec_name ml.delete_calendar_event
 * @availability stack since=6.2.0 stability=stable
 * @availability serverless stability=stable visibility=public
 * @doc_id ml-delete-calendar-event
 */
export interface Request extends RequestBase {
  path_parts: {
    /**
     * A string that uniquely identifies a calendar.
     */
    calendar_id: Id
    /**
     * Identifier for the scheduled event.
     * You can obtain this identifier by using the get calendar events API.
     */
    event_id: Id
  }
}
