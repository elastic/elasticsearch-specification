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

import { PropertyName } from '@common/common'
import { integer } from '@common/Numeric'
import { Dictionary } from '@spec_utils/Dictionary'
import { UserDefinedValue } from '@spec_utils/UserDefinedValue'
import { DynamicMapping } from '../DynamicMapping'
import { FlattenedProperty } from './complex/flattened/FlattenedProperty'
import { JoinProperty } from './core/join/JoinProperty'
import { PercolatorProperty } from './core/percolator/PercolatorProperty'
import { RankFeatureProperty } from './core/rank_feature/RankFeatureProperty'
import { RankFeaturesProperty } from './core/rank_features/RankFeaturesProperty'
import { CoreProperty } from './CoreProperty'
import { ConstantKeywordProperty } from './specialized/constant_keyword/ConstantKeywordProperty'
import { FieldAliasProperty } from './specialized/field_alias/FieldAliasProperty'
import { HistogramProperty } from './specialized/histogram/HistogramProperty'

export class PropertyBase {
  local_metadata?: Dictionary<string, UserDefinedValue>
  meta?: Dictionary<string, string>
  name?: PropertyName
  properties?: Dictionary<PropertyName, Property>
  ignore_above?: integer
  dynamic?: boolean | DynamicMapping
  fields?: Dictionary<PropertyName, Property>
}

/** @variants internal tag='type' */
export type Property =
  | FlattenedProperty
  | JoinProperty
  | PercolatorProperty
  | RankFeatureProperty
  | RankFeaturesProperty
  | ConstantKeywordProperty
  | FieldAliasProperty
  | HistogramProperty
  | CoreProperty
