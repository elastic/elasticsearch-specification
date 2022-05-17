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

import { integer, long } from '@_types/Numeric'
import { DateTime, TimeSpan } from '@_types/Time'

// TODO remove
// export class Schedule {}
// export class ScheduleBase {}

/**
 * @doc_id cron-expressions
 */
export type CronExpression = string
//export class CronExpression extends ScheduleBase {}

export class DailySchedule {
  at: ScheduleTimeOfDay[]
}

export enum Day {
  sunday = 0,
  monday = 1,
  tuesday = 2,
  wednesday = 3,
  thursday = 4,
  friday = 5,
  saturday = 6
}

export class HourlySchedule {
  minute: integer[]
}

export class Interval {
  // extends ScheduleBase {
  factor: long
  unit: IntervalUnit
}

export enum IntervalUnit {
  /** @codegen_name second */
  s = 0,
  /** @codegen_name minute */
  m = 1,
  /** @codegen_name hour */
  h = 2,
  /** @codegen_name day */
  d = 3,
  /** @codegen_name week */
  w = 4
}

export enum Month {
  january = 0,
  february = 1,
  march = 2,
  april = 3,
  may = 4,
  june = 5,
  july = 6,
  august = 7,
  september = 8,
  october = 9,
  november = 10,
  december = 11
}

/**
 * @variants container
 */
export class ScheduleContainer {
  cron?: CronExpression
  daily?: DailySchedule
  hourly?: HourlySchedule
  interval?: TimeSpan
  monthly?: TimeOfMonth | TimeOfMonth[]
  weekly?: TimeOfWeek | TimeOfWeek[]
  yearly?: TimeOfYear | TimeOfYear[]
}

export class ScheduleTriggerEvent {
  scheduled_time: DateTime
  triggered_time?: DateTime
}

/**
 * A time of day, expressed either as `hh:mm`, `noon`, `midnight`, or an hour/minutes structure.
 * @codegen_names text, hour_minute
 */
// See ES DayTimes
export type ScheduleTimeOfDay = string | HourAndMinute

export class HourAndMinute {
  hour: integer[]
  minute: integer[]
}

export class TimeOfMonth {
  at: string[]
  on: integer[]
}

export class TimeOfWeek {
  at: string[]
  on: Day[]
}

export class TimeOfYear {
  at: string[]
  int: Month[]
  on: integer[]
}
