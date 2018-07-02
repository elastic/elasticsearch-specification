class DatafeedConfig {
	datafeed_id: string;
	aggregations: Dictionary<string, AggregationContainer>[];
	chunking_config: ChunkingConfig;
	frequency: Time;
	@prop_serializer("IndicesJsonConverter")
	indices: Indices;
	job_id: string;
	query: QueryContainer;
	query_delay: Time;
	script_fields: Dictionary<string, ScriptField>[];
	scroll_size: integer;
	@prop_serializer("TypesJsonConverter")
	types: Types;
}
