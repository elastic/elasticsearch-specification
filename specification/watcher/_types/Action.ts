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

import { Dictionary } from '@spec_utils/Dictionary'
import { IndexName, Name } from '@_types/common'
import { Host } from '@_types/Networking'
import { integer } from '@_types/Numeric'
import { DateString, EpochMillis, Time } from '@_types/Time'
import { TransformContainer } from '@_types/Transform'
import { Index, Logging } from './Actions'
import { ConditionContainer } from './Conditions'

export class Action {
  action_type?: ActionType
  condition?: ConditionContainer
  foreach?: string
  max_iterations?: integer
  name?: Name
  throttle_period?: Time
  throttle_period_in_millis?: EpochMillis
  transform?: TransformContainer
  index?: Index
  logging?: Logging
  /** @since 7.14.0 */
  webhook?: ActionWebhook
}

export class ActionWebhook {
  host: Host
  port: integer
}

export type Actions = Dictionary<IndexName, ActionStatus>

export enum ActionType {
  email = 0,
  webhook = 1,
  index = 2,
  logging = 3,
  slack = 4,
  pagerduty = 5
}

export enum ActionExecutionMode {
  simulate = 0,
  force_simulate = 1,
  execute = 2,
  force_execute = 3,
  skip = 4
}

export class SimulatedActions {
  actions: string[]
  all: SimulatedActions
  use_all: boolean
}

export enum ActionStatusOptions {
  success = 0,
  failure = 1,
  simulated = 2,
  throttled = 3
}

export enum AcknowledgementOptions {
  awaits_successful_execution = 0,
  ackable = 1,
  acked = 2
}

export class AcknowledgeState {
  state: AcknowledgementOptions
  timestamp: DateString
}

export class ExecutionState {
  successful: boolean
  timestamp: DateString
}

export class ThrottleState {
  reason: string
  timestamp: DateString
}

export class ActionStatus {
  ack: AcknowledgeState
  last_execution?: ExecutionState
  last_successful_execution?: ExecutionState
  last_throttle?: ThrottleState
}
