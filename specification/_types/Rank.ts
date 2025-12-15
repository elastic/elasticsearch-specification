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

import { long } from '@_types/Numeric'

/**
 * @variants container
 */
export class RankContainer {
  /** The reciprocal rank fusion parameters 
   * @ext_doc_id rrf
  */
  rrf?: RrfRank
}

export class RankBase {}

export class RrfRank extends RankBase {
  /** How much influence documents in individual result sets per query have over the final ranked result set  */
  rank_constant?: long
  /** Size of the individual result sets per query */
  rank_window_size?: long
}
