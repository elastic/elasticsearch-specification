class NodesStatsResponse extends ResponseBase {
	cluster_name: string;
	nodes: Map<string, NodeStats>;
}
