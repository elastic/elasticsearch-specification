class ClusterHealthResponse extends ResponseBase {
	cluster_name: string;
	status: Health;
	timed_out: boolean;
	number_of_nodes: integer;
	number_of_data_nodes: integer;
	active_primary_shards: integer;
	active_shards: integer;
	relocating_shards: integer;
	initializing_shards: integer;
	unassigned_shards: integer;
	number_of_pending_tasks: integer;
	@prop_serializer("ResolvableDictionaryJsonConverter`2")
	indices: Dictionary<IndexName, IndexHealthStats>[];
}
