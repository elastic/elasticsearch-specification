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
  IndexName,
  Refresh,
  Routing,
  WaitForActiveShards
} from '@_types/common'
import { Duration } from '@_types/Time'
import { OperationContainer, UpdateAction } from './types'
import { SourceConfigParam } from '@global/search/_types/SourceFilter'

/**
 * @rest_spec_name bulk
 * @availability stack since=0.0.0 stability=stable
 * @doc_id docs-bulk
 *
 */
export interface Request<TDocument, TPartialDocument> extends RequestBase {
  path_parts: {
    index?: IndexName
  }
  query_parameters: {
    pipeline?: string
    refresh?: Refresh
    routing?: Routing
    _source?: SourceConfigParam
    _source_excludes?: Fields
    _source_includes?: Fields
    timeout?: Duration
    wait_for_active_shards?: WaitForActiveShards
    require_alias?: boolean
  }
  /** @codegen_name operations */
  // This declaration captures action_and_meta_data (OperationContainer) and the two kinds of sources
  // that can follow: an update action for update operations and anything for index or create operations.
  //
  // /!\ must be kept in sync with BulkMonitoringRequest
  body?: Array<
    OperationContainer | UpdateAction<TDocument, TPartialDocument> | TDocument
  >
}
