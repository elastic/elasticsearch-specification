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

import { SourceFilter } from '@global/search/source_filtering/SourceFilter'
import { RequestBase } from '@_types/Base'
import {
  Fields,
  IndexName,
  Routing,
  Type,
  VersionNumber,
  VersionType
} from '@_types/common'
import { integer } from '@_types/Numeric'

/**
 * @rest_spec_name mget
 * @since 0.0.0
 * @stability stable
 *
 */
export interface MultiGetRequest extends RequestBase {
  path_parts?: {
    index?: IndexName
    type?: Type
  }
  query_parameters?: {
    preference?: string
    realtime?: boolean // default: true
    refresh?: boolean // default: false
    routing?: Routing
    _source?: boolean | Fields
    _source_excludes?: Fields
    _source_includes?: Fields
    stored_fields?: Fields
  }
  body?: {
    docs?: MultiGetOperation[]
    ids?: MultiGetId[]
  }
}

export class MultiGetOperation {
  _id: MultiGetId
  _index?: IndexName
  routing?: Routing
  _source?: boolean | Fields | SourceFilter
  stored_fields?: Fields
  _type?: Type
  version?: VersionNumber
  version_type?: VersionType
}

export type MultiGetId = string | integer
