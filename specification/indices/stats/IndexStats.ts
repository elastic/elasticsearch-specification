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

import { CompletionStats } from '@common/common_options/stats/CompletionStats'
import { DocStats } from '@common/common_options/stats/DocStats'
import { FielddataStats } from '@common/common_options/stats/FielddataStats'
import { FlushStats } from '@common/common_options/stats/FlushStats'
import { GetStats } from '@common/common_options/stats/GetStats'
import { IndexingStats } from '@common/common_options/stats/IndexingStats'
import { MergesStats } from '@common/common_options/stats/MergesStats'
import { QueryCacheStats } from '@common/common_options/stats/QueryCacheStats'
import { RecoveryStats } from '@common/common_options/stats/RecoveryStats'
import { RefreshStats } from '@common/common_options/stats/RefreshStats'
import { RequestCacheStats } from '@common/common_options/stats/RequestCacheStats'
import { SearchStats } from '@common/common_options/stats/SearchStats'
import { SegmentsStats } from '@common/common_options/stats/SegmentsStats'
import { StoreStats } from '@common/common_options/stats/StoreStats'
import { TranslogStats } from '@common/common_options/stats/TranslogStats'
import { WarmerStats } from '@common/common_options/stats/WarmerStats'
import { BulkStats } from '@common/common_options/stats/BulkStats'

export class IndexStats {
  completion?: CompletionStats
  docs?: DocStats
  fielddata?: FielddataStats
  flush?: FlushStats
  get?: GetStats
  indexing?: IndexingStats
  merges?: MergesStats
  query_cache?: QueryCacheStats
  recovery?: RecoveryStats
  refresh?: RefreshStats
  request_cache?: RequestCacheStats
  search?: SearchStats
  segments?: SegmentsStats
  store?: StoreStats
  translog?: TranslogStats
  warmer?: WarmerStats
  bulk?: BulkStats
}
