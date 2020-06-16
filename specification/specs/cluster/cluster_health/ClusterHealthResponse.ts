class ClusterHealthResponse extends ResponseBase implements IResponse {
	active_primary_shards: integer;
	active_shards: integer;
	active_shards_percent_as_number: double;
	cluster_name: string;
	delayed_unassigned_shards: integer;
	@prop_serializer("ResolvableReadOnlyDictionaryFormatter`2")
	indices: Dictionary<IndexName, IndexHealthStats>;
	initializing_shards: integer;
	number_of_data_nodes: integer;
	number_of_in_flight_fetch: integer;
	number_of_nodes: integer;
	number_of_pending_tasks: integer;
	relocating_shards: integer;
	status: Health;
	task_max_waiting_in_queue_millis: long;
	timed_out: boolean;
	unassigned_shards: integer;
}
