class NodeAllocationExplanation {
	node_id: string;
	node_name: string;
	transport_address: string;
	node_decision: Decision;
	node_attributes: Dictionary<string, string>[];
	store: AllocationStore;
	weight_ranking: integer;
	deciders: AllocationDecision[];
}
