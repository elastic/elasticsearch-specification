
/**namespace:Cluster.ClusterReroute */
interface cluster_reroute_state {
	version: integer;
	master_node: string;
	blocks: block_state;
	/**custom_serialization */
	nodes: map<string, node_state>[];
	routing_table: routing_table_state;
	routing_nodes: routing_nodes_state;
}