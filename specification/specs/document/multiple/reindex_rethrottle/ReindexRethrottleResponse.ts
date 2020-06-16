class ReindexRethrottleResponse extends ResponseBase implements IResponse {
	@prop_serializer("VerbatimInterfaceReadOnlyDictionaryKeysFormatter`2")
	nodes: Dictionary<string, ReindexNode>;
}
