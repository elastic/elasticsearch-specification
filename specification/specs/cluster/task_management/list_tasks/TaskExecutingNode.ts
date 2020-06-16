class TaskExecutingNode {
	@prop_serializer("VerbatimInterfaceReadOnlyDictionaryKeysFormatter`2")
	attributes: Dictionary<string, string>;
	host: string;
	ip: string;
	name: string;
	roles: string[];
	tasks: Dictionary<TaskId, TaskState>;
	transport_address: string;
}
