class SegmentsResponse extends ResponseBase {
	_shards: ShardStatistics;
	indices: Dictionary<string, IndexSegment>;
}
