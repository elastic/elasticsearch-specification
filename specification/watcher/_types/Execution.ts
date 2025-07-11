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
import { long } from '@_types/Numeric'
import { DateTime, DurationValue, UnitMillis } from '@_types/Time'
import { Dictionary } from '@spec_utils/Dictionary'
import { UserDefinedValue } from '@spec_utils/UserDefinedValue'
import { ActionStatusOptions, ActionType } from './Action'
import {
  EmailResult,
  IndexResult,
  LoggingResult,
  PagerDutyResult,
  SlackResult,
  WebhookResult
} from './Actions'
import { ConditionType } from './Conditions'
import { InputType } from './Input'

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

export class ExecutionResult {
  actions: ExecutionResultAction[]
  condition: ExecutionResultCondition
  execution_duration: DurationValue<UnitMillis>
  execution_time: DateTime
  input: ExecutionResultInput
}

export class ExecutionResultCondition {
  met: boolean
  status: ActionStatusOptions
  type: ConditionType
}

export class ExecutionResultAction {
  email?: EmailResult
  id: Id
  index?: IndexResult
  logging?: LoggingResult
  pagerduty?: PagerDutyResult
  reason?: string
  slack?: SlackResult
  status: ActionStatusOptions
  type: ActionType
  webhook?: WebhookResult
  error?: ErrorCause
}

export class ExecutionResultInput {
  payload: Dictionary<string, UserDefinedValue>
  status: ActionStatusOptions
  type: InputType
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
