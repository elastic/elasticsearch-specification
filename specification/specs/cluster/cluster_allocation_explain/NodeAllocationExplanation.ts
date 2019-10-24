class NodeAllocationExplanation {
	deciders: AllocationDecision[];
	node_attributes: Dictionary<string, string>;
	node_decision: Decision;
	node_id: string;
	node_name: string;
	store: AllocationStore;
	transport_address: string;
	weight_ranking: integer;
}
