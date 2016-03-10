
/**namespace:Cluster.ClusterStats */
interface ClusterIndicesShardsStats {
	total: double;
	primaries: double;
	replication: double;
	index: ClusterIndicesShardsIndexStats;
}