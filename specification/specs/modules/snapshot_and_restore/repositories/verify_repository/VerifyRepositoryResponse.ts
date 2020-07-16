class VerifyRepositoryResponse extends ResponseBase implements IResponse {
	/** @prop_serializer VerbatimInterfaceReadOnlyDictionaryKeysFormatter`2 */
	nodes: Dictionary<string, CompactNodeInfo>;
}
