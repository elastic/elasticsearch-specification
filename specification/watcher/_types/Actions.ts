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


import { Id, IndexName, Type, VersionNumber } from '@_types/common'
import { Result } from '@_types/Result'
import { DateString } from '@_types/Time'
import { HttpInputRequestResult, HttpInputResponseResult } from './Action'

// PageDuty ----------------------------- //

export class PagerDutyEvent {
  account: string
  attach_payload: boolean
  client: string
  client_url: string
  context: PagerDutyContext[]
  description: string
  event_type: PagerDutyEventType
  incident_key: string
}

export class PagerDutyContext {
  href: string
  src: string
  type: PagerDutyContextType
}

export enum PagerDutyContextType {
  link = 0,
  image = 1
}

export enum PagerDutyEventType {
  trigger = 0,
  resolve = 1,
  acknowledge = 2
}

export class PagerDutyActionEventResult {
  event: PagerDutyEvent
  reason: string
  request: HttpInputRequestResult
  response: HttpInputResponseResult
}

export class PagerDutyResult {
  sent_event: PagerDutyActionEventResult
}

// Slack -------------------------------- //

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
    ts?: DateString
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

  export class SlackActionResult {
    account?: string
    //  sent_messages?: SlackActionMessageResult[] TODO: not sure if this needed
    message: SlackMessage
  }

// Email -------------------------------- //

  export enum DataAttachmentFormat {
    json = 0,
    yaml = 1
  }

  export class EmailBody {
    html: string
    text: string
  }

  export enum EmailPriority {
    lowest = 0,
    low = 1,
    normal = 2,
    high = 3,
    highest = 4
  }

  export class EmailActionResult {
    account?: string
    message: EmailResult
    reason?: string // TODO: not sure if this needed
  }

  export class EmailResult {
    bcc?: string[]
    body?: EmailBody
    cc?: string[]
    from?: string
    id: Id
    priority?: EmailPriority
    reply_to?: string[]
    sent_date: DateString
    subject: string
    to: string[]
  }

// Index -------------------------------- //

export class IndexAction {
    index: IndexName
    doc_id?: Id
  }

  export class IndexActionResult {
    response: ResponseIndexActionResult
  }

  export class ResponseIndexActionResult {
    created: boolean
    id: Id
    index: IndexName
    result: Result
    version: VersionNumber
    type?: Type
  }


