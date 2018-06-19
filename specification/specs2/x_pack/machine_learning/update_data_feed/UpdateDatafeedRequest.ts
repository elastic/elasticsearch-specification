class UpdateDatafeedRequest extends RequestBase {
	aggregations: Map<string, AggregationContainer>;
	chunking_config: ChunkingConfig;
	frequency: Time;
	@prop_serializer("IndicesJsonConverter")
	indices: Indices;
	job_id: Id;
	query: QueryContainer;
	query_delay: Time;
	script_fields: Map<string, ScriptField>;
	scroll_size: integer;
	@prop_serializer("TypesJsonConverter")
	types: Types;
}
