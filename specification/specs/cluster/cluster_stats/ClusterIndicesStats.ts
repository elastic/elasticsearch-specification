class ClusterIndicesStats {
  completion: CompletionStats;
  count: long;
  docs: DocStats;
  fielddata: FielddataStats;
  query_cache: QueryCacheStats;
  segments: SegmentsStats;
  shards: ClusterIndicesShardsStats;
  store: StoreStats;
}
