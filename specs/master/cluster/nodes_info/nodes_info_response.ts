
/**namespace:Cluster.NodesInfo */
interface nodes_info_response extends response {
	cluster_name: string;
	/**custom_serialization */
	nodes: map<string, node_info>[];
}