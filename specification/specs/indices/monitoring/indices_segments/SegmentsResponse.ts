class SegmentsResponse extends ResponseBase implements IResponse {
	indices: Dictionary<string, IndexSegment>;
	shards: ShardStatistics;
}
