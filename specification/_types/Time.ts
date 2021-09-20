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

import { Field } from './common'
import { integer, long } from './Numeric'

export class DateMathTimeParsed {
  factor: integer
  interval: DateMathTimeUnit
}

/** A reference to a date field with formatting instructions on how to return the date */
export class DateField {
  field: Field
  format?: string
  include_unmapped?: boolean
}

export type DateString = string
export type Timestamp = string
export type TimeSpan = string
export type EpochMillis = string | long
export type DateMath = string
export type DateMathExpression = string
export type DateMathTime = string

export type TimeZone = string

/** @doc_url https://www.elastic.co/guide/en/elasticsearch/reference/7.x/mapping-date-format.html */
export type DateFormat = string

export enum DateMathOperation {
  '+' = 0,
  '-' = 1
}

export enum DateMathTimeUnit {
  /** @identifier seconds */
  s = 0,
  /** @identifier minutes */
  m = 1,
  /** @identifier hours */
  h = 2,
  /** @identifier days */
  d = 3,
  /** @identifier weeks */
  w = 4,
  /** @identifier months */
  M = 5,
  /** @identifier years */
  y = 6
}

/**
 * Whenever durations need to be specified, e.g. for a timeout parameter, the duration must specify the unit, like 2d for 2 days.
 * @doc_url https://github.com/elastic/elasticsearch/blob/master/libs/core/src/main/java/org/elasticsearch/common/unit/TimeValue.java
 * https://github.com/elastic/elasticsearch/blob/master/libs/core/src/main/java/org/elasticsearch/common/unit/TimeValue.java
 * Only support 0 and -1 but we have no way to encode these as constants at the moment
 */
export type Time = string | integer

export enum TimeUnit {
  /** @identifier nano_seconds */
  nanos,
  /** @identifier micro_seconds */
  micros,
  /** @identifier milli_seconds */
  ms,
  /** @identifier seconds */
  s,
  /** @identifier minutes */
  m,
  /** @identifier hours */
  h,
  /** @identifier days */
  d
}
