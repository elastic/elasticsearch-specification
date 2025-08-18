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

import { Field, IndexName } from '@_types/common'
import { uint } from '@_types/Numeric'
import { ShardStatistics } from '@_types/Stats'
import { EpochTime, UnitMillis } from '@_types/Time'
import { ShardRouting } from '@indices/stats/types'
import { AdditionalProperties } from '@spec_utils/behaviors'
import { Dictionary } from '@spec_utils/Dictionary'

export class Response {
  body: FieldsUsageBody
}

/**
 * @behavior_meta AdditionalProperties fieldname=stats description="Per index statistics"
 */
export class FieldsUsageBody
  implements AdditionalProperties<IndexName, UsageStatsIndex>
{
  _shards: ShardStatistics
}

export class UsageStatsIndex {
  shards: UsageStatsShards[]
}

export class UsageStatsShards {
  routing: ShardRouting
  stats: ShardsStats
  tracking_id: string
  tracking_started_at_millis: EpochTime<UnitMillis>
}

export class ShardsStats {
  all_fields: FieldSummary
  fields: Dictionary<Field, FieldSummary>
}

export class FieldSummary {
  any: uint
  stored_fields: uint
  doc_values: uint
  points: uint
  norms: uint
  term_vectors: uint
  knn_vectors: uint
  inverted_index: InvertedIndex
}

export class InvertedIndex {
  terms: uint
  postings: uint
  proximity: uint
  positions: uint
  term_frequencies: uint
  offsets: uint
  payloads: uint
}
