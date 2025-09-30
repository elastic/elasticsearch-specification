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

import {
  Fields,
  FieldValue,
  Id,
  PropertyName,
  RelationName
} from '@_types/common'
import {
  byte,
  double,
  float,
  integer,
  long,
  short,
  ulong
} from '@_types/Numeric'
import { Script } from '@_types/Scripting'
import { DateTime } from '@_types/Time'
import { FielddataFrequencyFilter } from '@indices/_types/FielddataFrequencyFilter'
import { NumericFielddata } from '@indices/_types/NumericFielddata'
import { Dictionary } from '@spec_utils/Dictionary'
import { ChunkingSettings } from './ChunkingSettings'
import { Property, PropertyBase } from './Property'
import { SparseVectorIndexOptions } from './SparseVectorIndexOptions'
import { TermVectorOption } from './TermVectorOption'
import { TimeSeriesMetricType } from './TimeSeriesMetricType'

export class CorePropertyBase extends PropertyBase {
  copy_to?: Fields
  store?: boolean
}

export class DocValuesPropertyBase extends CorePropertyBase {
  doc_values?: boolean
}

export class BinaryProperty extends DocValuesPropertyBase {
  type: 'binary'
}

export class BooleanProperty extends DocValuesPropertyBase {
  boost?: double
  fielddata?: NumericFielddata
  index?: boolean
  null_value?: boolean
  ignore_malformed?: boolean
  script?: Script
  on_script_error?: OnScriptError
  /**
   * For internal use by Elastic only. Marks the field as a time series dimension. Defaults to false.
   * @availability stack stability=experimental
   * @availability serverless stability=experimental
   */
  time_series_dimension?: boolean
  type: 'boolean'
}

export class DateProperty extends DocValuesPropertyBase {
  boost?: double
  fielddata?: NumericFielddata
  format?: string
  ignore_malformed?: boolean
  index?: boolean
  script?: Script
  on_script_error?: OnScriptError
  null_value?: DateTime
  precision_step?: integer
  locale?: string
  type: 'date'
}

export class DateNanosProperty extends DocValuesPropertyBase {
  boost?: double
  format?: string
  ignore_malformed?: boolean
  index?: boolean
  script?: Script
  on_script_error?: OnScriptError
  null_value?: DateTime
  precision_step?: integer
  type: 'date_nanos'
}

export class JoinProperty extends PropertyBase {
  relations?: Dictionary<RelationName, RelationName | RelationName[]>
  eager_global_ordinals?: boolean
  type: 'join'
}

export class KeywordProperty extends DocValuesPropertyBase {
  boost?: double
  eager_global_ordinals?: boolean
  index?: boolean
  index_options?: IndexOptions
  script?: Script
  on_script_error?: OnScriptError
  normalizer?: string
  norms?: boolean
  null_value?: string
  similarity?: string | null
  split_queries_on_whitespace?: boolean
  /**
   * For internal use by Elastic only. Marks the field as a time series dimension. Defaults to false.
   * @availability stack stability=experimental
   * @availability serverless stability=experimental
   */
  time_series_dimension?: boolean
  type: 'keyword'
}

export class NumberPropertyBase extends DocValuesPropertyBase {
  boost?: double
  coerce?: boolean
  ignore_malformed?: boolean
  index?: boolean
  on_script_error?: OnScriptError
  script?: Script
  /**
   * For internal use by Elastic only. Marks the field as a time series dimension. Defaults to false.
   * @availability stack stability=experimental
   * @availability serverless stability=experimental
   */
  time_series_metric?: TimeSeriesMetricType
  /**
   * For internal use by Elastic only. Marks the field as a time series dimension. Defaults to false.
   * @server_default false
   * @availability stack stability=experimental
   * @availability serverless stability=experimental
   */
  time_series_dimension?: boolean
}

export enum OnScriptError {
  fail,
  continue
}

export class FloatNumberProperty extends NumberPropertyBase {
  type: 'float'
  null_value?: float
}

export class HalfFloatNumberProperty extends NumberPropertyBase {
  type: 'half_float'
  null_value?: float
}

export class DoubleNumberProperty extends NumberPropertyBase {
  type: 'double'
  null_value?: double
}

export class IntegerNumberProperty extends NumberPropertyBase {
  type: 'integer'
  null_value?: integer
}

export class LongNumberProperty extends NumberPropertyBase {
  type: 'long'
  null_value?: long
}

export class ShortNumberProperty extends NumberPropertyBase {
  type: 'short'
  null_value?: short
}

export class ByteNumberProperty extends NumberPropertyBase {
  type: 'byte'
  null_value?: byte
}

export class UnsignedLongNumberProperty extends NumberPropertyBase {
  type: 'unsigned_long'
  null_value?: ulong
}

export class ScaledFloatNumberProperty extends NumberPropertyBase {
  type: 'scaled_float'
  null_value?: double
  scaling_factor?: double
}

export class PercolatorProperty extends PropertyBase {
  type: 'percolator'
}

export class RankFeatureProperty extends PropertyBase {
  positive_score_impact?: boolean
  type: 'rank_feature'
}

export class RankFeaturesProperty extends PropertyBase {
  positive_score_impact?: boolean
  type: 'rank_features'
}

/**
 * Technical preview
 */
export class RankVectorProperty extends PropertyBase {
  type: 'rank_vectors'
  element_type?: RankVectorElementType
  dims?: integer
}

export class SparseVectorProperty extends PropertyBase {
  store?: boolean
  type: 'sparse_vector'
  /**
   * Additional index options for the sparse vector field that controls the
   * token pruning behavior of the sparse vector field.
   * @availability stack since=8.19.0
   * @availability serverless
   */
  index_options?: SparseVectorIndexOptions
}

export class SemanticTextProperty {
  type: 'semantic_text'
  meta?: Dictionary<string, string>
  /**
   * Inference endpoint that will be used to generate embeddings for the field.
   * This parameter cannot be updated. Use the Create inference API to create the endpoint.
   * If `search_inference_id` is specified, the inference endpoint will only be used at index time.
   * @server_default .elser-2-elasticsearch
   */
  inference_id?: Id
  /**
   * Inference endpoint that will be used to generate embeddings at query time.
   * You can update this parameter by using the Update mapping API. Use the Create inference API to create the endpoint.
   * If not specified, the inference endpoint defined by inference_id will be used at both index and query time.
   */
  search_inference_id?: Id

  /**
   * Settings for chunking text into smaller passages. If specified, these will override the
   * chunking settings sent in the inference endpoint associated with inference_id. If chunking settings are updated,
   * they will not be applied to existing documents until they are reindexed.
   */
  chunking_settings?: ChunkingSettings
  /**
   * Multi-fields allow the same string value to be indexed in multiple ways for different purposes, such as one
   * field for search and a multi-field for sorting and aggregations, or the same string value analyzed by different analyzers.
   * @doc_id multi-fields
   */
  fields?: Dictionary<PropertyName, Property>
}

export class SearchAsYouTypeProperty extends CorePropertyBase {
  analyzer?: string
  index?: boolean
  index_options?: IndexOptions
  max_shingle_size?: integer
  norms?: boolean
  search_analyzer?: string
  search_quote_analyzer?: string
  similarity?: string | null
  term_vector?: TermVectorOption
  type: 'search_as_you_type'
}

// MatchOnlyTextProperty is an example of a property which does not derive from PropertyBase.
// We have checked and this property does not support all properties of the base type.
// In a future iteration we may remodel properties and identify truely common properties that should form
// a base type that can be considered a common ancestor for all properties. Some clients will generate
// a synthetic version of this today.

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
  index_prefixes?: TextIndexPrefixes | null
  norms?: boolean
  position_increment_gap?: integer
  search_analyzer?: string
  search_quote_analyzer?: string
  similarity?: string | null
  term_vector?: TermVectorOption
  type: 'text'
}

export class VersionProperty extends DocValuesPropertyBase {
  type: 'version'
}

export class WildcardProperty extends DocValuesPropertyBase {
  type: 'wildcard'
  /**
   * @availability stack since=7.15.0
   * @availability serverless
   */
  null_value?: string
}

export class DynamicProperty extends DocValuesPropertyBase {
  type: '{dynamic_type}'

  enabled?: boolean
  null_value?: FieldValue
  boost?: double

  // NumberPropertyBase & long, double
  coerce?: boolean
  script?: Script
  on_script_error?: OnScriptError
  ignore_malformed?: boolean
  time_series_metric?: TimeSeriesMetricType

  // string
  analyzer?: string
  eager_global_ordinals?: boolean
  index?: boolean
  index_options?: IndexOptions
  index_phrases?: boolean
  index_prefixes?: TextIndexPrefixes | null
  norms?: boolean
  position_increment_gap?: integer
  search_analyzer?: string
  search_quote_analyzer?: string
  term_vector?: TermVectorOption

  // date
  format?: string
  precision_step?: integer
  locale?: string
}

export enum RankVectorElementType {
  byte,
  float,
  bit
}
