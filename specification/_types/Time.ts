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

import { integer, long } from './Numeric'

export class DateMathTimeParsed {
  factor: integer
  interval: DateMathTimeUnit
}

/**
 * A timestamp, for example "2015-01-01T12:10:30Z" or "2015-01-01"
 */
export type DateString = string
/**
 * A duration, for example "5m" or "1M"
 */
export type TimeSpan = string
/**
 * Operations related to a date, for example "now-1h" or "2001.02.01\|\|+1M/d"
 * @doc_id date-math
 */
export type DateMath = string

/** @codegen_names date, millis */
export type DateOrEpochMillis = DateString | Time

export type TimeZone = string

/** @doc_id mapping-date-format */
export type DateFormat = string

export enum DateMathOperation {
  '+' = 0,
  '-' = 1
}

export enum DateMathTimeUnit {
  /** @codegen_name seconds */
  s = 0,
  /** @codegen_name minutes */
  m = 1,
  /** @codegen_name hours */
  h = 2,
  /** @codegen_name days */
  d = 3,
  /** @codegen_name weeks */
  w = 4,
  /** @codegen_name months */
  M = 5,
  /** @codegen_name years */
  y = 6
}

/**
 * Whenever durations need to be specified, e.g. for a timeout parameter, the duration must specify the unit, like 2d for 2 days.
 * @doc_id time-value
 * @codegen_names time, offset
 */
//FIXME: need to distinguish durations (has to be a string), offsets (can be a string or number)
export type Time = string | long

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
