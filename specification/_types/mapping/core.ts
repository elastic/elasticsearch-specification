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
import { Fields, RelationName } from '@_types/common'
import { double, integer } from '@_types/Numeric'
import { DateString } from '@_types/Time'
import { NestedProperty, ObjectProperty } from './complex'
import { GeoPointProperty, GeoShapeProperty, PointProperty } from './geo'
import { PropertyBase } from './Property'
import { RangeProperty } from './range'
import {
  CompletionProperty,
  GenericProperty,
  IpProperty,
  Murmur3HashProperty,
  ShapeProperty,
  TokenCountProperty
} from './specialized'
import { TermVectorOption } from './TermVectorOption'

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
  | GenericProperty
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

export class NumberProperty extends DocValuesPropertyBase {
  boost?: double
  coerce?: boolean
  fielddata?: NumericFielddata
  ignore_malformed?: boolean
  index?: boolean
  null_value?: double
  scaling_factor?: double
  type: NumberType
}

export enum NumberType {
  float = 0,
  half_float = 1,
  scaled_float = 2,
  double = 3,
  integer = 4,
  long = 5,
  short = 6,
  byte = 7,
  unsigned_long = 8
}

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

export enum IndexOptions {
  docs = 0,
  freqs = 1,
  positions = 2,
  offsets = 3
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
