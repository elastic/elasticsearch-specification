class SearchShardsResponse extends ResponseBase {
  nodes: Dictionary<string, SearchNode>;
  shards: SearchShard[][];
}
