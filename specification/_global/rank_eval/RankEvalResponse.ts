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
import { UserDefinedValue } from '@spec_utils/UserDefinedValue'
import { ResponseBase } from '@_types/Base'
import { Id, IndexName, Type } from '@_types/common'
import { double } from '@_types/Numeric'

export class Response extends ResponseBase {
  /** The overall evaluation quality calculated by the defined metric */
  metric_score: double
  /** The details section contains one entry for every query in the original requests section, keyed by the search request id */
  details: Dictionary<Id, RankEvalMetricDetail>
  failures: Dictionary<string, UserDefinedValue> // TODO -- incomplete tests
}

export class RankEvalMetricDetail {
  /** The metric_score in the details section shows the contribution of this query to the global quality metric score */
  metric_score: double
  /** The unrated_docs section contains an _index and _id entry for each document in the search result for this query that didn’t have a ratings value. This can be used to ask the user to supply ratings for these documents */
  unrated_docs: UnratedDocument[]
  /** The hits section shows a grouping of the search results with their supplied ratings */
  hits: RankEvalHitItem[]
  /** The metric_details give additional information about the calculated quality metric (e.g. how many of the retrieved documents were relevant). The content varies for each metric but allows for better interpretation of the results */
  metric_details: Dictionary<string, Dictionary<string, UserDefinedValue>>
}

export class RankEvalHitItem {
  hit: RankEvalHit
  rating?: double
}

export class RankEvalHit {
  _id: Id
  _index: IndexName
  _type?: Type
  _score: double
}

export class UnratedDocument {
  _id: Id
  _index: IndexName
}
