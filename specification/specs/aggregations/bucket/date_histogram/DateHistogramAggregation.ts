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

class DateHistogramAggregation {
  calendar_interval?: Union<DateInterval, Time>
  extended_bounds?: ExtendedBounds<DateMath>
  hard_bounds?: ExtendedBounds<DateMath>
  field?: Field
  fixed_interval?: Union<DateInterval, Time>
  format?: string
  interval?: Union<DateInterval, Time>
  min_doc_count?: integer
  missing?: DateString
  offset?: Time
  order?: HistogramOrder
  params?: Dictionary<string, UserDefinedValue>
  script?: Script
  time_zone?: string
}
