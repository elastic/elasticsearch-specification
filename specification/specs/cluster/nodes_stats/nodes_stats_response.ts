
/**namespace:Cluster.NodesStats */
interface nodes_stats_response extends response {
	cluster_name: string;
	/**custom_serialization */
	nodes: map<string, node_stats>[];
}