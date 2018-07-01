class SearchShardsResponse extends ResponseBase {
	shards: SearchShard[][];
	nodes: Map<string, SearchNode>;
}
