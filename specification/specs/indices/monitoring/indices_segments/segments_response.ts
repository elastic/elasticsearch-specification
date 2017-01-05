
/**namespace:Indices.Monitoring.IndicesSegments */
interface segments_response extends response {
	_shards: shards_meta_data;
	/**custom_serialization */
	indices: map<string, index_segment>[];
}