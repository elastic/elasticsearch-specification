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

import { InlineGet } from '@_types/common'
import { Dictionary } from '@spec_utils/Dictionary'
import { UserDefinedValue } from '@spec_utils/UserDefinedValue'
import {
  Id,
  IndexName,
  Routing,
  SequenceNumber,
  VersionNumber,
  VersionType
} from '@_types/common'
import { ErrorCause } from '@_types/Errors'
import { integer, long } from '@_types/Numeric'
import { ShardStatistics } from '@_types/Stats'
import { Script } from '@_types/Scripting'
import { SourceConfig } from '@global/search/_types/SourceFilter'

export class ResponseItem {
  _id?: string | null
  _index: string
  status: integer
  error?: ErrorCause
  _primary_term?: long
  result?: string
  _seq_no?: SequenceNumber
  _shards?: ShardStatistics
  _version?: VersionNumber
  forced_refresh?: boolean
  get?: InlineGet<Dictionary<string, UserDefinedValue>>
}

export enum OperationType {
  index,
  create,
  update,
  delete
}

export class OperationBase {
  _id?: Id
  _index?: IndexName
  routing?: Routing
  if_primary_term?: long
  if_seq_no?: SequenceNumber
  version?: VersionNumber
  version_type?: VersionType
}

export class WriteOperation extends OperationBase {
  dynamic_templates?: Dictionary<string, string>
  pipeline?: string
  require_alias?: boolean
}

export class CreateOperation extends WriteOperation {}

export class IndexOperation extends WriteOperation {}

export class DeleteOperation extends OperationBase {}

export class UpdateOperation extends OperationBase {
  require_alias?: boolean
  retry_on_conflict?: integer
}

/** @variants container */
export class OperationContainer {
  index?: IndexOperation
  create?: CreateOperation
  update?: UpdateOperation
  delete?: DeleteOperation
}

export class UpdateAction<TDocument, TPartialDocument> {
  /**
   * Set to false to disable setting 'result' in the response
   * to 'noop' if no change to the document occurred.
   * @server_default true
   */
  detect_noop?: boolean
  /**
   * A partial update to an existing document.
   */
  doc?: TPartialDocument
  /**
   * Set to true to use the contents of 'doc' as the value of 'upsert'
   * @server_default false
   */
  doc_as_upsert?: boolean
  /**
   * Script to execute to update the document.
   */
  script?: Script
  /**
   * Set to true to execute the script whether or not the document exists.
   * @server_default false
   */
  scripted_upsert?: boolean
  /**
   * Set to false to disable source retrieval. You can also specify a comma-separated
   * list of the fields you want to retrieve.
   * @server_default true
   */
  _source?: SourceConfig
  /**
   * If the document does not already exist, the contents of 'upsert' are inserted as a
   * new document. If the document exists, the 'script' is executed.
   */
  upsert?: TDocument
}
