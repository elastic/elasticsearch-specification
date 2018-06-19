class NodesInfoResponse extends ResponseBase {
	cluster_name: string;
	nodes: Map<string, NodeInfo>;
}
