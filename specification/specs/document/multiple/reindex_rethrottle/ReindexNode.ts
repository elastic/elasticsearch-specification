class ReindexNode {
	@prop_serializer("VerbatimInterfaceReadOnlyDictionaryKeysFormatter`2")
	attributes: Dictionary<string, string>;
	host: string;
	ip: string;
	name: string;
	roles: string[];
	@prop_serializer("VerbatimInterfaceReadOnlyDictionaryKeysFormatter`2")
	tasks: Dictionary<TaskId, ReindexTask>;
	transport_address: string;
}
