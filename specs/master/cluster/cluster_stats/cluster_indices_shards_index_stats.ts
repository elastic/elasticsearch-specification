
/**namespace:Cluster.ClusterStats */
interface ClusterIndicesShardsIndexStats {
	shards: ClusterShardMetrics;
	primaries: ClusterShardMetrics;
	replication: ClusterShardMetrics;
}