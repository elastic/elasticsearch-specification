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

import {
  BulkStats,
  CompletionStats,
  DocStats,
  FielddataStats,
  FlushStats,
  GetStats,
  IndexingStats,
  MergesStats,
  QueryCacheStats,
  RecoveryStats,
  RefreshStats,
  RequestCacheStats,
  SearchStats,
  SegmentsStats,
  StoreStats,
  TranslogStats,
  WarmerStats
} from '@_types/Stats'

export class IndexStats {
  /** Contains statistics about completions across all shards assigned to the node. */
  completion?: CompletionStats
  /** Contains statistics about documents across all primary shards assigned to the node. */
  docs?: DocStats
  /** Contains statistics about the field data cache across all shards assigned to the node. */
  fielddata?: FielddataStats
  /** Contains statistics about flush operations for the node. */
  flush?: FlushStats
  /** Contains statistics about get operations for the node. */
  get?: GetStats
  /** Contains statistics about indexing operations for the node. */
  indexing?: IndexingStats
  /** Contains statistics about merge operations for the node. */
  merges?: MergesStats
  /** Contains statistics about the query cache across all shards assigned to the node. */
  query_cache?: QueryCacheStats
  /** Contains statistics about recovery operations for the node. */
  recovery?: RecoveryStats
  /** Contains statistics about refresh operations for the node. */
  refresh?: RefreshStats
  /** Contains statistics about the request cache across all shards assigned to the node. */
  request_cache?: RequestCacheStats
  /** Contains statistics about search operations for the node. */
  search?: SearchStats
  /** Contains statistics about segments across all shards assigned to the node. */
  segments?: SegmentsStats
  /** Contains statistics about the size of shards assigned to the node. */
  store?: StoreStats
  /** Contains statistics about transaction log operations for the node. */
  translog?: TranslogStats
  /** Contains statistics about index warming operations for the node. */
  warmer?: WarmerStats
  bulk?: BulkStats
}
