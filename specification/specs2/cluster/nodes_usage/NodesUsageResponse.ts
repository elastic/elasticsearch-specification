class NodesUsageResponse extends ResponseBase {
	cluster_name: string;
	nodes: Map<string, NodeUsageInformation>;
}
