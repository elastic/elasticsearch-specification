class NodesUsageResponse extends NodesResponseBase implements IResponse {
	cluster_name: string;
	nodes: Dictionary<string, NodeUsageInformation>;
}
