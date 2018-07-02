class SearchShardsResponse extends ResponseBase {
	shards: SearchShard[][];
	nodes: Dictionary<string, SearchNode>[];
}
