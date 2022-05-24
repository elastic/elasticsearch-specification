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

import { Sort } from '@_types/sort'
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
import { RuntimeFields } from '@_types/mapping/RuntimeFields'
import { Host } from '@_types/Networking'
import { integer } from '@_types/Numeric'
import { QueryContainer } from '@_types/query_dsl/abstractions'
import { SlicedScroll } from '@_types/SlicedScroll'
import { Time } from '@_types/Time'
import { Dictionary } from '@spec_utils/Dictionary'

export class Destination {
  index: IndexName
  op_type?: OpType
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
  /** @codegen_name source_fields */
  _source?: Fields
  runtime_mappings?: RuntimeFields
}

export class RemoteSource {
  connect_timeout?: Time
  headers?: Dictionary<string, string>
  host: Host
  username?: Username
  password?: Password
  socket_timeout?: Time
}
