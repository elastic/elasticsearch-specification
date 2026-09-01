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

import { Aggregate } from '@_types/aggregations/Aggregate'
import { AggregateName, Id, ScrollId, SuggestionName } from '@_types/common'
import { double, long } from '@_types/Numeric'
import { ClusterStatistics, ShardStatistics } from '@_types/Stats'
import { HitsMetadata } from '@global/search/_types/hits'
import { Profile } from '@global/search/_types/profile'
import { Suggest } from '@global/search/_types/suggester'
import { Dictionary } from '@spec_utils/Dictionary'
import { UserDefinedValue } from '@spec_utils/UserDefinedValue'

// Keep changes in sync with:
// - search
// - fleet.search
export class Response<TDocument> {
  body: {
    took: long
    timed_out: boolean
    _shards: ShardStatistics
    hits: HitsMetadata<TDocument>
    aggregations?: Dictionary<AggregateName, Aggregate>
    _clusters?: ClusterStatistics
    fields?: Dictionary<string, UserDefinedValue>
    max_score?: double
    num_reduce_phases?: long
    profile?: Profile
    pit_id?: Id
    _scroll_id?: ScrollId
    suggest?: Dictionary<SuggestionName, Suggest<TDocument>[]>
    terminated_early?: boolean
  }
}
