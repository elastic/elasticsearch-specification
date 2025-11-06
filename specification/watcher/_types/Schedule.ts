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
import { DateTime, Duration } from '@_types/Time'

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
  sunday,
  monday,
  tuesday,
  wednesday,
  thursday,
  friday,
  saturday
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
  second = 's',
  minute = 'm',
  hour = 'h',
  day = 'd',
  week = 'w'
}

export enum Month {
  january,
  february,
  march,
  april,
  may,
  june,
  july,
  august,
  september,
  october,
  november,
  december
}

/**
 * @variants container
 */
export class ScheduleContainer {
  timezone?: string
  cron?: CronExpression
  daily?: DailySchedule
  hourly?: HourlySchedule
  interval?: Duration
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
