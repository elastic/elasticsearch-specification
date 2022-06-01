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
 * number of milliseconds since the Epoch.
 */
export type DateTime = string | long

/** Milliseconds since the Epoch */
export type EpochMillis = long

/** Seconds since the Epoch */
export type EpochSeconds = long

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
 */
// Used to be Time, see ES TimeValue
export type Duration = string | -1 | 0

/**
 * A date histogram interval. Similar to `Duration` with additional units: `w` (week), `M` (month), `q` (quarter) and
 * `y` (year)
 */
// Used to be DateMathTime, see ES DateHistogramInterval
export type DurationLarge = string

/** A duration expressed in seconds */
export type DurationSeconds = long

/** A duration expressed in milliseconds */
export type DurationMillis = long

/** A duration expressed in fractional milliseconds */
export type DurationFloatMillis = double

/** A duration expressed in nanoseconds */
export type DurationNanos = long

export enum TimeUnit {
  /** @codegen_name nanoseconds */
  nanos,
  /** @codegen_name microseconds */
  micros,
  /** @codegen_name milliseconds */
  ms,
  /** @codegen_name seconds */
  s,
  /** @codegen_name minutes */
  m,
  /** @codegen_name hours */
  h,
  /** @codegen_name days */
  d
}
