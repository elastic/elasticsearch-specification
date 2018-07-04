class NodesStatsResponse extends NodesResponseBase {
	cluster_name: string;
	nodes: Dictionary<string, NodeStats>[];
}
