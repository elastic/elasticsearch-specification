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
import { Metadata, PropertyName } from '@_types/common'
import { DynamicMapping, DynamicTemplate } from './dynamic-template'
import {
  AllField,
  FieldNamesField,
  IndexField,
  RoutingField,
  SizeField,
  SourceField
} from './meta-fields'
import { Property } from './Property'
import { RuntimeField } from './RuntimeFields'

export class TypeMapping {
  all_field?: AllField
  date_detection?: boolean
  dynamic?: DynamicMapping
  dynamic_date_formats?: string[]
  dynamic_templates?:
    | Dictionary<string, DynamicTemplate>
    | Dictionary<string, DynamicTemplate>[]
  _field_names?: FieldNamesField
  index_field?: IndexField
  /** @doc_id mapping-meta-field */
  _meta?: Metadata
  numeric_detection?: boolean
  properties?: Dictionary<PropertyName, Property>
  _routing?: RoutingField
  _size?: SizeField
  _source?: SourceField
  runtime?: Dictionary<string, RuntimeField>
  enabled?: boolean
  /** @since 7.16.0 */
  _data_stream_timestamp?: DataStreamTimestamp
}

export class DataStreamTimestamp {
  enabled: boolean
}
