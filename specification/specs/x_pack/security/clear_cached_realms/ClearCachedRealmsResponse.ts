class ClearCachedRealmsResponse extends ResponseBase implements IResponse {
	cluster_name: string;
	nodes: Dictionary<string, SecurityNode>;
}
