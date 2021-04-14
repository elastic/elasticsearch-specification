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

import { ShardCommit } from "./ShardCommit";
import { ShardCompletion } from "./ShardCompletion";
import { ShardDocs } from "./ShardDocs";
import { ShardFielddata } from "./ShardFielddata";
import { ShardFlush } from "./ShardFlush";
import { ShardGet } from "./ShardGet";
import { ShardIndexing } from "./ShardIndexing";
import { ShardMerges } from "./ShardMerges";
import { ShardPath } from "./ShardPath";
import { ShardQueryCache } from "./ShardQueryCache";
import { ShardRefresh } from "./ShardRefresh";
import { ShardRequestCache } from "./ShardRequestCache";
import { ShardRetentionLeases } from "./ShardRetentionLeases";
import { ShardRouting } from "./ShardRouting";
import { ShardSearch } from "./ShardSearch";
import { ShardSegments } from "./ShardSegments";
import { ShardSequenceNumber } from "./ShardSequenceNumber";
import { ShardStatsRecovery } from "./ShardStatsRecovery";
import { ShardStatsStore } from "./ShardStatsStore";
import { ShardTransactionLog } from "./ShardTransactionLog";
import { ShardWarmer } from "./ShardWarmer";

export class ShardStats {
  commit: ShardCommit;
  completion: ShardCompletion;
  docs: ShardDocs;
  fielddata: ShardFielddata;
  flush: ShardFlush;
  get: ShardGet;
  indexing: ShardIndexing;
  merges: ShardMerges;
  shard_path: ShardPath;
  query_cache: ShardQueryCache;
  recovery: ShardStatsRecovery;
  refresh: ShardRefresh;
  request_cache: ShardRequestCache;
  retention_leases: ShardRetentionLeases;
  routing: ShardRouting;
  search: ShardSearch;
  segments: ShardSegments;
  seq_no: ShardSequenceNumber;
  store: ShardStatsStore;
  translog: ShardTransactionLog;
  warmer: ShardWarmer;
}
