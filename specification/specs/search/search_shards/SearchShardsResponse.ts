class SearchShardsResponse extends ResponseBase implements IResponse {
	nodes: Dictionary<string, SearchNode>;
	shards: SearchShard[][];
}
