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

import { SortOrder } from '@_types/sort'
import { Dictionary } from '@spec_utils/Dictionary'
import { UserDefinedValue } from '@spec_utils/UserDefinedValue'
import { Field, Fields, Id, Name } from '@_types/common'
import { GeoShapeRelation } from '@_types/Geo'
import { double, integer, long } from '@_types/Numeric'
import { Script } from '@_types/Scripting'

/**
 * @variants container open
 */
export class ProcessorContainer {
  attachment?: AttachmentProcessor
  append?: AppendProcessor
  csv?: CsvProcessor
  convert?: ConvertProcessor
  date?: DateProcessor
  date_index_name?: DateIndexNameProcessor
  dot_expander?: DotExpanderProcessor
  enrich?: EnrichProcessor
  fail?: FailProcessor
  foreach?: ForeachProcessor
  json?: JsonProcessor
  user_agent?: UserAgentProcessor
  kv?: KeyValueProcessor
  geoip?: GeoIpProcessor
  grok?: GrokProcessor
  gsub?: GsubProcessor
  join?: JoinProcessor
  lowercase?: LowercaseProcessor
  remove?: RemoveProcessor
  rename?: RenameProcessor
  script?: Script
  set?: SetProcessor
  sort?: SortProcessor
  split?: SplitProcessor
  trim?: TrimProcessor
  uppercase?: UppercaseProcessor
  urldecode?: UrlDecodeProcessor
  bytes?: BytesProcessor
  dissect?: DissectProcessor
  set_security_user?: SetSecurityUserProcessor
  pipeline?: PipelineProcessor
  drop?: DropProcessor
  circle?: CircleProcessor
  inference?: InferenceProcessor
}

export class ProcessorBase {
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

export class AppendProcessor extends ProcessorBase {
  field: Field
  value: UserDefinedValue[]
  allow_duplicates?: boolean
}

export class AttachmentProcessor extends ProcessorBase {
  field: Field
  ignore_missing?: boolean
  indexed_chars?: long
  indexed_chars_field?: Field
  properties?: string[]
  target_field?: Field
  resource_name?: string
}

export class GeoIpProcessor extends ProcessorBase {
  database_file: string
  field: Field
  first_only: boolean
  ignore_missing: boolean
  properties: string[]
  target_field: Field
}

export class UserAgentProcessor extends ProcessorBase {
  field: Field
  ignore_missing: boolean
  options: UserAgentProperty[]
  regex_file: string
  target_field: Field
}

export class BytesProcessor extends ProcessorBase {
  field: Field
  ignore_missing?: boolean
  target_field?: Field
}

export class CircleProcessor extends ProcessorBase {
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

export class ConvertProcessor extends ProcessorBase {
  field: Field
  ignore_missing?: boolean
  target_field: Field
  type: ConvertType
}

export class CsvProcessor extends ProcessorBase {
  empty_value: UserDefinedValue
  description?: string
  field: Field
  ignore_missing?: boolean
  quote?: string
  separator?: string
  target_fields: Fields
  trim: boolean
}

export class DateIndexNameProcessor extends ProcessorBase {
  date_formats: string[]
  /**
   * How to round the date when formatting the date into the index name. Valid values are:
   * `y` (year), `M` (month), `w` (week), `d` (day), `h` (hour), `m` (minute) and `s` (second).
   * Supports template snippets.
   */
  date_rounding: string
  field: Field
  index_name_format: string
  index_name_prefix: string
  locale: string
  timezone: string
}

export class DateProcessor extends ProcessorBase {
  field: Field
  formats: string[]
  locale?: string
  target_field?: Field
  timezone?: string
}

export class DissectProcessor extends ProcessorBase {
  append_separator: string
  field: Field
  ignore_missing: boolean
  pattern: string
}

export class DotExpanderProcessor extends ProcessorBase {
  field: Field
  path?: string
}

export class DropProcessor extends ProcessorBase {}

export class EnrichProcessor extends ProcessorBase {
  field: Field
  ignore_missing?: boolean
  max_matches?: integer
  override?: boolean
  policy_name: string
  shape_relation?: GeoShapeRelation
  target_field: Field
}

export class FailProcessor extends ProcessorBase {
  message: string
}

export class ForeachProcessor extends ProcessorBase {
  field: Field
  ignore_missing?: boolean
  processor: ProcessorContainer
}

export class GrokProcessor extends ProcessorBase {
  field: Field
  ignore_missing?: boolean
  pattern_definitions: Dictionary<string, string>
  patterns: string[]
  trace_match?: boolean
}

export class GsubProcessor extends ProcessorBase {
  field: Field
  ignore_missing?: boolean
  pattern: string
  replacement: string
  target_field?: Field
}

export class InferenceProcessor extends ProcessorBase {
  model_id: Id
  target_field: Field
  field_map?: Dictionary<Field, UserDefinedValue>
  inference_config?: InferenceConfig
}

/**
 * @variants container
 */
export class InferenceConfig {
  regression?: InferenceConfigRegression
  classification?: InferenceConfigClassification
}

export class InferenceConfigRegression {
  results_field?: Field
  num_top_feature_importance_values?: integer
}

export class InferenceConfigClassification {
  num_top_classes?: integer
  num_top_feature_importance_values?: integer
  results_field?: Field
  top_classes_results_field?: Field
  prediction_field_type?: string
}

export class JoinProcessor extends ProcessorBase {
  field: Field
  separator: string
  target_field?: Field
}

export class JsonProcessor extends ProcessorBase {
  add_to_root: boolean
  field: Field
  target_field: Field
}

export class KeyValueProcessor extends ProcessorBase {
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

export class LowercaseProcessor extends ProcessorBase {
  field: Field
  ignore_missing?: boolean
  target_field?: Field
}

export class PipelineProcessor extends ProcessorBase {
  name: Name
}

export class RemoveProcessor extends ProcessorBase {
  field: Fields
  ignore_missing?: boolean
}

export class RenameProcessor extends ProcessorBase {
  field: Field
  ignore_missing?: boolean
  target_field: Field
}

export class ScriptProcessor extends ProcessorBase {
  id?: Id
  lang?: string
  params?: Dictionary<string, UserDefinedValue>
  source: string
}

export class SetProcessor extends ProcessorBase {
  field: Field
  override?: boolean
  value: UserDefinedValue
}

export class SetSecurityUserProcessor extends ProcessorBase {
  field: Field
  properties?: string[]
}

export enum ShapeType {
  geo_shape = 0,
  shape = 1
}

export class SortProcessor extends ProcessorBase {
  field: Field
  order: SortOrder
  target_field: Field
}

export class SplitProcessor extends ProcessorBase {
  field: Field
  ignore_missing?: boolean
  preserve_trailing?: boolean
  separator: string
  target_field?: Field
}

export class TrimProcessor extends ProcessorBase {
  field: Field
  ignore_missing?: boolean
  target_field?: Field
}

export class UppercaseProcessor extends ProcessorBase {
  field: Field
  ignore_missing?: boolean
  target_field?: Field
}

export class UrlDecodeProcessor extends ProcessorBase {
  field: Field
  ignore_missing?: boolean
  target_field?: Field
}
