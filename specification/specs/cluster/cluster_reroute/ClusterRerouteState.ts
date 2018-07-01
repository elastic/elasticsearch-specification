class ClusterRerouteState {
	version: integer;
	master_node: string;
	blocks: BlockState;
	nodes: Map<string, NodeState>;
	routing_table: RoutingTableState;
	routing_nodes: RoutingNodesState;
}
