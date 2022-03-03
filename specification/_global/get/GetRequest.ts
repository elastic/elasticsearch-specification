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
  Routing,
  VersionNumber,
  VersionType
} from '@_types/common'
import { SourceConfigParam } from '@global/search/_types/SourceFilter'

/**
 * @rest_spec_name get
 * @since 0.0.0
 * @stability stable
 */
export interface Request extends RequestBase {
  path_parts: {
    /** Unique identifier of the document. */
    id: Id
    /** Name of the index that contains the document. */
    index: IndexName
  }
  query_parameters: {
    /**
     * Specifies the node or shard the operation should be performed on. Random by default.
     */
    preference?: string
    /**
     *  Boolean) If true, the request is real-time as opposed to near-real-time.
     * @server_default true
     * @doc_id realtime
     */
    realtime?: boolean
    /**
     *  If true, Elasticsearch refreshes the affected shards to make this operation visible to search. If false, do nothing with refreshes.
     * @server_default false
     */
    refresh?: boolean
    /**
     * Target the specified primary shard.
     * @doc_id routing
     */
    routing?: Routing
    /**
     * True or false to return the _source field or not, or a list of fields to return.
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
    stored_fields?: Fields
    /**
     * Explicit version number for concurrency control. The specified version must match the current version of the document for the request to succeed.
     */
    version?: VersionNumber
    /**
     * Specific version type: internal, external, external_gte.
     */
    version_type?: VersionType
  }
}
