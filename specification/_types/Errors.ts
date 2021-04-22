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

import { PainlessExecutionPosition } from '_global/scripts_painless_execute/ExecutePainlessScriptResponse'
import { Dictionary } from '_spec_utils/Dictionary'
import { HttpHeaders, Id, Ids, IndexName, Uuid } from './common'
import { integer, long } from './Numeric'

export class ErrorCause {
  type: string
  reason: string

  caused_by?: ErrorCause
  shard?: integer | string
  stack_trace?: string

  root_cause?: ErrorCause[]

  bytes_limit?: long
  bytes_wanted?: long
  column?: integer
  col?: integer
  failed_shards?: ShardFailure[]
  grouped?: boolean
  index?: IndexName
  index_uuid?: Uuid
  language?: string
  licensed_expired_feature?: string
  line?: integer
  max_buckets?: integer
  phase?: string
  property_name?: string
  processor_type?: string
  /**
   * resource id
   * @aliases resource.id
   */
  resource_id?: Ids
  /**
   * resource type
   * @aliases resource.type
   */
  resource_type?: string
  script?: string
  script_stack?: string[]
  header?: HttpHeaders
  lang?: string
  position?: PainlessExecutionPosition
}

export class MainError extends ErrorCause {
  headers?: Dictionary<string, string>
  root_cause: ErrorCause[]
}

export class ShardFailure {
  index: IndexName
  node: string
  reason: ErrorCause
  shard: integer
  status?: string
}

export class BulkIndexByScrollFailure {
  cause: MainError
  id: Id
  index: IndexName
  status: integer
  type: string
}
