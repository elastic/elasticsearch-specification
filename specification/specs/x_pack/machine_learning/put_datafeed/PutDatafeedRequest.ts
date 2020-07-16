@rest_spec_name("ml.put_datafeed")
class PutDatafeedRequest extends RequestBase {
	query_parameters: {
		allow_no_indices: boolean;
		expand_wildcards: ExpandWildcards;
		ignore_throttled: boolean;
		ignore_unavailable: boolean;
	}
	body: {
		aggregations: Dictionary<string, AggregationContainer>;
		chunking_config: ChunkingConfig;
		frequency: Time;
		/** @prop_serializer IndicesFormatter */
		indices: Indices;
		job_id: Id;
		max_empty_searches: integer;
		query: QueryContainer;
		query_delay: Time;
		script_fields: Dictionary<string, ScriptField>;
		scroll_size: integer;
	}
}
