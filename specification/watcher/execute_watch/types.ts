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
import { ExecutionResult, ExecutionStatus } from '@watcher/_types/Execution'
import { InputContainer } from '@watcher/_types/Input'
import { TriggerEventResult } from '@watcher/_types/Trigger'
import { WatchStatus } from '@watcher/_types/Watch'
import { Id, Metadata, Username } from '@_types/common'

export class WatchRecord {
  condition: ConditionContainer
  input: InputContainer
  messages: string[]
  metadata?: Metadata
  node: string
  result: ExecutionResult
  state: ExecutionStatus
  trigger_event: TriggerEventResult
  user: Username
  watch_id: Id
  status?: WatchStatus
}
