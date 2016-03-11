
/**namespace:Search.SearchShards */
interface search_shards_response extends response {
	shards: search_shard[][];
	nodes: map<string, search_node>[];
}