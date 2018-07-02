class ClearCachedRealmsResponse extends ResponseBase {
	cluster_name: string;
	nodes: Dictionary<string, SecurityNode>[];
}
