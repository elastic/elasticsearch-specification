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

import { RequestBase } from '@_types/Base'
import {
  Fields,
  Id,
  IndexName,
  MediaType,
  Refresh,
  Routing,
  SequenceNumber,
  WaitForActiveShards
} from '@_types/common'
import { integer, long } from '@_types/Numeric'
import { Script } from '@_types/Scripting'
import { Duration } from '@_types/Time'
import {
  SourceConfig,
  SourceConfigParam
} from '@global/search/_types/SourceFilter'

/**
 * Update a document.
 *
 * Update a document by running a script or passing a partial document.
 *
 * If the Elasticsearch security features are enabled, you must have the `index` or `write` index privilege for the target index or index alias.
 *
 * The script can update, delete, or skip modifying the document.
 * The API also supports passing a partial document, which is merged into the existing document.
 * To fully replace an existing document, use the index API.
 * This operation:
 *
 * * Gets the document (collocated with the shard) from the index.
 * * Runs the specified script.
 * * Indexes the result.
 *
 * The document must still be reindexed, but using this API removes some network roundtrips and reduces chances of version conflicts between the GET and the index operation.
 *
 * The `_source` field must be enabled to use this API.
 * In addition to `_source`, you can access the following variables through the `ctx` map: `_index`, `_type`, `_id`, `_version`, `_routing`, and `_now` (the current timestamp).
 * @rest_spec_name update
 * @availability stack stability=stable
 * @availability serverless stability=stable visibility=public
 * @index_privileges write
 * @doc_tag document
 * @doc_id docs-update
 */
export interface Request<TDocument, TPartialDocument> extends RequestBase {
  urls: [
    {
      path: '/{index}/_update/{id}'
      methods: ['POST']
    }
  ]
  path_parts: {
    /**
     * A unique identifier for the document to be updated.
     */
    id: Id
    /**
     * The name of the target index.
     * By default, the index is created automatically if it doesn't exist.
     */
    index: IndexName
  }
  request_media_type: MediaType.Json
  response_media_type: MediaType.Json
  query_parameters: {
    /**
     * Only perform the operation if the document has this primary term.
     * @ext_doc_id optimistic-concurrency
     */
    if_primary_term?: long
    /**
     * Only perform the operation if the document has this sequence number.
     * @ext_doc_id optimistic-concurrency
     */
    if_seq_no?: SequenceNumber
    /**
     * True or false if to include the document source in the error message in case of parsing errors.
     * @server_default true
     */
    include_source_on_error?: boolean
    /**
     * The script language.
     * @server_default painless
     */
    lang?: string
    /**
     * If 'true', Elasticsearch refreshes the affected shards to make this operation visible to search.
     * If 'wait_for', it waits for a refresh to make this operation visible to search.
     * If 'false', it does nothing with refreshes.
     * @server_default false
     */
    refresh?: Refresh
    /**
     * If `true`, the destination must be an index alias.
     * @server_default false
     */
    require_alias?: boolean
    /**
     * The number of times the operation should be retried when a conflict occurs.
     * @server_default 0
     */
    retry_on_conflict?: integer
    /**
     * A custom value used to route operations to a specific shard.
     */
    routing?: Routing
    /**
     * The period to wait for the following operations: dynamic mapping updates and waiting for active shards.
     * Elasticsearch waits for at least the timeout period before failing.
     * The actual wait time could be longer, particularly when multiple waits occur.
     * @server_default 1m
     */
    timeout?: Duration
    /**
     * The number of copies of each shard that must be active before proceeding with the operation.
     * Set to 'all' or any positive integer up to the total number of shards in the index (`number_of_replicas`+1).
     * The default value of `1` means it waits for each primary shard to be active.
     * @server_default 1
     */
    wait_for_active_shards?: WaitForActiveShards
    /**
     * If `false`, source retrieval is turned off.
     * You can also specify a comma-separated list of the fields you want to retrieve.
     * @server_default true
     */
    _source?: SourceConfigParam
    /**
     * The source fields you want to exclude.
     */
    _source_excludes?: Fields
    /**
     * The source fields you want to retrieve.
     */
    _source_includes?: Fields
  }
  body: {
    /**
     * If `true`, the `result` in the response is set to `noop` (no operation) when there are no changes to the document.
     * @server_default true
     */
    detect_noop?: boolean
    /**
     * A partial update to an existing document.
     * If both `doc` and `script` are specified, `doc` is ignored.
     * @prop_serializer SourceFormatter`1
     */
    doc?: TPartialDocument
    /**
     * If `true`, use the contents of 'doc' as the value of 'upsert'.
     * NOTE: Using ingest pipelines with `doc_as_upsert` is not supported.
     * @server_default false
     */
    doc_as_upsert?: boolean
    /**
     * The script to run to update the document.
     */
    script?: Script
    /**
     * If `true`, run the script whether or not the document exists.
     * @server_default false
     */
    scripted_upsert?: boolean
    /**
     * If `false`, turn off source retrieval.
     * You can also specify a comma-separated list of the fields you want to retrieve.
     * @server_default true
     */
    _source?: SourceConfig
    /**
     * If the document does not already exist, the contents of 'upsert' are inserted as a new document.
     * If the document exists, the 'script' is run.
     * @prop_serializer SourceFormatter`1
     */
    upsert?: TDocument
  }
}
