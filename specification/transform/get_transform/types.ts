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

import { Id, Metadata, VersionString } from '@_types/common'
import { DateTime, Duration, EpochTime, UnitMillis } from '@_types/Time'
import { Destination } from '@global/reindex/types'
import { TransformAuthorization } from '@ml/_types/Authorization'
import {
  Latest,
  Pivot,
  RetentionPolicyContainer,
  Settings,
  Source,
  SyncContainer
} from '@transform/_types/Transform'

export class TransformSummary {
  /**
   * The security privileges that the transform uses to run its queries. If Elastic Stack security features were disabled at the time of the most recent update to the transform, this property is omitted.
   */
  authorization?: TransformAuthorization
  /** The time the transform was created. */
  create_time?: EpochTime<UnitMillis>
  create_time_string?: DateTime
  /** Free text description of the transform. */
  description?: string
  /** The destination for the transform. */
  dest: Destination
  frequency?: Duration
  id: Id
  latest?: Latest
  /** The pivot method transforms the data by aggregating and grouping it. */
  pivot?: Pivot
  retention_policy?: RetentionPolicyContainer
  /** Defines optional transform settings. */
  settings?: Settings
  /** The source of the data for the transform. */
  source: Source
  /**  Defines the properties transforms require to run continuously. */
  sync?: SyncContainer
  /**
   * The version of Elasticsearch that existed on the node when the transform was created.
   */
  version?: VersionString
  _meta?: Metadata
}
