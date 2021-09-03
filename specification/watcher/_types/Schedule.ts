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
import { DateString, Time } from '@_types/Time'

// TODO remove
// export class Schedule {}
// export class ScheduleBase {}

/**
 * @doc_url https://www.elastic.co/guide/en/elasticsearch/reference/current/cron-expressions.html
 */
export type CronExpression = string
//export class CronExpression extends ScheduleBase {}

export class DailySchedule {
  at: string[] | TimeOfDay
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
  s = 0,
  m = 1,
  h = 2,
  d = 3,
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
  interval?: Time
  monthly?: TimeOfMonth[]
  weekly?: TimeOfWeek[]
  yearly?: TimeOfYear[]
}

export class ScheduleTriggerEvent {
  scheduled_time: DateString | string
  triggered_time?: DateString | string
}

export class TimeOfDay {
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
