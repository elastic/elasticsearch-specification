class NodesInfoResponse extends ResponseBase {
	cluster_name: string;
	nodes: Dictionary<string, NodeInfo>[];
}
