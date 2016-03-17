
/**namespace:Cluster.ClusterStats */
interface cluster_indices_stats {
	completion: completion_stats;
	count: long;
	docs: doc_stats;
	fielddata: fielddata_stats;
	percolate: percolate_stats;
	query_cache: query_cache_stats;
	segments: segments_stats;
	shards: cluster_indices_shards_stats;
	store: store_stats;
}