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

import { FieldValue, Id, IndexName, NodeId } from '@_types/common'
import { ErrorCause } from '@_types/Errors'
import { integer } from '@_types/Numeric'
import { DurationValue, UnitMillis } from '@_types/Time'
import { Dictionary } from '@spec_utils/Dictionary'
import { UserDefinedValue } from '@spec_utils/UserDefinedValue'

export class EsqlResult {
  took?: DurationValue<UnitMillis>
  is_partial?: boolean
  all_columns?: ColumnInfo[]
  columns: ColumnInfo[]
  values: Array<Array<FieldValue>>
  /**
   * Cross-cluster search information. Present if `include_ccs_metadata` was `true` in the request
   * and a cross-cluster search was performed.
   */
  _clusters?: ClusterInfo
  /**
   * Profiling information. Present if `profile` was `true` in the request.
   * The contents of this field are currently unstable.
   */
  profile?: UserDefinedValue
}

export class AsyncEsqlResult extends EsqlResult {
  id?: string
  is_running: boolean
}

export class ColumnInfo {
  name: string
  type: string
}

export class ClusterInfo {
  total: integer
  successful: integer
  running: integer
  skipped: integer
  partial: integer
  failed: integer
  details: Dictionary<string, EsqlClusterDetails>
}

export class EsqlClusterDetails {
  status: EsqlClusterStatus
  indices: string
  took?: DurationValue<UnitMillis>
  _shards?: EsqlShardInfo
}

export enum EsqlClusterStatus {
  running,
  successful,
  partial,
  skipped,
  failed
}

export class EsqlShardInfo {
  total: integer
  successful?: integer
  skipped?: integer
  failed?: integer
  failures?: EsqlShardFailure[]
}

export class EsqlShardFailure {
  shard: Id
  index: IndexName
  node?: NodeId
  reason: ErrorCause
}
