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

import { Id } from '@_types/common'
import { integer } from '@_types/Numeric'
import { DateTime } from '@_types/Time'

export class CalendarEvent {
  /** A string that uniquely identifies a calendar. */
  calendar_id?: Id
  event_id?: Id
  /** A description of the scheduled event. */
  description: string
  /** The timestamp for the end of the scheduled event in milliseconds since the epoch or ISO 8601 format. */
  end_time: DateTime
  /** The timestamp for the beginning of the scheduled event in milliseconds since the epoch or ISO 8601 format. */
  start_time: DateTime
  /** When true the model will not create results for this calendar period.
   * @server_default true
   */
  skip_result?: boolean
  /** When true the model will not be updated for this calendar period.
   * @server_default true
   */
  skip_model_update?: boolean
  /** Shift time by this many seconds. For example adjust time for daylight savings changes */
  force_time_shift?: integer
}
