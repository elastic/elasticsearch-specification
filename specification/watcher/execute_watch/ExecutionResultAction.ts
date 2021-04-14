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

import { Id } from '../../__common/common'
import { ActionType } from '../../__common/watcher/actions/ActionType'
import { EmailActionResult } from '../../__common/watcher/execution/email/EmailActionResult'
import { IndexActionResult } from '../../__common/watcher/execution/index/IndexActionResult'
import { LoggingActionResult } from '../../__common/watcher/execution/logging/LoggingActionResult'
import { PagerDutyActionResult } from '../../__common/watcher/execution/pager_duty/PagerDutyActionResult'
import { SlackActionResult } from '../../__common/watcher/execution/slack/SlackActionResult'
import { Status } from '../../__common/watcher/execution/Status'
import { WebhookActionResult } from '../../__common/watcher/execution/webhook/WebhookActionResult'

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
