
/**namespace:Cluster.ClusterStats */
interface cluster_indices_shards_index_stats {
	shards: cluster_shard_metrics;
	primaries: cluster_shard_metrics;
	replication: cluster_shard_metrics;
}