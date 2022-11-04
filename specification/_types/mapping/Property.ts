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
import { integer } from '@_types/Numeric'
import {
  AggregateMetricDoubleProperty,
  DenseVectorProperty,
  FlattenedProperty,
  NestedProperty,
  ObjectProperty
} from './complex'
import {
  BinaryProperty,
  BooleanProperty,
  ByteNumberProperty,
  DateNanosProperty,
  DateProperty,
  DoubleNumberProperty,
  DynamicProperty,
  FloatNumberProperty,
  HalfFloatNumberProperty,
  IntegerNumberProperty,
  JoinProperty,
  KeywordProperty,
  LongNumberProperty,
  MatchOnlyTextProperty,
  PercolatorProperty,
  RankFeatureProperty,
  RankFeaturesProperty,
  ScaledFloatNumberProperty,
  SearchAsYouTypeProperty,
  ShortNumberProperty,
  TextProperty,
  UnsignedLongNumberProperty,
  VersionProperty,
  WildcardProperty
} from './core'
import { DynamicMapping } from './dynamic-template'
import {
  CompletionProperty,
  ConstantKeywordProperty,
  FieldAliasProperty,
  HistogramProperty,
  IpProperty,
  Murmur3HashProperty,
  TokenCountProperty
} from './specialized'
import {
  DateRangeProperty,
  DoubleRangeProperty,
  FloatRangeProperty,
  IntegerRangeProperty,
  IpRangeProperty,
  LongRangeProperty
} from '@_types/mapping/range'
import {
  GeoPointProperty,
  GeoShapeProperty,
  PointProperty,
  ShapeProperty
} from '@_types/mapping/geo'

export class PropertyBase {
  /**
   * Metadata about the field.
   * @doc_id mapping-meta-field
   */
  meta?: Dictionary<string, string>
  properties?: Dictionary<PropertyName, Property>
  ignore_above?: integer
  dynamic?: DynamicMapping
  fields?: Dictionary<PropertyName, Property>
}

/**
 * @variants internal tag='type' default='object'
 * @non_exhaustive
 */
export type Property =
  // common
  | BinaryProperty
  | BooleanProperty
  | DynamicProperty
  | JoinProperty
  | KeywordProperty
  | MatchOnlyTextProperty
  | PercolatorProperty
  | RankFeatureProperty
  | RankFeaturesProperty
  | SearchAsYouTypeProperty
  | TextProperty
  | VersionProperty
  | WildcardProperty

  // dates
  | DateNanosProperty
  | DateProperty

  // complex
  | AggregateMetricDoubleProperty
  | DenseVectorProperty
  | FlattenedProperty
  | NestedProperty
  | ObjectProperty

  // structured
  | CompletionProperty
  | ConstantKeywordProperty
  | FieldAliasProperty
  | HistogramProperty
  | IpProperty
  | Murmur3HashProperty
  | TokenCountProperty

  // spatial
  | GeoPointProperty
  | GeoShapeProperty
  | PointProperty
  | ShapeProperty

  // numbers
  | ByteNumberProperty
  | DoubleNumberProperty
  | FloatNumberProperty
  | HalfFloatNumberProperty
  | IntegerNumberProperty
  | LongNumberProperty
  | ScaledFloatNumberProperty
  | ShortNumberProperty
  | UnsignedLongNumberProperty

  // RangeProperty
  | DateRangeProperty
  | DoubleRangeProperty
  | FloatRangeProperty
  | IntegerRangeProperty
  | IpRangeProperty
  | LongRangeProperty

export enum FieldType {
  none,
  geo_point,
  geo_shape,
  ip,
  binary,
  keyword,
  text,
  search_as_you_type,
  date,
  date_nanos,
  boolean,
  completion,
  nested,
  object,
  murmur3,
  token_count,
  percolator,
  integer,
  long,
  short,
  byte,
  float,
  half_float,
  scaled_float,
  double,
  integer_range,
  float_range,
  long_range,
  double_range,
  date_range,
  ip_range,
  alias,
  join,
  rank_feature,
  rank_features,
  flattened,
  shape,
  histogram,
  constant_keyword,
  aggregate_metric_double,
  dense_vector,
  match_only_text
}

export class PropertyWithClrOrigin {}
