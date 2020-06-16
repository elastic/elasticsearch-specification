@rest_spec_name("ml.update_datafeed")
class UpdateDatafeedRequest extends RequestBase {
	@request_parameter()
	allow_no_indices: boolean;
	@request_parameter()
	expand_wildcards: ExpandWildcards;
	@request_parameter()
	ignore_throttled: boolean;
	@request_parameter()
	ignore_unavailable: boolean;
	aggregations: Dictionary<string, AggregationContainer>;
	chunking_config: ChunkingConfig;
	frequency: Time;
	indices: Indices;
	job_id: Id;
	query: QueryContainer;
	query_delay: Time;
	script_fields: Dictionary<string, ScriptField>;
	scroll_size: integer;
	max_empty_searches: integer;
}
