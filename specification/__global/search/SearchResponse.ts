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

import { Aggregate } from '@common/aggregations/Aggregate'
import {
  AggregateName,
  double,
  Id,
  long,
  ScrollId,
  SuggestionName
} from '@common/common'
import { ResponseBase } from '@common/common_abstractions/response/ResponseBase'
import { ClusterStatistics } from '@common/common_options/hit/ClusterStatistics'
import { ShardStatistics } from '@common/common_options/hit/ShardStatistics'
import { Dictionary } from '__spec_utils/Dictionary'
import { UserDefinedValue } from '__spec_utils/UserDefinedValue'
import { HitsMetadata } from './hits/HitsMetadata'
import { Profile } from './profile/Profile'
import { Suggest } from './suggesters/Suggest'

export class SearchResponse<TDocument> extends ResponseBase {
  took: long
  timed_out: boolean
  _shards: ShardStatistics
  hits: HitsMetadata<TDocument>

  aggregations?: Dictionary<AggregateName, Aggregate>
  _clusters?: ClusterStatistics
  documents?: TDocument[]
  fields?: Dictionary<string, UserDefinedValue>
  max_score?: double
  num_reduce_phases?: long
  profile?: Profile
  pit_id?: Id
  _scroll_id?: ScrollId
  suggest?: Dictionary<SuggestionName, Suggest<TDocument>[]>
  terminated_early?: boolean
}
