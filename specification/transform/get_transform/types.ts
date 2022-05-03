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

import { Destination } from '@global/reindex/types'
import {
  Latest,
  Pivot,
  Settings,
  Source,
  SyncContainer
} from '@transform/_types/Transform'
import { Id, Metadata, VersionString } from '@_types/common'
import { Time } from '@_types/Time'

export class TransformSummary {
  /** The destination for the transform. */
  dest: Destination
  /** Free text description of the transform. */
  description?: string
  frequency?: Time
  id: Id
  /** The pivot method transforms the data by aggregating and grouping it. */
  pivot?: Pivot
  /** Defines optional transform settings. */
  settings?: Settings
  /** The source of the data for the transform. */
  source: Source
  /**  Defines the properties transforms require to run continuously. */
  sync?: SyncContainer
  create_time?: Time
  version?: VersionString
  latest?: Latest
  _meta?: Metadata
}
