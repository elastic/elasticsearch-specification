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
import { CalendarEvent } from '../_types/CalendarEvent'

/**
 * Add scheduled events to the calendar.
 * @rest_spec_name ml.post_calendar_events
 * @availability stack since=6.2.0 stability=stable
 * @availability serverless stability=stable visibility=public
 * @cluster_privileges manage_ml
 * @doc_tag ml anomaly
 * @doc_id ml-post-calendar-event
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_ml/calendars/{calendar_id}/events'
      methods: ['POST']
    }
  ]
  path_parts: {
    /** A string that uniquely identifies a calendar. */
    calendar_id: Id
  }
  body: {
    /** A list of one of more scheduled events. The event’s start and end times can be specified as integer milliseconds since the epoch or as a string in ISO 8601 format. */
    events: CalendarEvent[]
  }
}
