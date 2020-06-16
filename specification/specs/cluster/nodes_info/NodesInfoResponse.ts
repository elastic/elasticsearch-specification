class NodesInfoResponse extends NodesResponseBase implements IResponse {
	cluster_name: string;
	@prop_serializer("VerbatimInterfaceReadOnlyDictionaryKeysFormatter`2")
	nodes: Dictionary<string, NodeInfo>;
}
