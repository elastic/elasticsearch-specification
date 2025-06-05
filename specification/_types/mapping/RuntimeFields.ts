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

import { Field, IndexName } from '@_types/common'
import { Script } from '@_types/Scripting'
import { Dictionary } from '@spec_utils/Dictionary'

export type RuntimeFields = Dictionary<Field, RuntimeField>

export class RuntimeField {
  /** For type `composite` */
  fields?: Dictionary<string, CompositeSubField>
  /** For type `lookup` */
  fetch_fields?: RuntimeFieldFetchFields[]
  /**
   * A custom format for `date` type runtime fields.
   * @doc_id mapping-date-format
   */
  format?: string
  /** For type `lookup` */
  input_field?: Field
  /** For type `lookup` */
  target_field?: Field
  /** For type `lookup` */
  target_index?: IndexName
  /**
   * Painless script executed at query time.
   */
  script?: Script
  /**
   * Field type, which can be: `boolean`, `composite`, `date`, `double`, `geo_point`, `ip`,`keyword`, `long`, or `lookup`.
   */
  type: RuntimeFieldType
}

class CompositeSubField {
  type: RuntimeFieldType
}

/** @shortcut_property field */
export class RuntimeFieldFetchFields {
  field: Field
  format?: string
}

export enum RuntimeFieldType {
  boolean,
  composite,
  date,
  double,
  geo_point,
  geo_shape,
  ip,
  keyword,
  long,
  lookup
}
