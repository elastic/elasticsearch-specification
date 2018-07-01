class FieldCapabilitiesResponse extends ResponseBase {
	shards: ShardStatistics;
	fields: Map<Field, Map<string, FieldCapabilities>>;
}
