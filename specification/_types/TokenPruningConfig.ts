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

import { float, integer } from '@_types/Numeric'

export class TokenPruningConfig {
  /**
   * Tokens whose frequency is more than this threshold times the average frequency of all tokens in the specified field are considered outliers and pruned.
   * @server_default 5
   */
  tokens_freq_ratio_threshold?: integer
  /**
   * Tokens whose weight is less than this threshold are considered nonsignificant and pruned.
   * @server_default 0.4
   */
  tokens_weight_threshold?: float
  /**
   * Whether to only score pruned tokens, vs only scoring kept tokens.
   * @server_default false
   */
  only_score_pruned_tokens?: boolean
}
