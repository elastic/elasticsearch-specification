class SegmentsResponse extends ResponseBase implements IResponse {
	@prop_serializer("VerbatimInterfaceReadOnlyDictionaryKeysFormatter`2")
	indices: Dictionary<string, IndexSegment>;
	_shards: ShardStatistics;
}
