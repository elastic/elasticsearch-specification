class SegmentsResponse extends ResponseBase {
	/** @prop_serializer VerbatimInterfaceReadOnlyDictionaryKeysFormatter`2 */
	indices: Dictionary<string, IndexSegment>;
	_shards: ShardStatistics;
}
