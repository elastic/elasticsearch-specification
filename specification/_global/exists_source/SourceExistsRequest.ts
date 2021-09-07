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

import { RequestBase } from '@_types/Base'
import {
  Fields,
  Id,
  IndexName,
  Routing,
  Type,
  VersionNumber,
  VersionType
} from '@_types/common'

/**
 * @rest_spec_name exists_source
 * @since 5.4.0
 * @stability stable
 */
export interface Request extends RequestBase {
  path_parts: {
    id: Id
    index: IndexName
    type?: Type
  }
  query_parameters: {
    preference?: string
    realtime?: boolean
    refresh?: boolean
    routing?: Routing
    _source?: boolean | Fields
    _source_excludes?: Fields
    _source_includes?: Fields
    version?: VersionNumber
    version_type?: VersionType
  }
}
