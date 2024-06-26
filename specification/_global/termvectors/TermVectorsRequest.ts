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
import { RequestBase } from '@_types/Base'
import {
  Field,
  Fields,
  Id,
  IndexName,
  Routing,
  VersionNumber,
  VersionType
} from '@_types/common'
import { Filter } from './types'

/**
 * @rest_spec_name termvectors
 * @availability stack stability=stable
 * @availability serverless stability=stable visibility=public
 */
export interface Request<TDocument> extends RequestBase {
  path_parts: {
    /**
     * Name of the index that contains the document.
     */
    index: IndexName
    /**
     * Unique identifier of the document.
     */
    id?: Id
  }
  query_parameters: {
    /**
     *  Comma-separated list or wildcard expressions of fields to include in the statistics.
     * Used as the default list unless a specific field list is provided in the `completion_fields` or `fielddata_fields` parameters.
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
     * Specifies the node or shard the operation should be performed on.
     * Random by default.
     */
    preference?: string
    /**
     * If true, the request is real-time as opposed to near-real-time.
     * @server_default true
     * @doc_id realtime
     */
    realtime?: boolean
    /**
     * Custom value used to route operations to a specific shard.
     */
    routing?: Routing
    /**
     * If `true`, the response includes term frequency and document frequency.
     * @server_default false
     */
    term_statistics?: boolean
    /**
     * If `true`, returns the document version as part of a hit.
     */
    version?: VersionNumber
    /**
     * Specific version type.
     */
    version_type?: VersionType
  }
  body: {
    /**
     * An artificial document (a document not present in the index) for which you want to retrieve term vectors.
     */
    doc?: TDocument
    /**
     * Filter terms based on their tf-idf scores.
     */
    filter?: Filter
    /**
     * Overrides the default per-field analyzer.
     */
    per_field_analyzer?: Dictionary<Field, string>
  }
}
