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
import { Fields, Ids, IndexName, MediaType, Routing } from '@_types/common'
import { SourceConfigParam } from '@global/search/_types/SourceFilter'
import { Operation } from './types'

/**
 * Get multiple documents.
 *
 * Get multiple JSON documents by ID from one or more indices.
 * If you specify an index in the request URI, you only need to specify the document IDs in the request body.
 * To ensure fast responses, this multi get (mget) API responds with partial results if one or more shards fail.
 *
 * **Filter source fields**
 *
 * By default, the `_source` field is returned for every document (if stored).
 * Use the `_source` and `_source_include` or `source_exclude` attributes to filter what fields are returned for a particular document.
 * You can include the `_source`, `_source_includes`, and `_source_excludes` query parameters in the request URI to specify the defaults to use when there are no per-document instructions.
 *
 * **Get stored fields**
 *
 * Use the `stored_fields` attribute to specify the set of stored fields you want to retrieve.
 * Any requested fields that are not stored are ignored.
 * You can include the `stored_fields` query parameter in the request URI to specify the defaults to use when there are no per-document instructions.
 * @rest_spec_name mget
 * @category document management
 * @availability stack since=1.3.0 stability=stable
 * @availability serverless stability=stable visibility=public
 * @index_privileges read
 * @doc_tag document
 * @doc_id docs-multi-get
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_mget'
      methods: ['GET', 'POST']
    },
    {
      path: '/{index}/_mget'
      methods: ['GET', 'POST']
    }
  ]
  path_parts: {
    /**
     * Name of the index to retrieve documents from when `ids` are specified, or when a document in the `docs` array does not specify an index.
     */
    index?: IndexName
  }
  request_media_type: MediaType.Json
  response_media_type: MediaType.Json
  query_parameters: {
    /**
     * Should this request force synthetic _source?
     * Use this to test if the mapping supports synthetic _source and to get a sense of the worst case performance.
     * Fetches with this enabled will be slower the enabling synthetic source natively in the index.
     * @availability stack since=8.4.0 visibility=feature_flag feature_flag=es.index_mode_feature_flag_registered
     */
    force_synthetic_source?: boolean
    /**
     * Specifies the node or shard the operation should be performed on. Random by default.
     */
    preference?: string
    /**
     * If `true`, the request is real-time as opposed to near-real-time.
     * @server_default true
     * @doc_id realtime
     */
    realtime?: boolean
    /**
     * If `true`, the request refreshes relevant shards before retrieving documents.
     * @server_default false
     */
    refresh?: boolean
    /**
     * Custom value used to route operations to a specific shard.
     */
    routing?: Routing
    /**
     * True or false to return the `_source` field or not, or a list of fields to return.
     */
    _source?: SourceConfigParam
    /**
     * A comma-separated list of source fields to exclude from the response.
     * You can also use this parameter to exclude fields from the subset specified in `_source_includes` query parameter.
     * @doc_id mapping-source-field
     */
    _source_excludes?: Fields
    /**
     * A comma-separated list of source fields to include in the response.
     * If this parameter is specified, only these source fields are returned. You can exclude fields from this subset using the `_source_excludes` query parameter.
     * If the `_source` parameter is `false`, this parameter is ignored.
     * @doc_id mapping-source-field
     */
    _source_includes?: Fields
    /**
     * If `true`, retrieves the document fields stored in the index rather than the document `_source`.
     * @server_default false
     */
    stored_fields?: Fields
  }
  body: {
    /**
     * The documents you want to retrieve. Required if no index is specified in the request URI.
     */
    docs?: Operation[]
    /**
     * The IDs of the documents you want to retrieve. Allowed when the index is specified in the request URI.
     */
    ids?: Ids
  }
}
