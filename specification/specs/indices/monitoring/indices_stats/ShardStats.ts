class ShardStats {
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
