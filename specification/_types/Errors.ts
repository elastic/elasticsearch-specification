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

import { AdditionalProperties } from '@spec_utils/behaviors'
import { UserDefinedValue } from '@spec_utils/UserDefinedValue'
import { Id, IndexName, NodeId } from './common'
import { integer, long } from './Numeric'

/**
 * Cause and details about a request failure. This class defines the properties common to all error types.
 * Additional details are also provided, that depend on the error type.
 *
 * @behavior_meta AdditionalProperties fieldname=metadata description="Additional details about the error"
 */
export class ErrorCause
  implements AdditionalProperties<string, UserDefinedValue>
{
  /**
   * The type of error
   */
  type: string
  /**
   * A human-readable explanation of the error, in English.
   */
  reason?: string
  /**
   * The server stack trace. Present only if the `error_trace=true` parameter was sent with the request.
   */
  stack_trace?: string

  caused_by?: ErrorCause
  root_cause?: ErrorCause[]
  suppressed?: ErrorCause[]
}

export class ShardFailure {
  /** @aliases _index */
  index?: IndexName
  /** @aliases _node */
  node?: string
  reason: ErrorCause
  /** @aliases _shard */
  shard?: integer
  status?: string
  primary?: boolean
}

export class BulkIndexByScrollFailure {
  cause: ErrorCause
  id: Id
  index: IndexName
  status: integer
}

export class TaskFailure {
  task_id: long
  node_id: NodeId
  status: string
  reason: ErrorCause
}
