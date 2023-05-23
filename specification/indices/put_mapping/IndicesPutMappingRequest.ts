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
import { UserDefinedValue } from '@spec_utils/UserDefinedValue'
import { RequestBase } from '@_types/Base'
import {
  ExpandWildcards,
  Indices,
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

/**
 * @rest_spec_name indices.put_mapping
 * @availability stack since=0.0.0 stability=stable
 */
export interface Request extends RequestBase {
  path_parts: {
    index: Indices
  }
  query_parameters: {
    allow_no_indices?: boolean
    expand_wildcards?: ExpandWildcards
    ignore_unavailable?: boolean
    master_timeout?: Duration
    timeout?: Duration
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
    dynamic_templates?:
      | Dictionary<string, DynamicTemplate>
      | Dictionary<string, DynamicTemplate>[]
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
