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

import { FielddataFrequencyFilter } from '@indices/_types/FielddataFrequencyFilter'
import { NumericFielddata } from '@indices/_types/NumericFielddata'
import { Dictionary } from '@spec_utils/Dictionary'
import { Fields, PropertyName, RelationName } from '@_types/common'
import {
  byte,
  double,
  float,
  integer,
  long,
  short,
  ulong
} from '@_types/Numeric'
import { DateString } from '@_types/Time'
import { NestedProperty, ObjectProperty } from './complex'
import {
  GeoPointProperty,
  GeoShapeProperty,
  PointProperty,
  ShapeProperty
} from './geo'
import { Property, PropertyBase } from './Property'
import { RangeProperty } from './range'
import {
  CompletionProperty,
  IpProperty,
  Murmur3HashProperty,
  TokenCountProperty
} from './specialized'
import { TermVectorOption } from './TermVectorOption'
import { Script } from '@_types/Scripting'

export class CorePropertyBase extends PropertyBase {
  copy_to?: Fields
  similarity?: string
  store?: boolean
}

export type CoreProperty =
  | ObjectProperty
  | NestedProperty
  | SearchAsYouTypeProperty
  | TextProperty
  | DocValuesProperty
  | MatchOnlyTextProperty

export class DocValuesPropertyBase extends CorePropertyBase {
  doc_values?: boolean
}

export type DocValuesProperty =
  | BinaryProperty
  | BooleanProperty
  | DateProperty
  | DateNanosProperty
  | KeywordProperty
  | NumberProperty
  | RangeProperty
  | GeoPointProperty
  | GeoShapeProperty
  | CompletionProperty
  | IpProperty
  | Murmur3HashProperty
  | ShapeProperty
  | TokenCountProperty
  | VersionProperty
  | WildcardProperty
  | PointProperty

export class BinaryProperty extends DocValuesPropertyBase {
  type: 'binary'
}

export class BooleanProperty extends DocValuesPropertyBase {
  boost?: double
  fielddata?: NumericFielddata
  index?: boolean
  null_value?: boolean
  type: 'boolean'
}

export class DateProperty extends DocValuesPropertyBase {
  boost?: double
  fielddata?: NumericFielddata
  format?: string
  ignore_malformed?: boolean
  index?: boolean
  null_value?: DateString
  precision_step?: integer
  locale?: string
  type: 'date'
}

export class DateNanosProperty extends DocValuesPropertyBase {
  boost?: double
  format?: string
  ignore_malformed?: boolean
  index?: boolean
  null_value?: DateString
  precision_step?: integer
  type: 'date_nanos'
}

export class JoinProperty extends PropertyBase {
  relations?: Dictionary<RelationName, RelationName | RelationName[]>
  type: 'join'
}

export class KeywordProperty extends DocValuesPropertyBase {
  boost?: double
  eager_global_ordinals?: boolean
  index?: boolean
  index_options?: IndexOptions
  normalizer?: string
  norms?: boolean
  null_value?: string
  split_queries_on_whitespace?: boolean
  type: 'keyword'
}

export class NumberPropertyBase extends DocValuesPropertyBase {
  index?: boolean
  ignore_malformed?: boolean
}

export enum OnScriptError {
  fail,
  continue
}

export class StandardNumberProperty extends NumberPropertyBase {
  coerce?: boolean
  script?: Script
  on_script_error?: OnScriptError
}

export class FloatNumberProperty extends StandardNumberProperty {
  type: 'float'
  null_value?: float
}

export class HalfFloatNumberProperty extends StandardNumberProperty {
  type: 'half_float'
  null_value?: float
}

export class DoubleNumberProperty extends StandardNumberProperty {
  type: 'double'
  null_value?: double
}

export class IntegerNumberProperty extends StandardNumberProperty {
  type: 'integer'
  null_value?: integer
}

export class LongNumberProperty extends StandardNumberProperty {
  type: 'long'
  null_value?: long
}

export class ShortNumberProperty extends StandardNumberProperty {
  type: 'short'
  null_value?: short
}

export class ByteNumberProperty extends StandardNumberProperty {
  type: 'byte'
  null_value?: byte
}

export class UnsignedLongNumberProperty extends NumberPropertyBase {
  type: 'unsigned_long'
  null_value?: ulong
}

export class ScaledFloatNumberProperty extends NumberPropertyBase {
  type: 'scaled_float'
  coerce?: boolean
  null_value?: double
  scaling_factor?: double
}

export type NumberProperty =
  | FloatNumberProperty
  | HalfFloatNumberProperty
  | DoubleNumberProperty
  | IntegerNumberProperty
  | LongNumberProperty
  | ShortNumberProperty
  | ByteNumberProperty
  | UnsignedLongNumberProperty
  | ScaledFloatNumberProperty

export class PercolatorProperty extends PropertyBase {
  type: 'percolator'
}

export class RankFeatureProperty extends PropertyBase {
  positive_score_impact?: boolean
  type: 'rank_feature'
}

export class RankFeaturesProperty extends PropertyBase {
  type: 'rank_features'
}

export class SearchAsYouTypeProperty extends CorePropertyBase {
  analyzer?: string
  index?: boolean
  index_options?: IndexOptions
  max_shingle_size?: integer
  norms?: boolean
  search_analyzer?: string
  search_quote_analyzer?: string
  term_vector?: TermVectorOption
  type: 'search_as_you_type'
}

/**
 * A variant of text that trades scoring and efficiency of positional queries for space efficiency. This field
 * effectively stores data the same way as a text field that only indexes documents (index_options: docs) and
 * disables norms (norms: false). Term queries perform as fast if not faster as on text fields, however queries
 * that need positions such as the match_phrase query perform slower as they need to look at the _source document
 * to verify whether a phrase matches. All queries return constant scores that are equal to 1.0.
 */
export class MatchOnlyTextProperty {
  type: 'match_only_text'
  /**
   * Multi-fields allow the same string value to be indexed in multiple ways for different purposes, such as one
   * field for search and a multi-field for sorting and aggregations, or the same string value analyzed by different analyzers.
   * @doc_id multi-fields
   */
  fields?: Dictionary<PropertyName, Property>
  /**
   * Metadata about the field.
   * @doc_id mapping-meta-field
   */
  meta?: Dictionary<string, string>
  /**
   * Allows you to copy the values of multiple fields into a group
   * field, which can then be queried as a single field.
   */
  copy_to?: Fields
}

export enum IndexOptions {
  docs,
  freqs,
  positions,
  offsets
}

export class TextIndexPrefixes {
  max_chars: integer
  min_chars: integer
}

export class TextProperty extends CorePropertyBase {
  analyzer?: string
  boost?: double
  eager_global_ordinals?: boolean
  fielddata?: boolean
  fielddata_frequency_filter?: FielddataFrequencyFilter
  index?: boolean
  index_options?: IndexOptions
  index_phrases?: boolean
  index_prefixes?: TextIndexPrefixes
  norms?: boolean
  position_increment_gap?: integer
  search_analyzer?: string
  search_quote_analyzer?: string
  term_vector?: TermVectorOption
  type: 'text'
}

export class VersionProperty extends DocValuesPropertyBase {
  type: 'version'
}

export class WildcardProperty extends DocValuesPropertyBase {
  type: 'wildcard'
  /** @since 7.15.0  */
  null_value?: string
}
