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
  SourceConfigParam,
  SourceConfig
} from '@global/search/_types/SourceFilter'
import { RequestBase } from '@_types/Base'
import {
  Fields,
  Id,
  IndexName,
  Refresh,
  Routing,
  SequenceNumber,
  WaitForActiveShards
} from '@_types/common'
import { integer, long } from '@_types/Numeric'
import { Script } from '@_types/Scripting'
import { TimeSpan } from '@_types/Time'

/**
 * @rest_spec_name update
 * @since 0.0.0
 * @stability stable
 */
export interface Request<TDocument, TPartialDocument> extends RequestBase {
  path_parts: {
    id: Id
    index: IndexName
  }
  query_parameters: {
    /**
     * Only perform the operation if the document has this primary term.
     */
    if_primary_term?: long
    /**
     * Only perform the operation if the document has this sequence number.
     */
    if_seq_no?: SequenceNumber
    /**
     * The script language.
     * @server_default painless
     */
    lang?: string
    /**
     * If 'true', Elasticsearch refreshes the affected shards to make this operation
     * visible to search, if 'wait_for' then wait for a refresh to make this operation
     * visible to search, if 'false' do nothing with refreshes.
     * @server_default false
     */
    refresh?: Refresh
    /**
     * If true, the destination must be an index alias.
     * @server_default false
     */
    require_alias?: boolean
    /**
     * Specify how many times should the operation be retried when a conflict occurs.
     * @server_default 0
     */
    retry_on_conflict?: integer
    /**
     * Custom value used to route operations to a specific shard.
     */
    routing?: Routing
    /**
     * Period to wait for dynamic mapping updates and active shards.
     * This guarantees Elasticsearch waits for at least the timeout before failing.
     * The actual wait time could be longer, particularly when multiple waits occur.
     * @server_default 1m
     */
    timeout?: TimeSpan
    /**
     * The number of shard copies that must be active before proceeding with the operations.
     * Set to 'all' or any positive integer up to the total number of shards in the index
     * (number_of_replicas+1). Defaults to 1 meaning the primary shard.
     * @server_default 1
     */
    wait_for_active_shards?: WaitForActiveShards
    /**
     * Set to false to disable source retrieval. You can also specify a comma-separated
     * list of the fields you want to retrieve.
     * @server_default true
     */
    _source?: SourceConfigParam
    /**
     * Specify the source fields you want to exclude.
     */
    _source_excludes?: Fields
    /**
     * Specify the source fields you want to retrieve.
     */
    _source_includes?: Fields
  }
  body: {
    /**
     * Set to false to disable setting 'result' in the response
     * to 'noop' if no change to the document occurred.
     * @server_default true
     */
    detect_noop?: boolean
    /**
     * A partial update to an existing document.
     * @prop_serializer SourceFormatter`1
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
     * @prop_serializer SourceFormatter`1
     */
    upsert?: TDocument
  }
}
