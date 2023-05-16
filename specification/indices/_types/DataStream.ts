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
  DataStreamName,
  Field,
  HealthStatus,
  IndexName,
  Metadata,
  Name,
  Uuid
} from '@_types/common'
import { integer } from '@_types/Numeric'
import { DataLifecycleWithRollover } from '@indices/_types/DataLifecycle'

export class DataStream {
  name: DataStreamName
  timestamp_field: DataStreamTimestampField
  indices: DataStreamIndex[]
  generation: integer
  template: Name
  hidden: boolean
  replicated?: boolean
  /** @since 7.10.0 */
  system?: boolean
  status: HealthStatus
  ilm_policy?: Name
  /** @doc_id mapping-meta-field */
  _meta?: Metadata
  allow_custom_routing?: boolean
  /**
   * @since 8.8.0
   * @stability experimental
   */
  lifecycle?: DataLifecycleWithRollover
}

export class DataStreamTimestampField {
  name: Field
}

export class DataStreamIndex {
  index_name: IndexName
  index_uuid: Uuid
}

export class DataStreamVisibility {
  hidden?: boolean
}
