
/**namespace:Search.FieldStats */
interface field_stats_response extends response {
	_shards: shards_meta_data;
	indices: map<string, field_stats>[];
}