
/**namespace:Cluster.ClusterStats */
interface ClusterIndicesStats {
	completion: CompletionStats;
	count: long;
	docs: DocStats;
	fielddata: FielddataStats;
	percolate: PercolateStats;
	query_cache: QueryCacheStats;
	segments: SegmentsStats;
	shards: ClusterIndicesShardsStats;
	store: StoreStats;
}