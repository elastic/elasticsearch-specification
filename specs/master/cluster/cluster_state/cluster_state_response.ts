
/**namespace:Cluster.ClusterState */
interface ClusterStateResponse extends Response {
	cluster_name: string;
	master_node: string;
	state_uuid: string;
	version: long;
	/**custom_serialization */
	nodes: Map<string, NodeState>;
	metadata: MetadataState;
	routing_table: RoutingTableState;
	routing_nodes: RoutingNodesState;
	blocks: BlockState;
}