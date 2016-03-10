
/**namespace:Indices.Monitoring.IndicesSegments */
/**custom_serialization*/
interface ShardsSegment {
	num_committed_segments: integer;
	num_search_segments: integer;
	routing: ShardSegmentRouting;
	/**custom_serialization */
	Segments: Map<string, Segment>;
}