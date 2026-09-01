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

import {
  Fields,
  Id,
  IndexName,
  Routing,
  VersionNumber,
  VersionType
} from '@_types/common'
import { ErrorCause } from '@_types/Errors'
import { GetResult } from '@global/get/types'
import { SourceConfig } from '@global/search/_types/SourceFilter'

export class Operation {
  /**
   * The unique document ID.
   */
  _id: Id
  /**
   * The index that contains the document.
   */
  _index?: IndexName
  /**
   * The key for the primary shard the document resides on. Required if routing is used during indexing.
   */
  routing?: Routing
  /**
   * If `false`, excludes all _source fields.
   */
  _source?: SourceConfig
  /**
   * The stored fields you want to retrieve.
   */
  stored_fields?: Fields
  version?: VersionNumber
  version_type?: VersionType
}

/**
 * @codegen_names result, failure
 */
export type ResponseItem<TDocument> = GetResult<TDocument> | MultiGetError

export class MultiGetError {
  error: ErrorCause
  _id: Id
  _index: IndexName
}
