
/**namespace:Indices.Monitoring.IndicesSegments */
/**custom_serialization*/
interface shards_segment {
	num_committed_segments: integer;
	num_search_segments: integer;
	routing: shard_segment_routing;
	/**custom_serialization */
	Segments: map<string, segment>[];
}