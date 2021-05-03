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

import { ConditionContainer } from '@watcher/_types/Conditions'
import { InputContainer } from '@watcher/_types/Input'
import { TriggerEventContainer } from '@watcher/_types/Trigger'
import { Id, Metadata, Username } from '@_types/common'
import { DateString } from '@_types/Time'
import { integer } from '@_types/Numeric'

import {
  ActionType,
  LoggingActionResult,
  Status,
  WebhookActionResult
} from '@watcher/_types/Action'
import { EmailActionResult } from '@watcher/_types/EmailAction'
import { IndexActionResult } from '@watcher/_types/IndexAction'
import { PagerDutyActionResult } from '@watcher/_types/PagerDutyAction'
import { SlackActionResult } from '@watcher/_types/SlackAction'

import { ConditionType } from '@watcher/_types/Conditions'
import { InputType } from '@watcher/_types/Input'
import { UserDefinedValue } from '@spec_utils/UserDefinedValue'
import { Dictionary } from '@spec_utils/Dictionary'

export enum ActionExecutionState {
  awaits_execution = 0,
  checking = 1,
  execution_not_needed = 2,
  throttled = 3,
  executed = 4,
  failed = 5,
  deleted_while_queued = 6,
  not_executed_already_queued = 7
}

export class TriggerEventResult {
  manual: TriggerEventContainer
  triggered_time: DateString
  type: string
}

export class WatchRecord {
  condition: ConditionContainer
  input: InputContainer
  messages: string[]
  metadata: Metadata
  node: string
  result: ExecutionResult
  state: ActionExecutionState
  trigger_event: TriggerEventResult
  user: Username
  watch_id: Id
}

export class ExecutionResultCondition {
  met: boolean
  status: Status
  type: ConditionType
}

export class ExecutionResultAction {
  email?: EmailActionResult
  id: Id
  index?: IndexActionResult
  logging?: LoggingActionResult
  pagerduty?: PagerDutyActionResult
  reason?: string
  slack?: SlackActionResult
  status: Status
  type: ActionType
  webhook?: WebhookActionResult
}

export class ExecutionResult {
  actions: ExecutionResultAction[]
  condition: ExecutionResultCondition
  execution_duration: integer
  execution_time: DateString
  input: ExecutionResultInput
}

export class ExecutionResultInput {
  payload: Dictionary<string, UserDefinedValue>
  status: Status
  type: InputType
}
