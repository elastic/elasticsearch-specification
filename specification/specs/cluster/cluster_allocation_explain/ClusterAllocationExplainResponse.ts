class ClusterAllocationExplainResponse extends ResponseBase {
	index: string;
	shard: integer;
	primary: boolean;
	current_state: string;
	unassigned_info: UnassignedInformation;
	can_allocate: Decision;
	allocate_explanation: string;
	configured_delay: string;
	configured_delay_in_mills: long;
	current_node: CurrentNode;
	can_remain_on_current_node: Decision;
	can_remain_decisions: AllocationDecision[];
	can_rebalance_cluster: Decision;
	can_rebalance_to_other_node: Decision;
	can_rebalance_cluster_decisions: AllocationDecision[];
	rebalance_explanation: string;
	node_allocation_decisions: NodeAllocationExplanation[];
	can_move_to_other_node: Decision;
	move_explanation: string;
	allocation_delay: string;
	allocation_delay_in_millis: long;
	remaining_delay: string;
	remaining_delay_in_millis: long;
}
