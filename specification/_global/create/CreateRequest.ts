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
  Id,
  IndexName,
  Refresh,
  Routing,
  VersionNumber,
  VersionType,
  WaitForActiveShards
} from '@_types/common'
import { Duration } from '@_types/Time'

/**
 * Adds a JSON document to the specified data stream or index and makes it searchable.
 * If the target is an index and the document already exists, the request updates the document and increments its version.
 * @rest_spec_name create
 * @availability stack since=5.0.0 stability=stable
 * @availability serverless stability=stable visibility=public
 *
 */
export interface Request<TDocument> extends RequestBase {
  path_parts: {
    /**
     * Unique identifier for the document.
     */
    id: Id
    /**
     * Name of the data stream or index to target.
     * If the target doesn’t exist and matches the name or wildcard (`*`) pattern of an index template with a `data_stream` definition, this request creates the data stream.
     * If the target doesn’t exist and doesn’t match a data stream template, this request creates the index.
     */
    index: IndexName
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
     * Period the request waits for the following operations: automatic index creation, dynamic mapping updates, waiting for active shards.
     * @server_default 1m
     */
    timeout?: Duration
    /**
     * Explicit version number for concurrency control.
     * The specified version must match the current version of the document for the request to succeed.
     */
    version?: VersionNumber
    /**
     * Specific version type: `external`, `external_gte`.
     */
    version_type?: VersionType
    /**
     * The number of shard copies that must be active before proceeding with the operation.
     * Set to `all` or any positive integer up to the total number of shards in the index (`number_of_replicas+1`).
     * @server_default 1
     */
    wait_for_active_shards?: WaitForActiveShards
  }
  /**
   * Request body contains the JSON source for the document data.
   * @codegen_name document */
  body?: TDocument
}
