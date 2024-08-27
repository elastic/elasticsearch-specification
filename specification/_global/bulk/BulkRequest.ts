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
  IndexName,
  Refresh,
  Routing,
  WaitForActiveShards
} from '@_types/common'
import { Duration } from '@_types/Time'
import { OperationContainer, UpdateAction } from './types'
import { SourceConfigParam } from '@global/search/_types/SourceFilter'

/**
 * Bulk index or delete documents.
 * Performs multiple indexing or delete operations in a single API call.
 * This reduces overhead and can greatly increase indexing speed.
 * @rest_spec_name bulk
 * @availability stack stability=stable
 * @availability serverless stability=stable visibility=public
 * @doc_id docs-bulk
 *
 */
export interface Request<TDocument, TPartialDocument> extends RequestBase {
  path_parts: {
    /**
     * Name of the data stream, index, or index alias to perform bulk actions on.
     */
    index?: IndexName
  }
  query_parameters: {
    /**
     * ID of the pipeline to use to preprocess incoming documents.
     * If the index has a default ingest pipeline specified, then setting the value to `_none` disables the default ingest pipeline for this request.
     * If a final pipeline is configured it will always run, regardless of the value of this parameter.
     */
    pipeline?: string
    /**
     * If `true`, Elasticsearch refreshes the affected shards to make this operation visible to search, if `wait_for` then wait for a refresh to make this operation visible to search, if `false` do nothing with refreshes.
     * Valid values: `true`, `false`, `wait_for`.
     * @server_default false
     */
    refresh?: Refresh
    /**
     * Custom value used to route operations to a specific shard.
     */
    routing?: Routing
    /**
     * `true` or `false` to return the `_source` field or not, or a list of fields to return.
     */
    _source?: SourceConfigParam
    /**
     * A comma-separated list of source fields to exclude from the response.
     */
    _source_excludes?: Fields
    /**
     * A comma-separated list of source fields to include in the response.
     */
    _source_includes?: Fields
    /**
     * Period each action waits for the following operations: automatic index creation, dynamic mapping updates, waiting for active shards.
     * @server_default 1m
     */
    timeout?: Duration
    /**
     * The number of shard copies that must be active before proceeding with the operation.
     * Set to all or any positive integer up to the total number of shards in the index (`number_of_replicas+1`).
     * @server_default 1
     */
    wait_for_active_shards?: WaitForActiveShards
    /**
     * If `true`, the request’s actions must target an index alias.
     * @server_default false
     */
    require_alias?: boolean
  }
  /**
   * The request body contains a newline-delimited list of `create`, `delete`, `index`, and `update` actions and their associated source data.
   * @codegen_name operations */
  // This declaration captures action_and_meta_data (OperationContainer) and the two kinds of sources
  // that can follow: an update action for update operations and anything for index or create operations.
  // /!\ must be kept in sync with BulkMonitoringRequest
  body: Array<
    OperationContainer | UpdateAction<TDocument, TPartialDocument> | TDocument
  >
}
