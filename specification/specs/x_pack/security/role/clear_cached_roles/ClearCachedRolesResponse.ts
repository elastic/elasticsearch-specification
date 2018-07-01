class ClearCachedRolesResponse extends ResponseBase {
	cluster_name: string;
	nodes: Map<string, SecurityNode>;
}
