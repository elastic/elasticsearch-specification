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

import { Dictionary } from "@spec_utils/Dictionary"
import { UserDefinedValue } from "@spec_utils/UserDefinedValue"
import { StopWords } from "@_types/analysis/StopWords"
import { Field, Fields, MinimumShouldMatch, Routing, VersionNumber, VersionType, Id, Type, IndexName, ShapeRelation } from "@_types/common"
import { Distance } from "@_types/Geo"
import { double, integer, long } from "@_types/Numeric"
import { Script } from "@_types/Scripting"
import { DateMath, Time } from "@_types/Time"
import { QueryBase, QueryContainer, FieldLookup } from "./abstractions"
import { GeoCoordinate, GeoShape } from "./geo"

export class DistanceFeatureQuery extends QueryBase {
  origin?: Array<number> | GeoCoordinate | DateMath
  pivot?: Distance | Time
  field?: Field
}

export class MoreLikeThisQuery extends QueryBase {
  analyzer?: string
  boost_terms?: double
  fields?: Fields
  include?: boolean
  like?: Like | Like[]
  max_doc_freq?: integer
  max_query_terms?: integer
  max_word_length?: integer
  min_doc_freq?: integer
  minimum_should_match?: MinimumShouldMatch
  min_term_freq?: integer
  min_word_length?: integer
  per_field_analyzer?: Dictionary<Field, string>
  routing?: Routing
  stop_words?: StopWords
  unlike?: Like | Like[]
  version?: VersionNumber
  version_type?: VersionType
}

export class LikeDocument {
  doc?: UserDefinedValue
  fields?: Fields
  _id?: Id | number
  _type?: Type
  _index?: IndexName
  per_field_analyzer?: Dictionary<Field, string>
  routing?: Routing
}

/**
 * Text that we want similar documents for or a lookup to a document's field for the text.
 * @doc_url https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl-mlt-query.html#_document_input_parameters
 *
 */
 export type Like = string | LikeDocument

 export class PercolateQuery extends QueryBase {
  document?: UserDefinedValue
  documents?: UserDefinedValue[]
  field?: Field
  id?: Id
  index?: IndexName
  preference?: string
  routing?: Routing
  version?: VersionNumber
}

export class PinnedQuery extends QueryBase {
  ids?: Id[] | long[]
  organic?: QueryContainer
}

export class RankFeatureFunction {}

export class RankFeatureQuery extends QueryBase {
  function?: RankFeatureFunction
}

export class ScriptQuery extends QueryBase {
  script?: Script
}

export class ScriptScoreQuery extends QueryBase {
  query?: QueryContainer
  script?: Script
}

export class ShapeQuery extends QueryBase {
  ignore_unmapped?: boolean
  indexed_shape?: FieldLookup
  relation?: ShapeRelation
  shape?: GeoShape
}