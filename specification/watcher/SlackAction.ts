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

import { DateString } from '@common/Time'
import { HttpInputRequestResult, HttpInputResponseResult } from './Action'

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
  /** @prop_serializer NullableDateTimeOffsetEpochSecondsFormatter */
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
