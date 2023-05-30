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
  Id,
  IndexName,
  Refresh,
  Routing,
  VersionNumber,
  VersionType,
  WaitForActiveShards
} from '@_types/common'
import { Duration } from '@_types/Time'

/**
 * @rest_spec_name create
 * @availability stack since=5.0.0 stability=stable
 * @availability serverless stability=stable visibility=public
 *
 */
export interface Request<TDocument> extends RequestBase {
  path_parts: {
    id: Id
    index: IndexName
  }
  query_parameters: {
    pipeline?: string
    refresh?: Refresh
    routing?: Routing
    timeout?: Duration
    version?: VersionNumber
    version_type?: VersionType
    wait_for_active_shards?: WaitForActiveShards
  }
  /** @codegen_name document */
  body?: TDocument
}
