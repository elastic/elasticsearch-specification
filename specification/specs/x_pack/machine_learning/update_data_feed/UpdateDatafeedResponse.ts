class UpdateDatafeedResponse extends ResponseBase implements IResponse {
	aggregations: Dictionary<string, AggregationContainer>;
	chunking_config: ChunkingConfig;
	datafeed_id: string;
	frequency: Time;
	/** @prop_serializer IndicesFormatter */
	indices: Indices;
	job_id: string;
	max_empty_searches: integer;
	query: QueryContainer;
	query_delay: Time;
	script_fields: Dictionary<string, ScriptField>;
	scroll_size: integer;
}
