class ClusterAllocationExplainResponse extends ResponseBase implements IResponse {
	allocate_explanation: string;
	allocation_delay: string;
	allocation_delay_in_millis: long;
	can_allocate: Decision;
	can_move_to_other_node: Decision;
	can_rebalance_cluster: Decision;
	can_rebalance_cluster_decisions: AllocationDecision[];
	can_rebalance_to_other_node: Decision;
	can_remain_decisions: AllocationDecision[];
	can_remain_on_current_node: Decision;
	configured_delay: string;
	configured_delay_in_mills: long;
	current_node: CurrentNode;
	current_state: string;
	index: string;
	move_explanation: string;
	node_allocation_decisions: NodeAllocationExplanation[];
	primary: boolean;
	rebalance_explanation: string;
	remaining_delay: string;
	remaining_delay_in_millis: long;
	shard: integer;
	unassigned_info: UnassignedInformation;
}
