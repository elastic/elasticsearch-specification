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
  Routing,
  VersionNumber,
  VersionType
} from '@_types/common'
import { SourceConfigParam } from '@global/search/_types/SourceFilter'

/**
 * Check for a document source.
 *
 * Check whether a document source exists in an index.
 * For example:
 *
 * ```
 * HEAD my-index-000001/_source/1
 * ```
 *
 * A document's source is not available if it is disabled in the mapping.
 * @rest_spec_name exists_source
 * @availability stack since=5.4.0 stability=stable
 * @availability serverless stability=stable visibility=public
 * @doc_tag document
 * @index_privileges read
 * @doc_id docs-get
 * @ext_doc_id mapping-source-field
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/{index}/_source/{id}'
      methods: ['HEAD']
    }
  ]
  path_parts: {
    /**
     * A unique identifier for the document.
     */
    id: Id
    /**
     * A comma-separated list of data streams, indices, and aliases.
     * It supports wildcards (`*`).
     */
    index: IndexName
  }
  response_media_type: MediaType.Json
  query_parameters: {
    /**
     * The node or shard the operation should be performed on.
     * By default, the operation is randomized between the shard replicas.
     */
    preference?: string
    /**
     * If `true`, the request is real-time as opposed to near-real-time.
     * @server_default true
     * @ext_doc_id realtime
     */
    realtime?: boolean
    /**
     * If `true`, the request refreshes the relevant shards before retrieving the document.
     * Setting it to `true` should be done after careful thought and verification that this does not cause a heavy load on the system (and slow down indexing).
     * @server_default false
     */
    refresh?: boolean
    /**
     * A custom value used to route operations to a specific shard.
     * @ext_doc_id routing
     */
    routing?: Routing
    /**
     * Indicates whether to return the `_source` field (`true` or `false`) or lists the fields to return.
     */
    _source?: SourceConfigParam
    /**
     * A comma-separated list of source fields to exclude in the response.
     */
    _source_excludes?: Fields
    /**
     * A comma-separated list of source fields to include in the response.
     */
    _source_includes?: Fields
    /**
     * The version number for concurrency control.
     * It must match the current version of the document for the request to succeed.
     */
    version?: VersionNumber
    /**
     * The version type.
     */
    version_type?: VersionType
  }
}
