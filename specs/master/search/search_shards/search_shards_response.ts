
/**namespace:Search.SearchShards */
interface SearchShardsResponse extends Response {
	shards: SearchShard[][];
	nodes: Map<string, SearchNode>;
}