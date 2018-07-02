class NodesUsageResponse extends ResponseBase {
	cluster_name: string;
	nodes: Dictionary<string, NodeUsageInformation>[];
}
