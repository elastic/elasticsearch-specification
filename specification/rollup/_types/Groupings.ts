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

import { Field, Fields } from '@_types/common'
import { long } from '@_types/Numeric'
import { Duration, TimeZone } from '@_types/Time'

export class Groupings {
  /**
   * A date histogram group aggregates a date field into time-based buckets.
   * This group is mandatory; you currently cannot rollup documents without a timestamp and a `date_histogram` group.
   */
  date_histogram?: DateHistogramGrouping
  /**
   * The histogram group aggregates one or more numeric fields into numeric histogram intervals.
   */
  histogram?: HistogramGrouping
  /**
   * The terms group can be used on keyword or numeric fields to allow bucketing via the terms aggregation at a later point.
   * The indexer enumerates and stores all values of a field for each time-period.
   * This can be potentially costly for high-cardinality groups such as IP addresses, especially if the time-bucket is particularly sparse.
   */
  terms?: TermsGrouping
}

export class DateHistogramGrouping {
  /**
   * How long to wait before rolling up new documents.
   * By default, the indexer attempts to roll up all data that is available.
   * However, it is not uncommon for data to arrive out of order.
   * The indexer is unable to deal with data that arrives after a time-span has been rolled up.
   * You need to specify a delay that matches the longest period of time you expect out-of-order data to arrive.
   */
  delay?: Duration
  /**
   * The date field that is to be rolled up.
   */
  field: Field
  format?: string
  interval?: Duration
  /**
   * The interval of time buckets to be generated when rolling up.
   * @doc_id calendar-and-fixed-intervals
   */
  calendar_interval?: Duration
  /**
   * The interval of time buckets to be generated when rolling up.
   * @doc_id calendar-and-fixed-intervals
   */
  fixed_interval?: Duration
  /**
   * Defines what `time_zone` the rollup documents are stored as.
   * Unlike raw data, which can shift timezones on the fly, rolled documents have to be stored with a specific timezone.
   * By default, rollup documents are stored in `UTC`.
   */
  time_zone?: TimeZone
}

export class TermsGrouping {
  /**
   * The set of fields that you wish to collect terms for.
   * This array can contain fields that are both keyword and numerics.
   * Order does not matter.
   */
  fields: Fields
}

export class HistogramGrouping {
  /**
   * The set of fields that you wish to build histograms for.
   * All fields specified must be some kind of numeric.
   * Order does not matter.
   */
  fields: Fields
  /**
   * The interval of histogram buckets to be generated when rolling up.
   * For example, a value of `5` creates buckets that are five units wide (`0-5`, `5-10`, etc).
   * Note that only one interval can be specified in the histogram group, meaning that all fields being grouped via the histogram must share the same interval.
   */
  interval: long
}
