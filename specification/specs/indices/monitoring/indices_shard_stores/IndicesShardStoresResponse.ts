class IndicesShardStoresResponse extends ResponseBase {
  /** @prop_serializer VerbatimInterfaceReadOnlyDictionaryKeysFormatter`2 */
  indices: Dictionary<string, IndicesShardStores>;
}
