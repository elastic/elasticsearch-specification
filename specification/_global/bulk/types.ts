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
  /**
   * The document ID associated with the operation.
   */
  _id?: string | null
  /**
   * Name of the index associated with the operation.
   * If the operation targeted a data stream, this is the backing index into which the document was written.
   */
  _index: string
  /**
   * HTTP status code returned for the operation.
   */
  status: integer
  /**
   * Contains additional information about the failed operation.
   * The parameter is only returned for failed operations.
   */
  error?: ErrorCause
  /**
   * The primary term assigned to the document for the operation.
   */
  _primary_term?: long
  /**
   * Result of the operation.
   * Successful values are `created`, `deleted`, and `updated`.
   */
  result?: string
  /**
   * The sequence number assigned to the document for the operation.
   * Sequence numbers are used to ensure an older version of a document doesn’t overwrite a newer version.
   */
  _seq_no?: SequenceNumber
  /**
   * Contains shard information for the operation.
   */
  _shards?: ShardStatistics
  /**
   * The document version associated with the operation.
   * The document version is incremented each time the document is updated.
   */
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
  /**
   * The document ID.
   */
  _id?: Id
  /**
   * Name of the index or index alias to perform the action on.
   */
  _index?: IndexName
  /**
   * Custom value used to route operations to a specific shard.
   */
  routing?: Routing
  if_primary_term?: long
  if_seq_no?: SequenceNumber
  version?: VersionNumber
  version_type?: VersionType
}

export class WriteOperation extends OperationBase {
  /**
   * A map from the full name of fields to the name of dynamic templates.
   * Defaults to an empty map.
   * If a name matches a dynamic template, then that template will be applied regardless of other match predicates defined in the template.
   * If a field is already defined in the mapping, then this parameter won’t be used.
   */
  dynamic_templates?: Dictionary<string, string>
  /**
   * ID of the pipeline to use to preprocess incoming documents.
   * If the index has a default ingest pipeline specified, then setting the value to `_none` disables the default ingest pipeline for this request.
   * If a final pipeline is configured it will always run, regardless of the value of this parameter.
   */
  pipeline?: string
  /**
   * If `true`, the request’s actions must target an index alias.
   * @server_default false
   */
  require_alias?: boolean
}

export class CreateOperation extends WriteOperation {}

export class IndexOperation extends WriteOperation {}

export class DeleteOperation extends OperationBase {}

export class UpdateOperation extends OperationBase {
  /**
   * If `true`, the request’s actions must target an index alias.
   * @server_default false
   */
  require_alias?: boolean
  retry_on_conflict?: integer
}

/** @variants container */
export class OperationContainer {
  /**
   * Indexes the specified document.
   * If the document exists, replaces the document and increments the version.
   * The following line must contain the source data to be indexed.
   */
  index?: IndexOperation
  /**
   * Indexes the specified document if it does not already exist.
   * The following line must contain the source data to be indexed.
   */
  create?: CreateOperation
  /**
   * Performs a partial document update.
   * The following line must contain the partial document and update options.
   */
  update?: UpdateOperation
  /**
   * Removes the specified document from the index.
   */
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
