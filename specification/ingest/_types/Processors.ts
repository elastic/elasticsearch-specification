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
 * @variants container
 * @non_exhaustive
 */
export class ProcessorContainer {
  /**
   * The attachment processor lets Elasticsearch extract file attachments in common formats (such as PPT, XLS, and PDF) by using the Apache text extraction library Tika.
   * @doc_id attachment
   */
  attachment?: AttachmentProcessor
  /**
   * Appends one or more values to an existing array if the field already exists and it is an array.
   * Converts a scalar to an array and appends one or more values to it if the field exists and it is a scalar.
   * Creates an array containing the provided values if the field doesn’t exist.
   * Accepts a single value or an array of values.
   * @doc_id append-processor
   */
  append?: AppendProcessor
  /**
   * Extracts fields from CSV line out of a single text field within a document.
   * Any empty field in CSV will be skipped.
   * @doc_id csv-processor
   */
  csv?: CsvProcessor
  /**
   * Converts a field in the currently ingested document to a different type, such as converting a string to an integer.
   * If the field value is an array, all members will be converted.
   * @doc_id convert-processor
   */
  convert?: ConvertProcessor
  /**
   * Parses dates from fields, and then uses the date or timestamp as the timestamp for the document.
   * @doc_id data-processor
   */
  date?: DateProcessor
  /**
   * The purpose of this processor is to point documents to the right time based index based on a date or timestamp field in a document by using the date math index name support.
   * @doc_id date-index-name-processor
   */
  date_index_name?: DateIndexNameProcessor
  /**
   * Expands a field with dots into an object field.
   * This processor allows fields with dots in the name to be accessible by other processors in the pipeline.
   * Otherwise these fields can’t be accessed by any processor.
   * @doc_id dot-expand-processor
   */
  dot_expander?: DotExpanderProcessor
  /**
   * The `enrich` processor can enrich documents with data from another index.
   * @doc_id enrich-processor
   */
  enrich?: EnrichProcessor
  /**
   * Raises an exception.
   * This is useful for when you expect a pipeline to fail and want to relay a specific message to the requester.
   * @doc_id fail-processor
   */
  fail?: FailProcessor
  /**
   * Runs an ingest processor on each element of an array or object.
   * @doc_id foreach-processor
   */
  foreach?: ForeachProcessor
  /**
   * Converts a JSON string into a structured JSON object.
   * @doc_id json-processor
   */
  json?: JsonProcessor
  /**
   * The `user_agent` processor extracts details from the user agent string a browser sends with its web requests. 
   * This processor adds this information by default under the `user_agent` field.
   * @doc_id user-agent-processor
   */
  user_agent?: UserAgentProcessor
  /**
   * This processor helps automatically parse messages (or specific event fields) which are of the `foo=bar` variety.
   * @doc_id kv-processor
   */
  kv?: KeyValueProcessor
  /**
   * The `geoip` processor adds information about the geographical location of an IPv4 or IPv6 address.
   * @doc_id geoip-processor
   */
  geoip?: GeoIpProcessor
  /**
   * Extracts structured fields out of a single text field within a document.
   * You choose which field to extract matched fields from, as well as the grok pattern you expect will match.
   * A grok pattern is like a regular expression that supports aliased expressions that can be reused.
   * @doc_id grok-processor
   */
  grok?: GrokProcessor
  /**
   * Converts a string field by applying a regular expression and a replacement.
   * If the field is an array of string, all members of the array will be converted.
   * If any non-string values are encountered, the processor will throw an exception.
   * @doc_id gsub-processor
   */
  gsub?: GsubProcessor
  /**
   * Joins each element of an array into a single string using a separator character between each element.
   * Throws an error when the field is not an array.
   * @doc_id join-processor
   */
  join?: JoinProcessor
  /**
   * Converts a string to its lowercase equivalent.
   * If the field is an array of strings, all members of the array will be converted.
   * @doc_id lowercase-processor
   */
  lowercase?: LowercaseProcessor
  /**
   * Removes existing fields.
   * If one field doesn’t exist, an exception will be thrown.
   * @doc_id remove-processor
   */
  remove?: RemoveProcessor
  /**
   * Renames an existing field.
   * If the field doesn’t exist or the new name is already used, an exception will be thrown.
   * @doc_id rename-processor
   */
  rename?: RenameProcessor
  /**
   * Runs an inline or stored script on incoming documents.
   * The script runs in the `ingest` context.
   * @doc_id script-processor
   */
  script?: Script
  /**
   * Sets one field and associates it with the specified value.
   * If the field already exists, its value will be replaced with the provided one.
   * @doc_id set-processor
   */
  set?: SetProcessor
  /**
   * Sorts the elements of an array ascending or descending.
   * Homogeneous arrays of numbers will be sorted numerically, while arrays of strings or heterogeneous arrays of strings + numbers will be sorted lexicographically.
   * Throws an error when the field is not an array.
   * @doc_id sort-processor
   */
  sort?: SortProcessor
  /**
   * Splits a field into an array using a separator character.
   * Only works on string fields.
   * @doc_id split-processor
   */
  split?: SplitProcessor
  /**
   * Trims whitespace from field.
   * If the field is an array of strings, all members of the array will be trimmed.
   * This only works on leading and trailing whitespace.
   * @doc_id trim-processor
   */
  trim?: TrimProcessor
  /**
   * Converts a string to its uppercase equivalent.
   * If the field is an array of strings, all members of the array will be converted.
   * @doc_id uppercase-processor
   */
  uppercase?: UppercaseProcessor
  /**
   * URL-decodes a string.
   * If the field is an array of strings, all members of the array will be decoded.
   * @doc_id urldecode-processor
   */
  urldecode?: UrlDecodeProcessor
  /**
   * Converts a human readable byte value (e.g. 1kb) to its value in bytes (e.g. 1024).
   * If the field is an array of strings, all members of the array will be converted.
   * Supported human readable units are "b", "kb", "mb", "gb", "tb", "pb" case insensitive.
   * An error will occur if the field is not a supported format or resultant value exceeds 2^63.
   * @doc_id bytes-processor
   */
  bytes?: BytesProcessor
  /**
   * Similar to the Grok Processor, dissect also extracts structured fields out of a single text field within a document.
   * However unlike the Grok Processor, dissect does not use Regular Expressions.
   * This allows dissect’s syntax to be simple and for some cases faster than the Grok Processor.
   * Dissect matches a single text field against a defined pattern.
   * @doc_id dissect-processor
   */
  dissect?: DissectProcessor
  /**
   * Sets user-related details (such as `username`, `roles`, `email`, `full_name`, `metadata`, `api_key`, `realm` and `authentication_type`) from the current authenticated user to the current document by pre-processing the ingest.
   * @doc_id ingest-node-set-security-user-processor
   */
  set_security_user?: SetSecurityUserProcessor
  /**
   * Executes another pipeline.
   * @doc_id pipeline-processor
   */
  pipeline?: PipelineProcessor
  /**
   * Drops the document without raising any errors.
   * This is useful to prevent the document from getting indexed based on some condition.
   * @doc_id drop-processor
   */
  drop?: DropProcessor
  /**
   * Converts circle definitions of shapes to regular polygons which approximate them.
   * @doc_id ingest-circle-processor
   */
  circle?: CircleProcessor
  /**
   * Uses a pre-trained data frame analytics model or a model deployed for natural language processing tasks to infer against the data that is being ingested in the pipeline.
   * @doc_id inference-processor
   */
  inference?: InferenceProcessor
}

export class ProcessorBase {
  /**
   * Description of the processor.
   * Useful for describing the purpose of the processor or its configuration.
   */
  description?: string
  /**
   * Conditionally execute the processor.
   */
  if?: string
  /**
   * Ignore failures for the processor.
   */
  ignore_failure?: boolean
  /**
   * Handle failures for the processor.
   */
  on_failure?: ProcessorContainer[]
  /**
   * Identifier for the processor.
   * Useful for debugging and metrics.
   */
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
  /**
   * The field to be appended to.
   * Supports template snippets.
   */
  field: Field
  /**
   * The value to be appended. Supports template snippets.
   */
  value: UserDefinedValue[]
  /**
   * If `false`, the processor does not append values already present in the field.
   * @server_default true
   */
  allow_duplicates?: boolean
}

export class AttachmentProcessor extends ProcessorBase {
  /**
   * The field to get the base64 encoded field from.
   */
  field: Field
  /**
   * If `true` and field does not exist, the processor quietly exits without modifying the document.
   * @server_default false
   */
  ignore_missing?: boolean
  /**
   * The number of chars being used for extraction to prevent huge fields.
   * Use `-1` for no limit.
   * @server_default 100000
   */
  indexed_chars?: long
  /**
   * Field name from which you can overwrite the number of chars being used for extraction.
   * @server_default null
   */
  indexed_chars_field?: Field
  /**
   * Array of properties to select to be stored.
   * Can be `content`, `title`, `name`, `author`, `keywords`, `date`, `content_type`, `content_length`, `language`.
   */
  properties?: string[]
  /**
   * The field that will hold the attachment information.
   * @server_default attachment
   */
  target_field?: Field
  /**
   * Field containing the name of the resource to decode.
   * If specified, the processor passes this resource name to the underlying Tika library to enable Resource Name Based Detection.
   */
  resource_name?: string
}

export class GeoIpProcessor extends ProcessorBase {
  database_file?: string
  field: Field
  first_only?: boolean
  ignore_missing?: boolean
  properties?: string[]
  target_field?: Field
}

export class UserAgentProcessor extends ProcessorBase {
  field: Field
  ignore_missing?: boolean
  options?: UserAgentProperty[]
  regex_file?: string
  target_field?: Field
}

export class BytesProcessor extends ProcessorBase {
  field: Field
  ignore_missing?: boolean
  target_field?: Field
}

export class CircleProcessor extends ProcessorBase {
  error_distance: double
  field: Field
  ignore_missing?: boolean
  shape_type: ShapeType
  target_field?: Field
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
  target_field?: Field
  type: ConvertType
}

export class CsvProcessor extends ProcessorBase {
  empty_value?: UserDefinedValue
  field: Field
  ignore_missing?: boolean
  quote?: string
  separator?: string
  target_fields: Fields
  trim?: boolean
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
  index_name_format?: string
  index_name_prefix?: string
  locale?: string
  timezone?: string
}

export class DateProcessor extends ProcessorBase {
  field: Field
  formats: string[]
  locale?: string
  target_field?: Field
  timezone?: string
}

export class DissectProcessor extends ProcessorBase {
  append_separator?: string
  field: Field
  ignore_missing?: boolean
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
  pattern_definitions?: Dictionary<string, string>
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
  target_field?: Field
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
  add_to_root?: boolean
  add_to_root_conflict_strategy?: JsonProcessorConflictStrategy
  allow_duplicate_keys?: boolean
  field: Field
  target_field?: Field
}

export enum JsonProcessorConflictStrategy {
  /** Root fields that conflict with fields from the parsed JSON will be overridden. */
  replace,
  /** Conflicting fields will be merged. */
  merge
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
  ignore_missing_pipeline?: boolean
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
  source?: string
}

export class SetProcessor extends ProcessorBase {
  copy_from?: Field
  field: Field
  ignore_empty_value?: boolean
  media_type?: string
  override?: boolean
  value?: UserDefinedValue
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
  order?: SortOrder
  target_field?: Field
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
