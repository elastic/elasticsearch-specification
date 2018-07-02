class NodesStatsResponse extends ResponseBase {
	cluster_name: string;
	nodes: Dictionary<string, NodeStats>[];
}
