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

import { Dictionary } from '@spec_utils/Dictionary'
import {
  Fields,
  IndexName,
  Indices,
  OpType,
  Password,
  Routing,
  Username,
  VersionType
} from '@_types/common'
import { RuntimeFields } from '@_types/mapping/RuntimeFields'
import { Host } from '@_types/Networking'
import { integer } from '@_types/Numeric'
import { QueryContainer } from '@_types/query_dsl/abstractions'
import { SlicedScroll } from '@_types/SlicedScroll'
import { Sort } from '@_types/sort'
import { Duration } from '@_types/Time'

export class Destination {
  /**
   * The name of the data stream, index, or index alias you are copying to.
   */
  index: IndexName
  /**
   * Set to `create` to only index documents that do not already exist.
   * Important: To reindex to a data stream destination, this argument must be `create`.
   * @server_default index
   */
  op_type?: OpType
  /**
   * The name of the pipeline to use.
   */
  pipeline?: string
  /**
   * By default, a document's routing is preserved unless it’s changed by the script.
   * Set to `discard` to set routing to `null`,  or `=value` to route using the specified `value`.
   * @server_default keep
   */
  routing?: Routing
  /**
   *  The versioning to use for the indexing operation.
   */
  version_type?: VersionType
}

export class Source {
  /**
   * The name of the data stream, index, or alias you are copying from.
   * Accepts a comma-separated list to reindex from multiple sources.
   */
  index: Indices
  /**
   * Specifies the documents to reindex using the Query DSL.
   */
  query?: QueryContainer
  /**
   * A remote instance of Elasticsearch that you want to index from.
   */
  remote?: RemoteSource
  /**
   * The number of documents to index per batch.
   * Use when indexing from remote to ensure that the batches fit within the on-heap buffer, which defaults to a maximum size of 100 MB.
   */
  size?: integer
  /**
   * Slice the reindex request manually using the provided slice ID and total number of slices.
   */
  slice?: SlicedScroll
  sort?: Sort
  /**
   * If `true` reindexes all source fields.
   * Set to a list to reindex select fields.
   * @server_default true
   * @codegen_name source_fields */
  _source?: Fields
  runtime_mappings?: RuntimeFields
}

export class RemoteSource {
  /**
   * The remote connection timeout.
   * Defaults to 30 seconds.
   */
  connect_timeout?: Duration
  /**
   * An object containing the headers of the request.
   */
  headers?: Dictionary<string, string>
  /**
   * The URL for the remote instance of Elasticsearch that you want to index from.
   */
  host: Host
  /**
   * The username to use for authentication with the remote host.
   */
  username?: Username
  /**
   * The password to use for authentication with the remote host.
   */
  password?: Password
  /**
   * The remote socket read timeout. Defaults to 30 seconds.
   */
  socket_timeout?: Duration
}
