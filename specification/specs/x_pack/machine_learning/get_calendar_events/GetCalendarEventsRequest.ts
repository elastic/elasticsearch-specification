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

/**
 * @rest_spec_name ml.get_calendar_events
 * @since 6.2.0
 * @stability TODO
 */
interface GetCalendarEventsRequest extends RequestBase {
  path_parts?: {
    calendar_id: Id
  }
  query_parameters?: {
    job_id?: Id // undocumented
    // these params below should all be in the request body, but the tests are failing
    // https://www.elastic.co/guide/en/elasticsearch/reference/current/ml-get-calendar-event.html#ml-get-calendar-event-request-body
    end?: DateString
    from?: integer
    start?: string
    size?: integer
  }
  body?: {
    end?: DateString
    from?: integer
    start?: string
    size?: integer
  }
}
