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

import { Dictionary } from '@spec_utils/Dictionary'
import { RequestBase } from '@_types/Base'
import {
  Field,
  Fields,
  Id,
  IndexName,
  Routing,
  VersionNumber,
  VersionType
} from '@_types/common'
import { Filter } from './types'

/**
 * @rest_spec_name termvectors
 * @availability stack since=0.0.0 stability=stable
 */
export interface Request<TDocument> extends RequestBase {
  path_parts: {
    index: IndexName
    id?: Id
  }
  query_parameters: {
    fields?: Fields
    field_statistics?: boolean
    offsets?: boolean
    payloads?: boolean
    positions?: boolean
    preference?: string
    realtime?: boolean
    routing?: Routing
    term_statistics?: boolean
    version?: VersionNumber
    version_type?: VersionType
  }
  body: {
    doc?: TDocument
    filter?: Filter
    per_field_analyzer?: Dictionary<Field, string>
  }
}
