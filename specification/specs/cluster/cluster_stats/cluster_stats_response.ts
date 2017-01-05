
/**namespace:Cluster.ClusterStats */
interface cluster_stats_response extends response {
	cluster_name: string;
	timestamp: long;
	status: ClusterStatus;
	indices: cluster_indices_stats;
	nodes: cluster_nodes_stats;
}