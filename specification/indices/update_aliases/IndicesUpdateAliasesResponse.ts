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

import { IndexAlias, IndexName } from '@_types/common'
import { ErrorCause } from '@_types/Errors'
import { integer } from '@_types/Numeric'
import { AliasesResponseBody } from '@indices/_types/AliasesResponseBody'

export class Response {
  /** @codegen_name result */
  body: IndicesUpdateAliasesResponseBody
}

export class IndicesUpdateAliasesResponseBody extends AliasesResponseBody {
  /**
   * Results for each action in the request.
   * Returned only when `errors` is `true`.
   * @availability stack since=8.14.0
   * @availability serverless
   */
  action_results?: AliasActionResult[]
}

export class AliasActionResult {
  /**
   * The action this result describes.
   */
  action: AliasActionSummary
  /**
   * HTTP status for this action.
   * `200` when the action succeeds.
   */
  status: integer
  /**
   * Cause of the failure.
   * Returned only when this action fails.
   */
  error?: ErrorCause
}

export enum AliasActionType {
  add,
  remove,
  remove_index
}

export class AliasActionSummary {
  /**
   * The action that was applied.
   */
  type: AliasActionType
  /**
   * Resolved data streams or indices for the action.
   */
  indices: IndexName[]
  /**
   * Aliases for the action.
   */
  aliases: IndexAlias[]
}
