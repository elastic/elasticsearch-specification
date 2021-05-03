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

import { SortOrder } from '@global/search/sort/SortOrder'
import { Dictionary } from '@spec_utils/Dictionary'
import { UserDefinedValue } from '@spec_utils/UserDefinedValue'
import { Field, Fields, Id, Name } from '@_types/common'
import { GeoShapeRelation } from '@_types/Geo'
import { double, integer, long } from '@_types/Numeric'

/**
 * @variants container
 */
export class ProcessorContainer {
  attachment?: Attachment
  append?: Append
  csv?: Csv
  convert?: Convert
  date?: Date
  date_index_name?: DateIndexName
  dot_expander?: DotExpander
  enrich?: Enrich
  fail?: Fail
  foreach?: Foreach
  json?: Json
  user_agent?: UserAgent
  kv?: KeyValue
  geoip?: GeoIp
  grok?: Grok
  gsub?: Gsub
  join?: Join
  lowercase?: Lowercase
  remove?: Remove
  rename?: Rename
  script?: Script
  set?: Set
  sort?: Sort
  split?: Split
  trim?: Trim
  uppercase?: Uppercase
  urldecode?: UrlDecode
  bytes?: Bytes
  dissect?: Dissect
  set_security_user?: SetSecurityUser
  pipeline?: Pipeline
  drop?: Drop
  circle?: Circle
  inference?: Inference
}

export class Base {
  if?: string
  ignore_failure?: boolean
  on_failure?: ProcessorContainer[]
  tag?: string
}

export enum UserAgentProperty {
  NAME = 0,
  MAJOR = 1,
  MINOR = 2,
  PATCH = 3,
  OS = 4,
  OS_NAME = 5,
  OS_MAJOR = 6,
  OS_MINOR = 7,
  DEVICE = 8,
  BUILD = 9
}

export class Append extends Base {
  field: Field
  value: UserDefinedValue[]
  allow_duplicates?: boolean
}

export class Attachment extends Base {
  field: Field
  ignore_missing?: boolean
  indexed_chars?: long
  indexed_chars_field?: Field
  properties?: string[]
  target_field?: Field
  resource_name?: string
}

export class GeoIp extends Base {
  database_file: string
  field: Field
  first_only: boolean
  ignore_missing: boolean
  properties: string[]
  target_field: Field
}

export class UserAgent extends Base {
  field: Field
  ignore_missing: boolean
  options: UserAgentProperty[]
  regex_file: string
  target_field: Field
}

export class Bytes extends Base {
  field: Field
  ignore_missing?: boolean
  target_field?: Field
}

export class Circle extends Base {
  error_distance: double
  field: Field
  ignore_missing: boolean
  shape_type: ShapeType
  target_field: Field
}

export enum ConvertType {
  integer = 0,
  long = 1,
  float = 2,
  double = 3,
  string = 4,
  boolean = 5,
  auto = 6
}

export class Convert extends Base {
  field: Field
  ignore_missing?: boolean
  target_field: Field
  type: ConvertType
}

export class Csv extends Base {
  empty_value: UserDefinedValue
  description?: string
  field: Field
  ignore_missing?: boolean
  quote?: string
  separator?: string
  target_fields: Fields
  trim: boolean
}

export enum DateRounding {
  /** @identifier Second */
  s = 0,
  /** @identifier Minute */
  m = 1,
  /** @identifier Hour */
  h = 2,
  /** @identifier Day */
  d = 3,
  /** @identifier Week */
  w = 4,
  /** @identifier Month */
  M = 5,
  /** @identifier Year */
  y = 6
}

export class DateIndexName extends Base {
  date_formats: string[]
  date_rounding: string | DateRounding
  field: Field
  index_name_format: string
  index_name_prefix: string
  locale: string
  timezone: string
}

export class Date extends Base {
  field: Field
  formats: string[]
  locale?: string
  target_field?: Field
  timezone?: string
}

export class Dissect extends Base {
  append_separator: string
  field: Field
  ignore_missing: boolean
  pattern: string
}

export class DotExpander extends Base {
  field: Field
  path?: string
}

export class Drop extends Base {}

export class Enrich extends Base {
  field: Field
  ignore_missing?: boolean
  max_matches?: integer
  override?: boolean
  policy_name: string
  shape_relation?: GeoShapeRelation
  target_field: Field
}

export class Fail extends Base {
  message: string
}

export class Foreach extends Base {
  field: Field
  ignore_missing?: boolean
  processor: ProcessorContainer
}

export class Grok extends Base {
  field: Field
  ignore_missing?: boolean
  pattern_definitions: Dictionary<string, string>
  patterns: string[]
  trace_match?: boolean
}

export class Gsub extends Base {
  field: Field
  ignore_missing?: boolean
  pattern: string
  replacement: string
  target_field?: Field
}

export class Inference extends Base {
  model_id: Id
  target_field: Field
  field_map?: Dictionary<Field, UserDefinedValue>
  inference_config?: InferenceConfig
}

export class InferenceConfig {
  regression?: InferenceConfigRegression
}

export class InferenceConfigRegression {
  results_field: string
}

export class Join extends Base {
  field: Field
  separator: string
  target_field?: Field
}

export class Json extends Base {
  add_to_root: boolean
  field: Field
  target_field: Field
}

export class KeyValue extends Base {
  exclude_keys?: string[]
  field: Field
  field_split: string
  ignore_missing?: boolean
  include_keys?: string[]
  prefix?: string
  strip_brackets?: boolean
  target_field?: Field
  trim_key?: string
  trim_value?: string
  value_split: string
}

export class Lowercase extends Base {
  field: Field
  ignore_missing?: boolean
  target_field?: Field
}

export class Pipeline extends Base {
  name: Name
}

export class Remove extends Base {
  field: Fields
  ignore_missing?: boolean
}

export class Rename extends Base {
  field: Field
  ignore_missing?: boolean
  target_field: Field
}

export class Script extends Base {
  id?: Id
  lang?: string
  params?: Dictionary<string, UserDefinedValue>
  source: string
}

export class Set extends Base {
  field: Field
  override?: boolean
  value: UserDefinedValue
}

export class SetSecurityUser extends Base {
  field: Field
  properties?: string[]
}

export enum ShapeType {
  geo_shape = 0,
  shape = 1
}

export class Sort extends Base {
  field: Field
  order: SortOrder
  target_field: Field
}

export class Split extends Base {
  field: Field
  ignore_missing?: boolean
  preserve_trailing?: boolean
  separator: string
  target_field?: Field
}

export class Trim extends Base {
  field: Field
  ignore_missing?: boolean
  target_field?: Field
}

export class Uppercase extends Base {
  field: Field
  ignore_missing?: boolean
  target_field?: Field
}

export class UrlDecode extends Base {
  field: Field
  ignore_missing?: boolean
  target_field?: Field
}
