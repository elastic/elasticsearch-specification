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
import { Field, IndexName } from '@_types/common'
import { Script } from '@_types/Scripting'

export type RuntimeFields = Dictionary<Field, RuntimeField>

export class RuntimeField {
  /** For type `composite` */
  fields?: Dictionary<string, Dictionary<string, RuntimeFieldType>>
  /** For type `lookup` */
  fetch_fields?: RuntimeFieldFetchFields[]
  format?: string
  /** For type `lookup` */
  input_field?: Field
  /** For type `lookup` */
  target_field?: Field
  /** For type `lookup` */
  target_index?: IndexName
  script?: Script
  type: RuntimeFieldType
}

/** @shortcut_property field */
export class RuntimeFieldFetchFields {
  field: Field
  format?: string
}

export enum RuntimeFieldType {
  boolean = 0,
  composite = 1,
  date = 2,
  double = 3,
  geo_point = 4,
  ip = 5,
  keyword = 6,
  long = 7,
  lookup
}
