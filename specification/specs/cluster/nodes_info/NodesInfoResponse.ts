class NodesInfoResponse extends NodesResponseBase {
	cluster_name: string;
	nodes: Dictionary<string, NodeInfo>[];
}
