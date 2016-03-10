
/**namespace:Cluster.ClusterReroute */
interface ClusterRerouteState {
	version: integer;
	master_node: string;
	blocks: BlockState;
	/**custom_serialization */
	nodes: Map<string, NodeState>;
	routing_table: RoutingTableState;
	routing_nodes: RoutingNodesState;
}