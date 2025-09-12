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
import { Operation } from './types'

/**
 * Get multiple term vectors.
 *
 * Get multiple term vectors with a single request.
 * You can specify existing documents by index and ID or provide artificial documents in the body of the request.
 * You can specify the index in the request body or request URI.
 * The response contains a `docs` array with all the fetched termvectors.
 * Each element has the structure provided by the termvectors API.
 *
 * **Artificial documents**
 *
 * You can also use `mtermvectors` to generate term vectors for artificial documents provided in the body of the request.
 * The mapping used is determined by the specified `_index`.
 * @rest_spec_name mtermvectors
 * @availability stack stability=stable
 * @availability serverless stability=stable visibility=public
 * @index_privileges read
 * @doc_tag document
 * @doc_id docs-multi-termvectors
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_mtermvectors'
      methods: ['GET', 'POST']
    },
    {
      path: '/{index}/_mtermvectors'
      methods: ['GET', 'POST']
    }
  ]
  path_parts: {
    /**
     * The name of the index that contains the documents.
     */
    index?: IndexName
  }
  query_parameters: {
    ids?: Id[]
    /**
     * A comma-separated list or wildcard expressions of fields to include in the statistics.
     * It is used as the default list unless a specific field list is provided in the `completion_fields` or `fielddata_fields` parameters.
     */
    fields?: Fields
    /**
     * If `true`, the response includes the document count, sum of document frequencies, and sum of total term frequencies.
     * @server_default true
     */
    field_statistics?: boolean
    /**
     * If `true`, the response includes term offsets.
     * @server_default true
     */
    offsets?: boolean
    /**
     * If `true`, the response includes term payloads.
     * @server_default true
     */
    payloads?: boolean
    /**
     * If `true`, the response includes term positions.
     * @server_default true
     */
    positions?: boolean
    /**
     * The node or shard the operation should be performed on.
     * It is random by default.
     */
    preference?: string
    /**
     * If true, the request is real-time as opposed to near-real-time.
     * @server_default true
     * @doc_id realtime
     */
    realtime?: boolean
    /**
     * A custom value used to route operations to a specific shard.
     */
    routing?: Routing
    /**
     * If true, the response includes term frequency and document frequency.
     * @server_default false
     */
    term_statistics?: boolean
    /**
     * If `true`, returns the document version as part of a hit.
     */
    version?: VersionNumber
    /**
     * The version type.
     */
    version_type?: VersionType
  }
  body?: {
    /**
     * An array of existing or artificial documents.
     */
    docs?: Operation[]
    /**
     * A simplified syntax to specify documents by their ID if they're in the same index.
     */
    ids?: Id[]
  }
}
