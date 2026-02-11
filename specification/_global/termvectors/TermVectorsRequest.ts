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
  Field,
  Fields,
  Id,
  IndexName,
  MediaType,
  Routing,
  VersionNumber,
  VersionType
} from '@_types/common'
import { Dictionary } from '@spec_utils/Dictionary'
import { Filter } from './types'

/**
 * Get term vector information.
 *
 * Get information and statistics about terms in the fields of a particular document.
 *
 * You can retrieve term vectors for documents stored in the index or for artificial documents passed in the body of the request.
 * You can specify the fields you are interested in through the `fields` parameter or by adding the fields to the request body.
 * For example:
 *
 * ```
 * GET /my-index-000001/_termvectors/1?fields=message
 * ```
 *
 * Fields can be specified using wildcards, similar to the multi match query.
 *
 * Term vectors are real-time by default, not near real-time.
 * This can be changed by setting `realtime` parameter to `false`.
 *
 * You can request three types of values: _term information_, _term statistics_, and _field statistics_.
 * By default, all term information and field statistics are returned for all fields but term statistics are excluded.
 *
 * **Term information**
 *
 * * term frequency in the field (always returned)
 * * term positions (`positions: true`)
 * * start and end offsets (`offsets: true`)
 * * term payloads (`payloads: true`), as base64 encoded bytes
 *
 * If the requested information wasn't stored in the index, it will be computed on the fly if possible.
 * Additionally, term vectors could be computed for documents not even existing in the index, but instead provided by the user.
 *
 * > warn
 * > Start and end offsets assume UTF-16 encoding is being used. If you want to use these offsets in order to get the original text that produced this token, you should make sure that the string you are taking a sub-string of is also encoded using UTF-16.
 *
 * **Behaviour**
 *
 * The term and field statistics are not accurate.
 * Deleted documents are not taken into account.
 * The information is only retrieved for the shard the requested document resides in.
 * The term and field statistics are therefore only useful as relative measures whereas the absolute numbers have no meaning in this context.
 * By default, when requesting term vectors of artificial documents, a shard to get the statistics from is randomly selected.
 * Use `routing` only to hit a particular shard.
 * Refer to the linked documentation for detailed examples of how to use this API.
 * @rest_spec_name termvectors
 * @category document management
 * @availability stack stability=stable
 * @availability serverless stability=stable visibility=public
 * @index_privileges read
 * @doc_tag document
 * @doc_id docs-termvectors
 * @ext_doc_id term-vectors-examples
 */
export interface Request<TDocument> extends RequestBase {
  urls: [
    {
      path: '/{index}/_termvectors/{id}'
      methods: ['GET', 'POST']
    },
    {
      path: '/{index}/_termvectors'
      methods: ['GET', 'POST']
    }
  ]
  path_parts: {
    /**
     * The name of the index that contains the document.
     */
    index: IndexName
    /**
     * A unique identifier for the document.
     */
    id?: Id
  }
  request_media_type: MediaType.Json
  response_media_type: MediaType.Json
  query_parameters: {
    /**
     * A comma-separated list or wildcard expressions of fields to include in the statistics.
     * It is used as the default list unless a specific field list is provided in the `completion_fields` or `fielddata_fields` parameters.
     */
    fields?: Fields
    /**
     * If `true`, the response includes:
     *
     * * The document count (how many documents contain this field).
     * * The sum of document frequencies (the sum of document frequencies for all terms in this field).
     * * The sum of total term frequencies (the sum of total term frequencies of each term in this field).
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
     * A custom value that is used to route operations to a specific shard.
     */
    routing?: Routing
    /**
     * If `true`, the response includes:
     *
     * * The total term frequency (how often a term occurs in all documents).
     * * The document frequency (the number of documents containing the current term).
     *
     * By default these values are not returned since term statistics can have a serious performance impact.
     *
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
     * An artificial document (a document not present in the index) for which you want to retrieve term vectors.
     */
    doc?: TDocument
    /**
     * Filter terms based on their tf-idf scores.
     * This could be useful in order find out a good characteristic vector of a document.
     * This feature works in a similar manner to the second phase of the More Like This Query.
     * @ext_doc_id query-dsl-mlt-query
     */
    filter?: Filter
    /**
     * Override the default per-field analyzer.
     * This is useful in order to generate term vectors in any fashion, especially when using artificial documents.
     * When providing an analyzer for a field that already stores term vectors, the term vectors will be regenerated.
     */
    per_field_analyzer?: Dictionary<Field, string>
    /**
     * A list of fields to include in the statistics.
     * It is used as the default list unless a specific field list is provided in the `completion_fields` or `fielddata_fields` parameters.
     */
    fields?: Field[]
    /**
     * If `true`, the response includes:
     *
     * * The document count (how many documents contain this field).
     * * The sum of document frequencies (the sum of document frequencies for all terms in this field).
     * * The sum of total term frequencies (the sum of total term frequencies of each term in this field).
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
     * If `true`, the response includes:
     *
     * * The total term frequency (how often a term occurs in all documents).
     * * The document frequency (the number of documents containing the current term).
     *
     * By default these values are not returned since term statistics can have a serious performance impact.
     *
     * @server_default false
     */
    term_statistics?: boolean
    /**
     * A custom value that is used to route operations to a specific shard.
     */
    routing?: Routing
    /**
     * If `true`, returns the document version as part of a hit.
     */
    version?: VersionNumber
    /**
     * The version type.
     */
    version_type?: VersionType
  }
}
