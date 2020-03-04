class ShardsSegment {
	num_committed_segments: integer;
	routing: ShardSegmentRouting;
	num_search_segments: integer;
	segments: Dictionary<string, Segment>;
}
