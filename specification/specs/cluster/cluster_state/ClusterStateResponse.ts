class ClusterStateResponse extends ResponseBase {
	cluster_name: string;
	master_node: string;
	state_uuid: string;
	version: long;
	nodes: Dictionary<string, NodeState>[];
	metadata: MetadataState;
	routing_table: RoutingTableState;
	routing_nodes: RoutingNodesState;
	blocks: BlockState;
}
