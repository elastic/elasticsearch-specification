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

import { integer } from '@_types/Numeric'
import { DateTime, Duration } from '@_types/Time'
import { RpoBucket } from './types'

export class Response {
  body: {
    /** The inclusive start of the range. */
    start: DateTime
    /** The exclusive end of the range. */
    end: DateTime
    /** The duration of each bucket. */
    bucket_duration: Duration
    /** The number of buckets in the series. */
    bucket_count: integer
    /** The buckets in ascending order by start time. */
    buckets: RpoBucket[]
  }
}
