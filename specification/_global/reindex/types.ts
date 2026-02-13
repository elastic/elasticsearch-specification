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
import { SourceConfig } from '@global/search/_types/SourceFilter'
import { Dictionary } from '@spec_utils/Dictionary'

export class Destination {
  /**
   * The name of the data stream, index, or index alias you are copying to.
   */
  index: IndexName
  /**
   * If it is `create`, the operation will only index documents that do not already exist (also known as "put if absent").
   *
   * IMPORTANT: To reindex to a data stream destination, this argument must be `create`.
   * @server_default index
   */
  op_type?: OpType
  /**
   * The name of the pipeline to use.
   */
  pipeline?: string
  /**
   * By default, a document's routing is preserved unless it's changed by the script.
   * If it is `keep`, the routing on the bulk request sent for each match is set to the routing on the match.
   * If it is `discard`, the routing on the bulk request sent for each match is set to `null`.
   * If it is `=value`, the routing on the bulk request sent for each match is set to all value specified after the equals sign (`=`).
   * @server_default keep
   */
  routing?: string
  /**
   *  The versioning to use for the indexing operation.
   */
  version_type?: VersionType
}

export class Source {
  /**
   * The name of the data stream, index, or alias you are copying from.
   * It accepts a comma-separated list to reindex from multiple sources.
   */
  index: Indices
  /**
   * The documents to reindex, which is defined with Query DSL.
   */
  query?: QueryContainer
  /**
   * A remote instance of Elasticsearch that you want to index from.
   *
   * @availability stack since=5.0.0 stability=stable
   * @availability serverless stability=experimental visibility=public
   */
  remote?: RemoteSource
  /**
   * The number of documents to index per batch.
   * Use it when you are indexing from remote to ensure that the batches fit within the on-heap buffer, which defaults to a maximum size of 100 MB.
   * @server_default 1000
   */
  size?: integer
  /**
   * Slice the reindex request manually using the provided slice ID and total number of slices.
   */
  slice?: SlicedScroll
  /**
   * A comma-separated list of `<field>:<direction>` pairs to sort by before indexing.
   * Use it in conjunction with `max_docs` to control what documents are reindexed.
   *
   * WARNING: Sort in reindex is deprecated.
   * Sorting in reindex was never guaranteed to index documents in order and prevents further development of reindex such as resilience and performance improvements.
   * If used in combination with `max_docs`, consider using a query filter instead.
   * @deprecated 7.6.0
   */
  sort?: Sort
  /**
   * If `true`, reindex all source fields.
   * Set it to a list to reindex select fields.
   * @server_default true
   * @codegen_name source_fields */
  _source?: SourceConfig
  runtime_mappings?: RuntimeFields
}

export class RemoteSource {
  /**
   * The remote connection timeout.
   * @server_default 30s
   */
  connect_timeout?: Duration
  /**
   * An object containing the headers of the request.
   */
  headers?: Dictionary<string, string>
  /**
   * The URL for the remote instance of Elasticsearch that you want to index from.
   * This information is required when you're indexing from remote.
   */
  host: Host
  /**
   * The username to use for authentication with the remote host (required when using basic auth).
   */
  username?: Username
  /**
   * The password to use for authentication with the remote host (required when using basic auth).
   */
  password?: Password
  /**
   * The API key to use for authentication with the remote host (as an alternative to basic auth when the remote cluster is in Elastic Cloud).
   * (It is not permitted to set this and also to set an `Authorization` header via `headers`.)
   *
   * @availability stack since=9.3.0
   * @availability serverless
   */
  api_key?: string
  /**
   * The remote socket read timeout.
   * @server_default 30s
   */
  socket_timeout?: Duration
}
