@class_serializer("Json")
class ShardsSegment {
	num_committed_segments: integer;
	routing: ShardSegmentRouting;
	num_search_segments: integer;
	@prop_serializer("VerbatimInterfaceReadOnlyDictionaryKeysFormatter`2")
	segments: Dictionary<string, Segment>;
}
