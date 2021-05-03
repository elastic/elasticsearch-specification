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
import { AcknowledgeState } from '@watcher/ack_watch/AcknowledgeState'
import { ExecutionState } from '@watcher/ack_watch/ExecutionState'
import { ThrottleState } from '@watcher/ack_watch/ThrottleState'
import { HttpHeaders, IndexName } from '@_types/common'
import { integer } from '@_types/Numeric'
import { EpochMillis, Time } from '@_types/Time'
import { ConditionContainer } from './Conditions'
import { ActionIndex } from './IndexAction'
import { HttpInputRequestDefinition } from './Input'
import { TransformContainer } from './Transform'

export class Action {
  action_type?: ActionType
  condition?: ConditionContainer
  foreach?: string
  max_iterations?: integer
  name?: string
  throttle_period?: Time
  throttle_period_in_millis?: EpochMillis
  transform?: TransformContainer
  index?: ActionIndex
  logging?: LoggingAction
}

export class LoggingAction {
  level: string
  text: string
}

export enum ActionType {
  email = 0,
  webhook = 1,
  index = 2,
  logging = 3,
  slack = 4,
  pagerduty = 5
}

export class LoggingActionResult {
  logged_text: string
}

export class WebhookActionResult {
  request: HttpInputRequestResult
  response?: HttpInputResponseResult
}

export enum ActionExecutionMode {
  simulate = 0,
  force_simulate = 1,
  execute = 2,
  force_execute = 3,
  skip = 4
}

export class HttpInputRequestResult extends HttpInputRequestDefinition {}

export class HttpInputResponseResult {
  body: string
  headers: HttpHeaders
  status: integer
}

export class SimulatedActions {
  actions: string[]
  all: SimulatedActions
  use_all: boolean
}

export enum Status {
  success = 0,
  failure = 1,
  simulated = 2,
  throttled = 3
}

export class ActionStatus {
  ack: AcknowledgeState
  last_execution?: ExecutionState
  last_successful_execution?: ExecutionState
  last_throttle?: ThrottleState
}

export type Actions = Dictionary<IndexName, ActionStatus>
