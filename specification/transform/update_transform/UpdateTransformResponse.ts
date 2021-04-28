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

import { TransformPivot } from '@transform/_types/TransformPivot'
import { TransformDestination } from '@transform/_types/TransformDestination'
import { TransformSource } from '@transform/_types/TransformSource'
import { TransformSyncContainer } from '@transform/_types/TransformSyncContainer'
import { ResponseBase } from '@_types/Base'
import { Id, VersionString } from '@_types/common'
import { long } from '@_types/Numeric'
import { Time } from '@_types/Time'
import { TransformSettings } from '@transform/_types/TransformSettings'

export class Response {
  body: {
    create_time: long
    //  create_time_date_time?: DateString
    description: string
    dest: TransformDestination
    frequency: Time
    id: Id
    pivot: TransformPivot
    settings: TransformSettings
    source: TransformSource
    sync?: TransformSyncContainer
    version: VersionString
  }
}
