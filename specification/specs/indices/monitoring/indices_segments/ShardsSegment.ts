@class_serializer("Json")
class ShardsSegment {
	num_committed_segments: integer;
	num_search_segments: integer;
	routing: ShardSegmentRouting;
	segments: Dictionary<string, Segment>[];
}
