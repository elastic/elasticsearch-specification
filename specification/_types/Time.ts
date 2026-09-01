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

import { double, long } from './Numeric'

/**
 * A date and time, either as a string whose format can depend on the context (defaulting to ISO 8601), or a
 * number of milliseconds since the Epoch. Elasticsearch accepts both as input, but will generally output a string
 * representation.
 */
export type DateTime = string | EpochTime<UnitMillis>

/** Time unit for seconds */
export type UnitSeconds = long
/** Time unit for fractional seconds */
export type UnitFloatSeconds = double
/** Time unit for milliseconds */
export type UnitMillis = long
/** Time unit for nanoseconds */
export type UnitNanos = long
/** Time unit for fractional milliseconds */
export type UnitFloatMillis = double

export type EpochTime<Unit> = Unit

export type DateMath = string

/** Time of day, expressed as HH:MM:SS */
export type TimeOfDay = string

export type TimeZone = string

/** @doc_id mapping-date-format */
export type DateFormat = string

/**
 * A duration. Units can be `nanos`, `micros`, `ms` (milliseconds), `s` (seconds), `m` (minutes), `h` (hours) and
 * `d` (days). Also accepts "0" without a unit and "-1" to indicate an unspecified value.
 * @doc_id time-value
 * @ext_doc_id time-units
 */
// Used to be Time, see ES TimeValue
export type Duration = string | -1 | 0

/**
 * A date histogram interval. Similar to `Duration` with additional units: `w` (week), `M` (month), `q` (quarter) and
 * `y` (year)
 */
// Used to be DateMathTime, see ES DateHistogramInterval
export type DurationLarge = string

export type DurationValue<Unit> = Unit

export enum TimeUnit {
  nanoseconds = 'nanos',
  microseconds = 'micros',
  milliseconds = 'ms',
  seconds = 's',
  minutes = 'm',
  hours = 'h',
  days = 'd'
}
