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

import { StopWords } from '@_types/analysis/StopWords'
import {
  Field,
  Id,
  IndexName,
  MinimumShouldMatch,
  Routing,
  VersionNumber,
  VersionType
} from '@_types/common'
import { Distance, GeoLocation, GeoShape, GeoShapeRelation } from '@_types/Geo'
import { double, float, integer } from '@_types/Numeric'
import { Script } from '@_types/Scripting'
import { DateMath, Duration } from '@_types/Time'
import { AdditionalProperty } from '@spec_utils/behaviors'
import { Dictionary } from '@spec_utils/Dictionary'
import { UserDefinedValue } from '@spec_utils/UserDefinedValue'
import { FieldLookup, QueryBase, QueryContainer } from './abstractions'

export class DistanceFeatureQueryBase<TOrigin, TDistance> extends QueryBase {
  /**
   * Date or point of origin used to calculate distances.
   * If the `field` value is a `date` or `date_nanos` field, the `origin` value must be a date.
   * Date Math, such as `now-1h`, is supported.
   * If the field value is a `geo_point` field, the `origin` value must be a geopoint.
   */
  origin: TOrigin
  /**
   * Distance from the `origin` at which relevance scores receive half of the `boost` value.
   * If the `field` value is a `date` or `date_nanos` field, the `pivot` value must be a time unit, such as `1h` or `10d`. If the `field` value is a `geo_point` field, the `pivot` value must be a distance unit, such as `1km` or `12m`.
   */
  pivot: TDistance
  /**
   * Name of the field used to calculate distances. This field must meet the following criteria:
   * be a `date`, `date_nanos` or `geo_point` field;
   * have an `index` mapping parameter value of `true`, which is the default;
   * have an `doc_values` mapping parameter value of `true`, which is the default.
   */
  field: Field
}

export class UntypedDistanceFeatureQuery extends DistanceFeatureQueryBase<
  UserDefinedValue,
  UserDefinedValue
> {}

export class GeoDistanceFeatureQuery extends DistanceFeatureQueryBase<
  GeoLocation,
  Distance
> {}

export class DateDistanceFeatureQuery extends DistanceFeatureQueryBase<
  DateMath,
  Duration
> {}

/**
 * @codegen_names untyped, geo, date
 * @variants untagged untyped=_types.query_dsl.UntypedDistanceFeatureQuery
 * @ext_doc_id query-dsl-distance-feature-query
 */
// Note: deserialization depends on value types
export type DistanceFeatureQuery =
  | UntypedDistanceFeatureQuery
  | GeoDistanceFeatureQuery
  | DateDistanceFeatureQuery

/**
 * @ext_doc_id query-dsl-mlt-query
 */
export class MoreLikeThisQuery extends QueryBase {
  /**
   * The analyzer that is used to analyze the free form text.
   * Defaults to the analyzer associated with the first field in fields.
   * @ext_doc_id analysis
   */
  analyzer?: string
  /**
   * Each term in the formed query could be further boosted by their tf-idf score.
   * This sets the boost factor to use when using this feature.
   * Defaults to deactivated (0).
   * @server_default 0
   */
  boost_terms?: double
  /**
   * Controls whether the query should fail (throw an exception) if any of the specified fields are not of the supported types (`text` or `keyword`).
   * @server_default true
   */
  fail_on_unsupported_field?: boolean
  /**
   * A list of fields to fetch and analyze the text from.
   * Defaults to the `index.query.default_field` index setting, which has a default value of `*`.
   */
  fields?: Field[]
  /**
   * Specifies whether the input documents should also be included in the search results returned.
   * @server_default false
   */
  include?: boolean
  /**
   * Specifies free form text and/or a single or multiple documents for which you want to find similar documents.
   */
  like: Like | Like[]
  /**
   * The maximum document frequency above which the terms are ignored from the input document.
   */
  max_doc_freq?: integer
  /**
   * The maximum number of query terms that can be selected.
   * @server_default 25
   */
  max_query_terms?: integer
  /**
   * The maximum word length above which the terms are ignored.
   * Defaults to unbounded (`0`).
   * @server_default 0
   */
  max_word_length?: integer
  /**
   * The minimum document frequency below which the terms are ignored from the input document.
   * @server_default 5
   */
  min_doc_freq?: integer
  /**
   * After the disjunctive query has been formed, this parameter controls the number of terms that must match.
   * @doc_id query-dsl-minimum-should-match
   */
  minimum_should_match?: MinimumShouldMatch
  /**
   * The minimum term frequency below which the terms are ignored from the input document.
   * @server_default 2
   */
  min_term_freq?: integer
  /**
   * The minimum word length below which the terms are ignored.
   * @server_default 0
   */
  min_word_length?: integer

  routing?: Routing
  /**
   * An array of stop words.
   * Any word in this set is ignored.
   */
  stop_words?: StopWords
  /**
   * Used in combination with `like` to exclude documents that match a set of terms.
   */
  unlike?: Like | Like[]
  version?: VersionNumber
  /** @server_default 'internal' */
  version_type?: VersionType
}

export class LikeDocument {
  /**
   * A document not present in the index.
   */
  doc?: UserDefinedValue
  fields?: Field[]
  /**
   * ID of a document.
   */
  _id?: Id
  /**
   * Index of a document.
   */
  _index?: IndexName
  /**
   * Overrides the default analyzer.
   */
  per_field_analyzer?: Dictionary<Field, string>
  routing?: Routing
  version?: VersionNumber
  /** @server_default 'internal' */
  version_type?: VersionType
}

/**
 * Text that we want similar documents for or a lookup to a document's field for the text.
 * @doc_id document-input-parameters
 * @codegen_names text, document
 */
export type Like = string | LikeDocument

/**
 * @ext_doc_id query-dsl-percolate-query
 */
export class PercolateQuery extends QueryBase {
  /**
   * The source of the document being percolated.
   */
  document?: UserDefinedValue
  /**
   * An array of sources of the documents being percolated.
   */
  documents?: UserDefinedValue[]
  /**
   * Field that holds the indexed queries. The field must use the `percolator` mapping type.
   */
  field: Field
  /**
   * The ID of a stored document to percolate.
   */
  id?: Id
  /**
   * The index of a stored document to percolate.
   */
  index?: IndexName
  /**
   * The suffix used for the `_percolator_document_slot` field when multiple `percolate` queries are specified.
   */
  name?: string
  /**
   * Preference used to fetch document to percolate.
   */
  preference?: string
  /**
   * Routing used to fetch document to percolate.
   */
  routing?: Routing
  /**
   * The expected version of a stored document to percolate.
   */
  version?: VersionNumber
}

/**
 * @variants container
 * @ext_doc_id query-dsl-pinned-query
 */
export class PinnedQuery extends QueryBase {
  /**
   * Any choice of query used to rank documents which will be ranked below the "pinned" documents.
   * @variant container_property
   */
  organic: QueryContainer
  /**
   * Document IDs listed in the order they are to appear in results.
   * Required if `docs` is not specified.
   */
  ids?: Id[]
  /**
   * Documents listed in the order they are to appear in results.
   * Required if `ids` is not specified.
   */
  docs?: PinnedDoc[]
}

export class PinnedDoc {
  /**
   * The unique document ID.
   */
  _id: Id
  /**
   * The index that contains the document.
   */
  _index?: IndexName
}

export class RankFeatureFunction {}

export class RankFeatureFunctionLinear extends RankFeatureFunction {}

export class RankFeatureFunctionLogarithm extends RankFeatureFunction {
  /**
   * Configurable scaling factor.
   */
  scaling_factor: float
}

export class RankFeatureFunctionSaturation extends RankFeatureFunction {
  /**
   * Configurable pivot value so that the result will be less than 0.5.
   */
  pivot?: float
}

export class RankFeatureFunctionSigmoid extends RankFeatureFunction {
  /**
   * Configurable pivot value so that the result will be less than 0.5.
   */
  pivot: float
  /**
   * Configurable Exponent.
   */
  exponent: float
}

/**
 * @ext_doc_id query-dsl-rank-feature-query
 */
export class RankFeatureQuery extends QueryBase {
  /**
   * `rank_feature` or `rank_features` field used to boost relevance scores.
   */
  field: Field

  // This is actually an inline optional container: at most one of these fields can exist
  /**
   * Saturation function used to boost relevance scores based on the value of the rank feature `field`.
   */
  saturation?: RankFeatureFunctionSaturation
  /**
   * Logarithmic function used to boost relevance scores based on the value of the rank feature `field`.
   */
  log?: RankFeatureFunctionLogarithm
  /**
   * Linear function used to boost relevance scores based on the value of the rank feature `field`.
   */
  linear?: RankFeatureFunctionLinear
  /**
   * Sigmoid function used to boost relevance scores based on the value of the rank feature `field`.
   */
  sigmoid?: RankFeatureFunctionSigmoid
}

/**
 * @ext_doc_id query-dsl-script-query
 */
export class ScriptQuery extends QueryBase {
  /**
   * Contains a script to run as a query.
   * This script must return a boolean value, `true` or `false`.
   */
  script: Script
}

/**
 * @ext_doc_id query-dsl-script-score-query
 */
export class ScriptScoreQuery extends QueryBase {
  /**
   * Documents with a score lower than this floating point number are excluded from the search results.
   */
  min_score?: float
  /**
   * Query used to return documents.
   */
  query: QueryContainer
  /**
   * Script used to compute the score of documents returned by the query.
   * Important: final relevance scores from the `script_score` query cannot be negative.
   */
  script: Script
}

/**
 * @behavior_meta AdditionalProperty key=field value=shape
 * @ext_doc_id query-dsl-shape-query
 */
// Shape query doesn't follow the common pattern of having a single field-name property
// holding also the query base fields (boost and _name)
export class ShapeQuery
  extends QueryBase
  implements AdditionalProperty<Field, ShapeFieldQuery>
{
  /**
   * When set to `true` the query ignores an unmapped field and will not match any documents.
   */
  ignore_unmapped?: boolean
}

export class ShapeFieldQuery {
  /**
   * Queries using a pre-indexed shape.
   */
  indexed_shape?: FieldLookup
  /**
   * Spatial relation between the query shape and the document shape.
   */
  relation?: GeoShapeRelation
  /**
   * Queries using an inline shape definition in GeoJSON or Well Known Text (WKT) format.
   */
  shape?: GeoShape
}

/**
 * @ext_doc_id query-dsl-rule-query
 */
export class RuleQuery extends QueryBase {
  organic: QueryContainer
  ruleset_ids?: Id | Id[]
  ruleset_id?: string
  match_criteria: UserDefinedValue
}
