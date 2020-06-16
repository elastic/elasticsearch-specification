class IndicesShardStoresResponse extends ResponseBase implements IResponse {
	@prop_serializer("VerbatimInterfaceReadOnlyDictionaryKeysFormatter`2")
	indices: Dictionary<string, IndicesShardStores>;
}
