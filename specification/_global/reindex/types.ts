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

import { Sort } from '@global/search/_types/sort'
import { Dictionary } from '@spec_utils/Dictionary'
import {
  Fields,
  IndexName,
  Indices,
  OpType,
  Password,
  Routing,
  Username,
  VersionType
} from '@_types/common'
import { Host } from '@_types/Networking'
import { integer } from '@_types/Numeric'
import { QueryContainer } from '@_types/query_dsl/abstractions'
import { SlicedScroll } from '@_types/SlicedScroll'
import { Time } from '@_types/Time'

export class Destination {
  /** The destination index for the transform. The mappings of the destination index are deduced based on the source fields when possible. If alternate mappings are required, use the Create index API prior to starting the transform. */
  index?: IndexName
  op_type?: OpType
  /** The unique identifier for an ingest pipeline. */
  pipeline?: string
  routing?: Routing
  version_type?: VersionType
}

export class Source {
  index: Indices
  query?: QueryContainer
  remote?: RemoteSource
  size?: integer
  slice?: SlicedScroll
  sort?: Sort
  /** @identifier source_fields */
  _source?: Fields
  /**
   * Definitions of search-time runtime fields that can be used by the transform. For search runtime fields all data nodes, including remote nodes, must be 7.12 or later.
   * @since 7.12.0
   */
  runtime_mappings?: Dictionary<string, SourceRuntimeMapping>
}

export class RemoteSource {
  connect_timeout: Time
  host: Host
  username: Username
  password: Password
  socket_timeout: Time
}

export class SourceRuntimeMapping {
  type: string
  script?: string
}
