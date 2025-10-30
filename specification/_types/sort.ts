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

import { Field, FieldValue } from '@_types/common'
import { DistanceUnit, GeoDistanceType, GeoLocation } from '@_types/Geo'
import { integer } from '@_types/Numeric'
import { QueryContainer } from '@_types/query_dsl/abstractions'
import { Script } from '@_types/Scripting'
import { AdditionalProperty } from '@spec_utils/behaviors'

export class NestedSortValue {
  filter?: QueryContainer
  max_children?: integer
  nested?: NestedSortValue
  path: Field
}

export class ScoreSort {
  order?: SortOrder
}

/**
 * @behavior_meta AdditionalProperty key=field value=location
 */
export class GeoDistanceSort
  implements AdditionalProperty<Field, GeoLocation | GeoLocation[]>
{
  mode?: SortMode
  distance_type?: GeoDistanceType
  ignore_unmapped?: boolean
  order?: SortOrder
  unit?: DistanceUnit
  nested?: NestedSortValue
}

export class ScriptSort {
  order?: SortOrder
  script: Script
  type?: ScriptSortType
  mode?: SortMode
  nested?: NestedSortValue
}

export enum ScriptSortType {
  string,
  number,
  version
}

/**
 * @doc_id sort-search-results
 * @variants container
 * @behavior_meta AdditionalProperty key=field value=sort
 */
export class SortOptions {
  _score?: ScoreSort
  _doc?: ScoreSort
  _geo_distance?: GeoDistanceSort
  _script?: ScriptSort
}

/**
 * @codegen_names field, options
 */
// Field is a shortcut for {"<field>":{}}. Default order is asc except for "_score" where it's desc
export type SortCombinations = Field | SortOptions

export type Sort = SortCombinations | SortCombinations[]

export type SortResults = FieldValue[]

/**
 * Defines what values to pick in the case a document contains multiple values for a particular field.
 */
export enum SortMode {
  min,
  max,
  sum,
  avg,
  median
}

export enum SortOrder {
  /**
   * Ascending (smallest to largest)
   */
  asc,
  /**
   * Descending (largest to smallest)
   */
  desc
}
