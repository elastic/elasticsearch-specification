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

import { IndexName, Name } from '@_types/common'
import { integer } from '@_types/Numeric'
import { DateTime, Duration, DurationValue, UnitMillis } from '@_types/Time'
import { TransformContainer } from '@_types/Transform'
import { Dictionary } from '@spec_utils/Dictionary'
import {
  EmailAction,
  IndexAction,
  LoggingAction,
  PagerDutyAction,
  SlackAction,
  WebhookAction
} from './Actions'
import { ConditionContainer } from './Conditions'

export class Action {
  action_type?: ActionType
  condition?: ConditionContainer
  foreach?: string
  max_iterations?: integer
  name?: Name
  throttle_period?: Duration
  throttle_period_in_millis?: DurationValue<UnitMillis>
  transform?: TransformContainer
  index?: IndexAction
  logging?: LoggingAction
  email?: EmailAction
  pagerduty?: PagerDutyAction
  slack?: SlackAction
  /**
   * @availability stack since=7.14.0
   * @availability serverless
   */
  webhook?: WebhookAction
}

export type Actions = Dictionary<IndexName, ActionStatus>

export enum ActionType {
  email,
  webhook,
  index,
  logging,
  slack,
  pagerduty
}

export enum ActionExecutionMode {
  /**
   * The action execution is simulated. Each action type defines its own simulation operation mode. For example, the email action creates the email that would have been sent but does not actually send it. In this mode, the action might be throttled if the current state of the watch indicates it should be.
   */
  simulate,
  /**
   * Similar to the `simulate` mode, except the action is not throttled even if the current state of the watch indicates it should be.
   */
  force_simulate,
  /**
   * Executes the action as it would have been executed if the watch had been triggered by its own trigger. The execution might be throttled if the current state of the watch indicates it should be.
   */
  execute,
  /**
   * Similar to the `execute` mode, except the action is not throttled even if the current state of the watch indicates it should be.
   */
  force_execute,
  /**
   * The action is skipped and is not executed or simulated. Effectively forces the action to be throttled.
   */
  skip
}

export class SimulatedActions {
  actions: string[]
  all: SimulatedActions
  use_all: boolean
}

export enum ActionStatusOptions {
  success,
  failure,
  simulated,
  throttled
}

export enum AcknowledgementOptions {
  awaits_successful_execution,
  ackable,
  acked
}

export class AcknowledgeState {
  state: AcknowledgementOptions
  timestamp: DateTime
}

export class ExecutionState {
  successful: boolean
  timestamp: DateTime
  reason?: string
}

export class ThrottleState {
  reason: string
  timestamp: DateTime
}

export class ActionStatus {
  ack: AcknowledgeState
  last_execution?: ExecutionState
  last_successful_execution?: ExecutionState
  last_throttle?: ThrottleState
}
