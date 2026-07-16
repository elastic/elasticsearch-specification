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

import { Id, Metadata, Username } from '@_types/common'
import { ErrorCause } from '@_types/Errors'
import { DateTime } from '@_types/Time'
import { Dictionary } from '@spec_utils/Dictionary'
import { UserDefinedValue } from '@spec_utils/UserDefinedValue'
import { ConditionContainer } from '@watcher/_types/Conditions'
import { ExecutionResult, ExecutionStatus } from '@watcher/_types/Execution'
import { InputContainer } from '@watcher/_types/Input'
import { TriggerEventResult } from '@watcher/_types/Trigger'
import { WatchStatus } from '@watcher/_types/Watch'

export class WatchRecord {
  '@timestamp': DateTime
  node: string
  state: ExecutionStatus
  trigger_event: TriggerEventResult
  watch_id: Id
  condition?: ConditionContainer
  input?: InputContainer
  metadata?: Metadata
  result?: ExecutionResult
  user?: Username
  status?: WatchStatus
  messages?: string[]
  vars?: Dictionary<string, UserDefinedValue>
  exception?: ErrorCause
}
