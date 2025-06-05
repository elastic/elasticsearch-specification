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

import { integer } from '@_types/Numeric'
import { ClusterStatistics, ShardStatistics } from '@_types/Stats'
import { AsyncSearchResponseBase } from '@async_search/_types/AsyncSearchResponseBase'

export class StatusResponseBase extends AsyncSearchResponseBase {
  /** The number of shards that have run the query so far. */
  _shards: ShardStatistics
  /**
   * Metadata about clusters involved in the cross-cluster search.
   * It is not shown for local-only searches.
   */
  _clusters?: ClusterStatistics
  /**
   * If the async search completed, this field shows the status code of the search.
   * For example, `200` indicates that the async search was successfully completed.
   * `503` indicates that the async search was completed with an error.
   */
  completion_status?: integer
}
export class Response {
  body: StatusResponseBase
}
