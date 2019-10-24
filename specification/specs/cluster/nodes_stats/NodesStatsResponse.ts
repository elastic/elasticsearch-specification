class NodesStatsResponse extends NodesResponseBase implements IResponse {
	cluster_name: string;
	nodes: Dictionary<string, NodeStats>;
}
