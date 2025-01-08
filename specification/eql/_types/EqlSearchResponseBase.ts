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

import { Id } from '@_types/common'
import { ShardFailure } from '@_types/Errors'
import { DurationValue, UnitMillis } from '@_types/Time'
import { EqlHits } from './EqlHits'

export class EqlSearchResponseBase<TEvent> {
  /**
   *  Identifier for the search.
   */
  id?: Id
  /**
   * If true, the response does not contain complete search results.
   */
  is_partial?: boolean
  /**
   * If true, the search request is still executing.
   */
  is_running?: boolean
  /**
   * Milliseconds it took Elasticsearch to execute the request.
   */
  took?: DurationValue<UnitMillis>
  /**
   * If true, the request timed out before completion.
   */
  timed_out?: boolean
  /**
   * Contains matching events and sequences. Also contains related metadata.
   */
  hits: EqlHits<TEvent>
  /**
   * Contains information about shard failures (if any), in case allow_partial_search_results=true
   */
  shard_failures?: ShardFailure[]
}
