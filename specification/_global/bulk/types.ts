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
  Id,
  IndexName,
  InlineGet,
  OpType,
  SequenceNumber,
  VersionNumber,
  VersionType
} from '@_types/common'
import { ErrorCause } from '@_types/Errors'
import { integer, long } from '@_types/Numeric'
import { Script } from '@_types/Scripting'
import { ShardStatistics } from '@_types/Stats'
import { SourceConfig } from '@global/search/_types/SourceFilter'
import { Dictionary } from '@spec_utils/Dictionary'
import { UserDefinedValue } from '@spec_utils/UserDefinedValue'

export class ResponseItem {
  /**
   * The document ID associated with the operation.
   * It is `null` when an `index` or `create` operation without an explicit `_id` fails before Elasticsearch generates an ID for the document.
   * Elasticsearch generates the ID when it routes the document to a shard, so the ID is still `null` for failures that happen earlier, such as an ingest pipeline error, a missing or closed target index, a failed `require_alias` or `require_data_stream` check, or missing required routing.
   * `update` and `delete` operations always include an ID.
   */
  _id?: string | null
  /**
   * The name of the index associated with the operation.
   * If the operation targeted a data stream, this is the backing index into which the document was written.
   */
  _index: string
  /**
   * The HTTP status code returned for the operation.
   */
  status: integer
  failure_store?: FailureStoreStatus
  /**
   * Additional information about the failed operation.
   * The property is returned only for failed operations.
   */
  error?: ErrorCause
  /**
   * The primary term assigned to the document for the operation.
   * This property is returned only for successful operations.
   */
  _primary_term?: long
  /**
   * The result of the operation.
   * Possible values are `created`, `updated`, `deleted`, `noop`, and `not_found`.
   */
  result?: string
  /**
   * The sequence number assigned to the document for the operation.
   * Sequence numbers are used to ensure an older version of a document doesn't overwrite a newer version.
   */
  _seq_no?: SequenceNumber
  /**
   * Shard information for the operation.
   */
  _shards?: ShardStatistics
  /**
   * The document version associated with the operation.
   * The document version is incremented each time the document is updated.
   * This property is returned only for successful actions.
   */
  _version?: VersionNumber
  forced_refresh?: boolean
  get?: InlineGet<Dictionary<string, UserDefinedValue>>
}

export enum FailureStoreStatus {
  not_applicable_or_unknown,
  used,
  not_enabled,
  failed
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
   * The name of the index or index alias to perform the action on.
   */
  _index?: IndexName
  /**
   * A custom value used to route operations to a specific shard, or multiple comma separated values.
   * @availability stack stability=stable
   */
  routing?: string
  if_primary_term?: long
  if_seq_no?: SequenceNumber
}

export class WriteOperation extends OperationBase {
  /**
   * The explicit version number for concurrency control.
   * It must be a non-negative long number.
   * This parameter is not supported for `update` actions.
   */
  version?: VersionNumber
  /**
   * The version type.
   * This parameter is not supported for `update` actions.
   */
  version_type?: VersionType
  /**
   * A map from the full name of fields to the name of dynamic templates.
   * It defaults to an empty map.
   * If a name matches a dynamic template, that template will be applied regardless of other match predicates defined in the template.
   * If a field is already defined in the mapping, then this parameter won't be used.
   * @availability stack since=7.13.0
   * @availability serverless
   */
  dynamic_templates?: Dictionary<string, string>
  /**
   * A map from the full name of fields to the parameters to pass to the dynamic template selected for that field in `dynamic_templates`.
   * Each value is a map from parameter names to parameter values.
   * The dynamic template can reference a parameter with a placeholder such as `{unit:}`, where the text after the colon is the default value.
   * @availability stack since=9.3.0
   * @availability serverless
   */
  dynamic_template_params?: Dictionary<string, Dictionary<string, string>>
  /**
   * The ID of the pipeline to use to preprocess incoming documents.
   * If the index has a default ingest pipeline specified, setting the value to `_none` turns off the default ingest pipeline for this request.
   * If a final pipeline is configured, it will always run regardless of the value of this parameter.
   */
  pipeline?: string
  /**
   * If `true`, the request's actions must target an index alias.
   * @server_default false
   * @availability stack since=7.10.0
   * @availability serverless
   */
  require_alias?: boolean
  /**
   * If `true`, the action must target a data stream (existing or to be created).
   * @server_default false
   * @availability stack since=8.13.0
   * @availability serverless
   */
  require_data_stream?: boolean
  /**
   * If `true`, the response includes the ingest pipelines that were run for this action.
   * @server_default false
   * @availability stack since=8.12.0
   * @availability serverless
   */
  list_executed_pipelines?: boolean
}

export class CreateOperation extends WriteOperation {}

export class IndexOperation extends WriteOperation {
  /**
   * Set to `create` to only index the document if it does not already exist.
   * @server_default index
   */
  op_type?: OpType
}

export class DeleteOperation extends OperationBase {
  /**
   * The explicit version number for concurrency control.
   * It must be a non-negative long number.
   * This parameter is not supported for `update` actions.
   */
  version?: VersionNumber
  /**
   * The version type.
   * This parameter is not supported for `update` actions.
   */
  version_type?: VersionType
}

export class UpdateOperation extends OperationBase {
  /**
   * If `true`, the request's actions must target an index alias.
   * @server_default false
   * @availability stack since=7.10.0
   * @availability serverless
   */
  require_alias?: boolean
  /**
   * The number of times an update should be retried in the case of a version conflict.
   */
  retry_on_conflict?: integer
  /**
   * The ID of the pipeline to use to preprocess the `upsert` document, if one is created.
   * If the index has a default ingest pipeline specified, setting the value to `_none` turns off the default ingest pipeline for this request.
   * If a final pipeline is configured, it will always run regardless of the value of this parameter.
   */
  pipeline?: string
  /**
   * If `true`, the response includes the ingest pipelines that were run for the `upsert` document, if one is created.
   * @server_default false
   * @availability stack since=8.12.0
   * @availability serverless
   */
  list_executed_pipelines?: boolean
  /**
   * If `false`, source retrieval is turned off.
   * You can also specify a comma-separated list of the fields you want to retrieve.
   * If set, it overrides the `_source` value in the update source line.
   */
  _source?: SourceConfig
}

/**
 * An action line, which is the first line of each operation in a bulk request.
 * It specifies the action to perform (`index`, `create`, `update`, or `delete`) and its metadata, such as the target index and document ID.
 * All actions except `delete` expect a source line to follow.
 * @variants container
 */
export class OperationContainer {
  /**
   * Index the specified document.
   * If the document exists, it replaces the document and increments the version.
   * The following line must contain the source data to be indexed.
   */
  index?: IndexOperation
  /**
   * Index the specified document if it does not already exist.
   * The following line must contain the source data to be indexed.
   */
  create?: CreateOperation
  /**
   * Perform a partial document update.
   * The following line must contain the partial document and update options.
   */
  update?: UpdateOperation
  /**
   * Remove the specified document from the index.
   */
  delete?: DeleteOperation
}

/**
 * The source line that must follow an `update` action line.
 * It specifies the partial document, script, or upsert options to apply, plus optional update settings.
 */
export class UpdateAction<TDocument, TPartialDocument> {
  /**
   * If true, the `result` in the response is set to 'noop' when no changes to the document occur.
   * @server_default true
   */
  detect_noop?: boolean
  /**
   * A partial update to an existing document.
   */
  doc?: TPartialDocument
  /**
   * Set to `true` to use the contents of `doc` as the value of `upsert`.
   * @server_default false
   */
  doc_as_upsert?: boolean
  /**
   * The script to run to update the document.
   */
  script?: Script
  /**
   * Set to `true` to run the script whether or not the document exists.
   * @server_default false
   */
  scripted_upsert?: boolean
  /**
   * Only perform the update if the document has this sequence number.
   */
  if_seq_no?: SequenceNumber
  /**
   * Only perform the update if the document has this primary term.
   */
  if_primary_term?: long
  /**
   * If `false`, source retrieval is turned off.
   * You can also specify a comma-separated list of the fields you want to retrieve.
   * @server_default true
   */
  _source?: SourceConfig
  /**
   * If the document does not already exist, the contents of `upsert` are inserted as a new document.
   * If the document exists, the `script` is run.
   */
  upsert?: TDocument
}
