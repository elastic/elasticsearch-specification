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
import { Conflicts, Slices, WaitForActiveShards } from '@_types/common'
import { float, long } from '@_types/Numeric'
import { Script } from '@_types/Scripting'
import { Duration } from '@_types/Time'
import { Destination, Source } from './types'

/**
 * Reindex documents.
 * Copies documents from a source to a destination. The source can be any existing index, alias, or data stream. The destination must differ from the source. For example, you cannot reindex a data stream into itself.
 * @rest_spec_name reindex
 * @availability stack since=2.3.0 stability=stable
 * @availability serverless stability=stable visibility=public
 * @doc_tag document
 */
export interface Request extends RequestBase {
  query_parameters: {
    /**
     * If `true`, the request refreshes affected shards to make this operation visible to search.
     * @server_default false
     */
    refresh?: boolean
    /**
     * The throttle for this request in sub-requests per second.
     * Defaults to no throttle.
     * @server_default -1
     */
    requests_per_second?: float
    /**
     * Specifies how long a consistent view of the index should be maintained for scrolled search.
     */
    scroll?: Duration
    /**
     * The number of slices this task should be divided into.
     * Defaults to 1 slice, meaning the task isn’t sliced into subtasks.
     * @server_default 1
     */
    slices?: Slices
    /**
     * Period each indexing waits for automatic index creation, dynamic mapping updates, and waiting for active shards.
     * @server_default 1m
     */
    timeout?: Duration
    /**
     * The number of shard copies that must be active before proceeding with the operation.
     * Set to `all` or any positive integer up to the total number of shards in the index (`number_of_replicas+1`).
     * @server_default 1
     */
    wait_for_active_shards?: WaitForActiveShards
    /**
     * If `true`, the request blocks until the operation is complete.
     * @server_default true
     */
    wait_for_completion?: boolean
    /**
     * If `true`, the destination must be an index alias.
     * @server_default false
     */
    require_alias?: boolean
  }
  body: {
    /**
     * Set to proceed to continue reindexing even if there are conflicts.
     * @server_default abort
     */
    conflicts?: Conflicts
    /**
     * The destination you are copying to.
     */
    dest: Destination
    /**
     * The maximum number of documents to reindex.
     */
    max_docs?: long
    /**
     * The script to run to update the document source or metadata when reindexing.
     */
    script?: Script
    size?: long
    /**
     * The source you are copying from.
     */
    source: Source
  }
}
