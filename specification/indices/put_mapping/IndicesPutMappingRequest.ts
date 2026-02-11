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
  ExpandWildcards,
  Indices,
  MediaType,
  Metadata,
  PropertyName
} from '@_types/common'
import {
  DynamicMapping,
  DynamicTemplate
} from '@_types/mapping/dynamic-template'
import {
  FieldNamesField,
  RoutingField,
  SourceField
} from '@_types/mapping/meta-fields'
import { Property } from '@_types/mapping/Property'
import { RuntimeFields } from '@_types/mapping/RuntimeFields'
import { Duration } from '@_types/Time'
import { Dictionary, SingleKeyDictionary } from '@spec_utils/Dictionary'

/**
 * Update field mappings.
 *
 * Add new fields to an existing data stream or index.
 * You can use the update mapping API to:
 *
 * - Add a new field to an existing index
 * - Update mappings for multiple indices in a single request
 * - Add new properties to an object field
 * - Enable multi-fields for an existing field
 * - Update supported mapping parameters
 * - Change a field's mapping using reindexing
 * - Rename a field using a field alias
 *
 * Learn how to use the update mapping API with practical examples in the [Update mapping API examples](https://www.elastic.co/docs/manage-data/data-store/mapping/update-mappings-examples) guide.
 * @rest_spec_name indices.put_mapping
 * @category management
 * @availability stack stability=stable
 * @availability serverless stability=stable visibility=public
 * @doc_id indices-put-mapping
 * @ext_doc_id mapping-params
 * @index_privileges manage
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/{index}/_mapping'
      methods: ['PUT', 'POST']
    }
  ]
  path_parts: {
    /**
     * A comma-separated list of index names the mapping should be added to (supports wildcards).
     * Use `_all` or omit to add the mapping on all indices.
     */
    index: Indices
  }
  request_media_type: MediaType.Json
  response_media_type: MediaType.Json
  query_parameters: {
    /**
     * If `false`, the request returns an error if any wildcard expression, index alias, or `_all` value targets only missing or closed indices.
     * This behavior applies even if the request targets other open indices.
     * @server_default true
     */
    allow_no_indices?: boolean
    /**
     * Type of index that wildcard patterns can match.
     * If the request can target data streams, this argument determines whether wildcard expressions match hidden data streams.
     * Supports comma-separated values, such as `open,hidden`.
     * @server_default open
     */
    expand_wildcards?: ExpandWildcards
    /**
     * If `false`, the request returns an error if it targets a missing or closed index.
     * @server_default false
     */
    ignore_unavailable?: boolean
    /**
     * Period to wait for a connection to the master node.
     * If no response is received before the timeout expires, the request fails and returns an error.
     * @server_default 30s
     */
    master_timeout?: Duration
    /**
     * Period to wait for a response.
     * If no response is received before the timeout expires, the request fails and returns an error.
     * @server_default 30s
     */
    timeout?: Duration
    /**
     * If `true`, the mappings are applied only to the current write index for the target.
     * @server_default false
     */
    write_index_only?: boolean
  }
  body: {
    /**
     * Controls whether dynamic date detection is enabled.
     */
    date_detection?: boolean
    /**
     * Controls whether new fields are added dynamically.
     */
    dynamic?: DynamicMapping
    /**
     * If date detection is enabled then new string fields are checked
     * against 'dynamic_date_formats' and if the value matches then
     * a new date field is added instead of string.
     */
    dynamic_date_formats?: string[]
    /**
     * Specify dynamic templates for the mapping.
     */
    dynamic_templates?: SingleKeyDictionary<string, DynamicTemplate>[]
    /**
     * Control whether field names are enabled for the index.
     */
    _field_names?: FieldNamesField
    /**
     * A mapping type can have custom meta data associated with it. These are
     * not used at all by Elasticsearch, but can be used to store
     * application-specific metadata.
     */
    _meta?: Metadata
    /**
     * Automatically map strings into numeric data types for all fields.
     * @server_default false
     */
    numeric_detection?: boolean
    /**
     * Mapping for a field. For new fields, this mapping can include:
     *
     * - Field name
     * - Field data type
     * - Mapping parameters
     */
    properties?: Dictionary<PropertyName, Property>
    /**
     * Enable making a routing value required on indexed documents.
     */
    _routing?: RoutingField
    /**
     * Control whether the _source field is enabled on the index.
     */
    _source?: SourceField
    /**
     * Mapping of runtime fields for the index.
     */
    runtime?: RuntimeFields
  }
}
