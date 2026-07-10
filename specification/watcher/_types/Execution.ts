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

import { Id } from '@_types/common'
import { ErrorCause } from '@_types/Errors'
import { integer, long } from '@_types/Numeric'
import { DateTime, DurationValue, UnitMillis } from '@_types/Time'
import { Dictionary } from '@spec_utils/Dictionary'
import { UserDefinedValue } from '@spec_utils/UserDefinedValue'
import { ActionStatusOptions, ActionType } from './Action'
import {
  EmailResult,
  HttpInputRequestResult,
  IndexResult,
  LoggingResult,
  PagerDutyResult,
  SlackResult,
  WebhookResult
} from './Actions'
import { ConditionType } from './Conditions'
import { InputType, SearchInputRequestDefinition } from './Input'

export enum ExecutionStatus {
  awaits_execution,
  checking,
  execution_not_needed,
  throttled,
  executed,
  failed,
  deleted_while_queued,
  not_executed_already_queued
}

export enum ExecutionPhase {
  awaits_execution,
  started,
  input,
  condition,
  actions,
  watch_transform,
  aborted,
  finished
}

/**
 * The status of an input, condition, or transform phase.
 * These phases can only succeed or fail, so unlike an action they never report
 * statuses such as `throttled`, `condition_failed`, or `simulated`.
 * It maps to the server-side `Input.Result.Status`, `Condition.Result.Status`,
 * and `Transform.Result.Status` enums.
 */
export enum ExecutionResultStatus {
  success,
  failure
}

export class ExecutionResult {
  actions: ExecutionResultAction[]
  condition?: ExecutionResultCondition
  execution_duration: DurationValue<UnitMillis>
  execution_time: DateTime
  input: ExecutionResultInput
  transform?: ExecutionResultTransform
}

export class ExecutionResultCondition {
  met: boolean
  status: ExecutionResultStatus
  type: ConditionType
  compare?: ExecutionResultConditionResolved
  array_compare?: ExecutionResultConditionResolved
}

export class ExecutionResultConditionResolved {
  resolved_values?: Dictionary<string, UserDefinedValue>
}

/**
 * The result of a single action execution.
 */
export class ExecutionResultForeachAction {
  email?: EmailResult
  index?: IndexResult
  logging?: LoggingResult
  pagerduty?: PagerDutyResult
  slack?: SlackResult
  webhook?: WebhookResult
  error?: ErrorCause
  reason?: string
}

export class ExecutionResultAction extends ExecutionResultForeachAction {
  id: Id
  type: ActionType
  status: ActionStatusOptions
  condition?: ExecutionResultCondition
  transform?: ExecutionResultTransform
  foreach?: ExecutionResultForeachAction[]
  max_iterations?: integer
  number_of_actions_executed?: integer
}

export class ExecutionResultTransform {
  payload?: Dictionary<string, UserDefinedValue>
  status: ExecutionResultStatus
  type: ExecutionResultTransformType
  search?: ExecutionResultSearchInput
  error?: ErrorCause
  reason?: string
}

export enum ExecutionResultTransformType {
  script,
  search,
  chain
}

export class ExecutionResultInput {
  payload?: Dictionary<string, UserDefinedValue>
  status: ExecutionResultStatus
  type: InputType
  /**
   * The resolved search request, present when the input is a search input.
   */
  search?: ExecutionResultSearchInput
  /**
   * The resolved HTTP request, present when the input is an HTTP input.
   */
  http?: ExecutionResultHttpInput
  /**
   * The result of each named input, present when the input is a chain input.
   */
  chain?: Dictionary<string, ExecutionResultInput>
  error?: ErrorCause
}

export class ExecutionResultSearchInput {
  request: SearchInputRequestDefinition
}

export class ExecutionResultHttpInput {
  request: HttpInputRequestResult
}

export class ExecutionThreadPool {
  /**
   * The largest size of the execution thread pool, which indicates the largest number of concurrent running watches.
   */
  max_size: long
  /**
   * The number of watches that were triggered and are currently queued.
   */
  queue_size: long
}
