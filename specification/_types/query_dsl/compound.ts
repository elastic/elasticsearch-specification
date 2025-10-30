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

import { Field, MinimumShouldMatch } from '@_types/common'
import { Distance, GeoLocation } from '@_types/Geo'
import { double, long } from '@_types/Numeric'
import { Script } from '@_types/Scripting'
import { DateMath, Duration } from '@_types/Time'
import { AdditionalProperty } from '@spec_utils/behaviors'
import { UserDefinedValue } from '@spec_utils/UserDefinedValue'
import { QueryBase, QueryContainer } from './abstractions'

/**
 * @ext_doc_id query-dsl-bool-query
 */
export class BoolQuery extends QueryBase {
  /**
   * The clause (query) must appear in matching documents.
   * However, unlike `must`, the score of the query will be ignored.
   */
  filter?: QueryContainer | QueryContainer[]
  /**
   * Specifies the number or percentage of `should` clauses returned documents must match.
   * @doc_id query-dsl-minimum-should-match
   */
  minimum_should_match?: MinimumShouldMatch
  /**
   * The clause (query) must appear in matching documents and will contribute to the score.
   */
  must?: QueryContainer | QueryContainer[]
  /**
   * The clause (query) must not appear in the matching documents.
   * Because scoring is ignored, a score of `0` is returned for all documents.
   */
  must_not?: QueryContainer | QueryContainer[]
  /**
   * The clause (query) should appear in the matching document.
   */
  should?: QueryContainer | QueryContainer[]
}

/**
 * @ext_doc_id query-dsl-boosting-query
 */
export class BoostingQuery extends QueryBase {
  /**
   * Floating point number between 0 and 1.0 used to decrease the relevance scores of documents matching the `negative` query.
   */
  negative_boost: double
  /**
   * Query used to decrease the relevance score of matching documents.
   */
  negative: QueryContainer
  /**
   * Any returned documents must match this query.
   */
  positive: QueryContainer
}

/**
 * @ext_doc_id query-dsl-constant-score-query
 */
export class ConstantScoreQuery extends QueryBase {
  /**
   * Filter query you wish to run. Any returned documents must match this query.
   * Filter queries do not calculate relevance scores.
   * To speed up performance, Elasticsearch automatically caches frequently used filter queries.
   */
  filter: QueryContainer
}

/**
 * @ext_doc_id query-dsl-dis-max-query
 */
export class DisMaxQuery extends QueryBase {
  /**
   * One or more query clauses.
   * Returned documents must match one or more of these queries.
   * If a document matches multiple queries, Elasticsearch uses the highest relevance score.
   */
  queries: QueryContainer[]
  /**
   * Floating point number between 0 and 1.0 used to increase the relevance scores of documents matching multiple query clauses.
   * @server_default 0.0
   */
  tie_breaker?: double
}

/**
 * @shortcut_property functions
 * @ext_doc_id query-dsl-function-score-query
 */
export class FunctionScoreQuery extends QueryBase {
  /**
   * Defines how he newly computed score is combined with the score of the query
   * @server_default multiply
   */
  boost_mode?: FunctionBoostMode
  /**
   * One or more functions that compute a new score for each document returned by the query.
   */
  functions?: FunctionScoreContainer | FunctionScoreContainer[]
  /**
   * Restricts the new score to not exceed the provided limit.
   */
  max_boost?: double
  /**
   * Excludes documents that do not meet the provided score threshold.
   */
  min_score?: double
  /**
   * A query that determines the documents for which a new score is computed.
   */
  query?: QueryContainer
  /** Specifies how the computed scores are combined
   * @server_default multiply
   */
  score_mode?: FunctionScoreMode
}

export class ScriptScoreFunction {
  /**
   * A script that computes a score.
   */
  script: Script
}

export class RandomScoreFunction {
  field?: Field
  seed?: long | string
}

export class FieldValueFactorScoreFunction {
  /**
   * Field to be extracted from the document.
   */
  field: Field
  /**
   * Optional factor to multiply the field value with.
   * @server_default 1
   */
  factor?: double
  /**
   * Value used if the document doesn’t have that field.
   * The modifier and factor are still applied to it as though it were read from the document.
   */
  missing?: double
  /**
   * Modifier to apply to the field value.
   */
  modifier?: FieldValueFactorModifier
}

export class DecayPlacement<TOrigin, TScale> {
  /**
   * Defines how documents are scored at the distance given at scale.
   * @server_default 0.5
   */
  decay?: double
  /**
   * If defined, the decay function will only compute the decay function for documents with a distance greater than the defined `offset`.
   * @server_default 0
   */
  offset?: TScale
  /**
   * Defines the distance from origin + offset at which the computed score will equal `decay` parameter.
   */
  scale?: TScale
  /**
   * The point of origin used for calculating distance. Must be given as a number for numeric field, date for date fields and geo point for geo fields.
   */
  origin?: TOrigin
}

/**
 * @behavior_meta AdditionalProperty key=field value=placement
 */
export class DecayFunctionBase<TOrigin, TScale>
  implements AdditionalProperty<Field, DecayPlacement<TOrigin, TScale>>
{
  /**
   * Determines how the distance is calculated when a field used for computing the decay contains multiple values.
   * @server_default min
   */
  multi_value_mode?: MultiValueMode
}

export class UntypedDecayFunction extends DecayFunctionBase<
  UserDefinedValue,
  UserDefinedValue
> {}
export class NumericDecayFunction extends DecayFunctionBase<double, double> {}
export class DateDecayFunction extends DecayFunctionBase<DateMath, Duration> {}
export class GeoDecayFunction extends DecayFunctionBase<
  GeoLocation,
  Distance
> {}

/**
 * @codegen_names untyped, date, numeric, geo
 * @variants untagged untyped=_types.query_dsl.UntypedDecayFunction
 */
// Note: deserialization depends on value types
export type DecayFunction =
  | UntypedDecayFunction
  | DateDecayFunction
  | NumericDecayFunction
  | GeoDecayFunction

/**
 * @variants container
 * @es_quirk this container is valid without a variant. Despite being documented as a function, 'weight'
 *   is actually a container property that can be combined with a function. Comment in the ES code
 *   (SearchModule#registerScoreFunctions) says: Weight doesn't have its own parser, so every function
 *   supports it out of the box. Can be a single function too when not associated to any other function,
 *   which is why it needs to be registered manually here.
 */
export class FunctionScoreContainer {
  /**
   * Function that scores a document with a exponential decay, depending on the distance of a numeric field value of the document from an origin.
   */
  exp?: DecayFunction
  /**
   * Function that scores a document with a normal decay, depending on the distance of a numeric field value of the document from an origin.
   */
  gauss?: DecayFunction
  /**
   * Function that scores a document with a linear decay, depending on the distance of a numeric field value of the document from an origin.
   */
  linear?: DecayFunction
  /**
   * Function allows you to use a field from a document to influence the score.
   * It’s similar to using the script_score function, however, it avoids the overhead of scripting.
   */
  field_value_factor?: FieldValueFactorScoreFunction
  /**
   * Generates scores that are uniformly distributed from 0 up to but not including 1.
   * In case you want scores to be reproducible, it is possible to provide a `seed` and `field`.
   */
  random_score?: RandomScoreFunction
  /**
   * Enables you to wrap another query and customize the scoring of it optionally with a computation derived from other numeric field values in the doc using a script expression.
   */
  script_score?: ScriptScoreFunction

  /** @variant container_property */
  filter?: QueryContainer
  /** @variant container_property */
  weight?: double
}

export enum FunctionScoreMode {
  /**
   * Scores are multiplied.
   */
  multiply,
  /**
   * Scores are summed.
   */
  sum,
  /**
   * Scores are averaged.
   */
  avg,
  /**
   * The first function that has a matching filter is applied.
   */
  first,
  /**
   * Maximum score is used.
   */
  max,
  /**
   * Minimum score is used.
   */
  min
}

export enum FunctionBoostMode {
  /**
   * Query score and function score are multiplied
   */
  multiply,
  /**
   * Only the function score is used.
   * The query score is ignored.
   */
  replace,
  /**
   * Query score and function score are added
   */
  sum,
  /**
   * Query score and function score are averaged
   */
  avg,
  /**
   * Max of query score and function score
   */
  max,
  /**
   * Min of query score and function score
   */
  min
}

export enum FieldValueFactorModifier {
  /**
   * Do not apply any multiplier to the field value.
   */
  none,
  /**
   * Take the common logarithm of the field value.
   * Because this function will return a negative value and cause an error if used on values between 0 and 1, it is recommended to use `log1p` instead.
   */
  log,
  /**
   * Add 1 to the field value and take the common logarithm.
   */
  log1p,
  /**
   * Add 2 to the field value and take the common logarithm.
   */
  log2p,
  /**
   * Take the natural logarithm of the field value.
   * Because this function will return a negative value and cause an error if used on values between 0 and 1, it is recommended to use `ln1p` instead.
   */
  ln,
  /**
   * Add 1 to the field value and take the natural logarithm.
   */
  ln1p,
  /**
   * Add 2 to the field value and take the natural logarithm.
   */
  ln2p,
  /**
   * Square the field value (multiply it by itself).
   */
  square,
  /**
   * Take the square root of the field value.
   */
  sqrt,
  /**
   * Reciprocate the field value, same as `1/x` where `x` is the field’s value.
   */
  reciprocal
}

export enum MultiValueMode {
  /**
   * Distance is the minimum distance.
   */
  min,
  /**
   * Distance is the maximum distance.
   */
  max,
  /**
   * Distance is the average distance.
   */
  avg,
  /**
   * Distance is the sum of all distances.
   */
  sum
}
