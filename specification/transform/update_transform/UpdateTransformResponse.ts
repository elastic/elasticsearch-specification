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

import { Destination, Source } from '@global/reindex/types'
import {
  Latest,
  Pivot,
  RetentionPolicyContainer,
  Settings,
  SyncContainer
} from '@transform/_types/Transform'
import { Id, Metadata, VersionString } from '@_types/common'
import { long } from '@_types/Numeric'
import { Duration } from '@_types/Time'

export class Response {
  body: {
    create_time: long
    //  create_time_date_time?: DateTime
    description: string
    dest: Destination
    frequency?: Duration
    id: Id
    latest?: Latest
    pivot?: Pivot
    retention_policy?: RetentionPolicyContainer
    settings: Settings
    source: Source
    sync?: SyncContainer
    version: VersionString
    _meta?: Metadata
  }
}
