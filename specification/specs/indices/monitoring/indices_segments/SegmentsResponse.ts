class SegmentsResponse extends ResponseBase {
	_shards: ShardStatistics;
	indices: Map<string, IndexSegment>;
}
