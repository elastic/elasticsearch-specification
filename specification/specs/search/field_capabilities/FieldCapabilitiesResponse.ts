class FieldCapabilitiesResponse extends ResponseBase {
	shards: ShardStatistics;
	fields: Dictionary<Field, Dictionary<string, FieldCapabilities>>;
}
