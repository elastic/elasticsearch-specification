
/**namespace:Cluster.ClusterState */
interface cluster_state_response extends response {
	cluster_name: string;
	master_node: string;
	state_uuid: string;
	version: long;
	/**custom_serialization */
	nodes: map<string, node_state>[];
	metadata: metadata_state;
	routing_table: routing_table_state;
	routing_nodes: routing_nodes_state;
	blocks: block_state;
}