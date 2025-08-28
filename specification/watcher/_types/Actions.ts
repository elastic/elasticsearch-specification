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

import {
  Field,
  HttpHeaders,
  Id,
  IndexName,
  OpType,
  Refresh,
  VersionNumber
} from '@_types/common'
import { Host } from '@_types/Networking'
import { integer } from '@_types/Numeric'
import { Result } from '@_types/Result'
import { DateTime, Duration, EpochTime, UnitSeconds } from '@_types/Time'
import { AdditionalProperties } from '@spec_utils/behaviors'
import { Dictionary } from '@spec_utils/Dictionary'
import { UserDefinedValue } from '@spec_utils/UserDefinedValue'
import { HttpInputRequestDefinition } from './Input'

// PagerDuty ----------------------------- //

export class PagerDutyEvent {
  account?: string
  attach_payload: boolean
  client?: string
  client_url?: string
  /** @aliases context */
  contexts?: PagerDutyContext[]
  description: string
  /** @server_default trigger */
  event_type?: PagerDutyEventType
  incident_key: string
  proxy?: PagerDutyEventProxy
}

export class PagerDutyAction extends PagerDutyEvent {}

export class PagerDutyEventProxy {
  host?: Host
  port?: integer
}

export class PagerDutyContext {
  href?: string
  src?: string
  type: PagerDutyContextType
}

export enum PagerDutyContextType {
  link,
  image
}

export enum PagerDutyEventType {
  trigger,
  resolve,
  acknowledge
}

export class PagerDutyResult {
  event: PagerDutyEvent
  reason?: string
  request?: HttpInputRequestResult
  response?: HttpInputResponseResult
}

export class PagerDutySentEvent {
  sent_event: PagerDutyEvent
}

// Slack -------------------------------- //

export class SlackAction {
  account?: string
  message: SlackMessage
}

export class SlackResult {
  account?: string
  message: SlackMessage
}

export class SlackAttachment {
  author_icon?: string
  author_link?: string
  author_name: string
  color?: string
  fallback?: string
  fields?: SlackAttachmentField[]
  footer?: string
  footer_icon?: string
  image_url?: string
  pretext?: string
  text?: string
  thumb_url?: string
  title: string
  title_link?: string
  ts?: EpochTime<UnitSeconds>
}

export class SlackAttachmentField {
  short: boolean
  title: string
  value: string
}

export class SlackDynamicAttachment {
  attachment_template: SlackAttachment
  list_path: string
}

export class SlackMessage {
  attachments: SlackAttachment[]
  dynamic_attachments?: SlackDynamicAttachment
  from: string
  icon?: string
  text: string
  to: string[]
}

export class SlackActionMessageResult {
  message: SlackMessage
  request?: HttpInputRequestResult
  response?: HttpInputResponseResult
}

// Jira --------------------------------- //

export class JiraAction {
  account?: string
  fields?: JiraIssueFields
}

export class JiraIssueFields
  implements AdditionalProperties<string, UserDefinedValue>
{
  project: JiraIssueProject
  issuetype: JiraIssueType
  summary: string
  description?: string
  labels?: string[]
  priority?: JiraIssuePriority
  assignee?: JiraIssueAssignee
  reporter?: JiraIssueReporter
}

export class JiraIssueProject {
  key: string
}

export class JiraIssueType {
  name: string
}

export class JiraIssuePriority {
  name: string
}

export class JiraIssueAssignee {
  name: string
}

export class JiraIssueReporter {
  name: string
}

// Email -------------------------------- //

export enum DataAttachmentFormat {
  json,
  yaml
}

export class EmailBody {
  html?: string
  text?: string
}

export enum EmailPriority {
  lowest,
  low,
  normal,
  high,
  highest
}

export class EmailResult {
  account?: string
  message: Email
  reason?: string
}

/** @variants container */
export class EmailAttachmentContainer {
  http?: HttpEmailAttachment
  reporting?: ReportingEmailAttachment
  data?: DataEmailAttachment
}

export class HttpEmailAttachment {
  content_type?: string
  inline?: boolean
  request?: HttpInputRequestDefinition
}

export class ReportingEmailAttachment {
  url: string
  inline?: boolean
  /** @server_default 40 */
  retries?: integer
  /** @server_default 15s */
  interval?: Duration
  request?: HttpInputRequestDefinition
}

export class DataEmailAttachment {
  format?: DataAttachmentFormat
}

export class Email {
  id?: Id
  bcc?: string | string[]
  body?: EmailBody
  cc?: string | string[]
  from?: string
  priority?: EmailPriority
  reply_to?: string | string[]
  sent_date?: DateTime
  subject: string
  to: string | string[]
  attachments?: Dictionary<string, EmailAttachmentContainer>
}

export class EmailAction extends Email {}

// Index -------------------------------- //

export class IndexAction {
  index: IndexName
  doc_id?: Id
  refresh?: Refresh
  /** @server_default index */
  op_type?: OpType
  /** @server_default 60s */
  timeout?: Duration
  execution_time_field?: Field
}

export class IndexResult {
  response: IndexResultSummary
}

export class IndexResultSummary {
  created: boolean
  id: Id
  index: IndexName
  result: Result
  version: VersionNumber
}

// Logging ------------------------------ //

export class LoggingAction {
  level?: string
  text: string
  category?: string
}

export class LoggingResult {
  logged_text: string
}

// Webhook ------------------------------ //

export class WebhookAction extends HttpInputRequestDefinition {}

export class WebhookResult {
  request: HttpInputRequestResult
  response?: HttpInputResponseResult
}

export class HttpInputRequestResult extends HttpInputRequestDefinition {}

export class HttpInputResponseResult {
  body: string
  headers: HttpHeaders
  status: integer
}
