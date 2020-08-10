class ReindexRethrottleResponse extends ResponseBase {
	/** @prop_serializer VerbatimInterfaceReadOnlyDictionaryKeysFormatter`2 */
	nodes: Dictionary<string, ReindexNode>;
}
