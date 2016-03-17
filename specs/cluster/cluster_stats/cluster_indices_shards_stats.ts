
/**namespace:Cluster.ClusterStats */
interface cluster_indices_shards_stats {
	total: double;
	primaries: double;
	replication: double;
	index: cluster_indices_shards_index_stats;
}