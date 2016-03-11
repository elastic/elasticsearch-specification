
/**namespace:Indices.Monitoring.IndicesStats */
interface indices_stats_response extends response {
	_shards: shards_meta_data;
	_all: indices_stats;
	/**custom_serialization */
	indices: map<string, indices_stats>[];
}