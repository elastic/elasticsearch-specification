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
  Id,
  IndexName,
  Refresh,
  Routing,
  SequenceNumber,
  Type,
  WaitForActiveShards
} from '@_types/common'
import { long } from '@_types/Numeric'
import { Script } from '@_types/Scripting'
import { Time } from '@_types/Time'

/**
 * @rest_spec_name update
 * @since 0.0.0
 * @stability TODO
 */
export interface UpdateRequest<TDocument, TPartialDocument>
  extends RequestBase {
  path_parts?: {
    id: Id
    index: IndexName
    type?: Type
  }
  query_parameters?: {
    if_primary_term?: long
    if_seq_no?: SequenceNumber
    lang?: string
    refresh?: Refresh
    require_alias?: boolean
    retry_on_conflict?: long
    routing?: Routing
    source_enabled?: boolean
    timeout?: Time
    wait_for_active_shards?: WaitForActiveShards
    _source?: boolean | Fields
    _source_excludes?: Fields
    _source_includes?: Fields
  }
  body?: {
    detect_noop?: boolean
    /** @prop_serializer SourceFormatter`1 */
    doc?: TPartialDocument
    doc_as_upsert?: boolean
    script?: Script
    scripted_upsert?: boolean
    _source?: boolean | SourceFilter
    /** @prop_serializer SourceFormatter`1 */
    upsert?: TDocument
  }
}
