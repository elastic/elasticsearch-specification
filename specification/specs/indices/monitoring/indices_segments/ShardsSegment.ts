class ShardsSegment {
	committed_segments: integer;
	routing: ShardSegmentRouting;
	search_segments: integer;
	segments: Dictionary<string, Segment>;
}
