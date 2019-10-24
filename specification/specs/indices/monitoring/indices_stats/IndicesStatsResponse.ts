class IndicesStatsResponse extends ResponseBase implements IResponse {
	indices: Dictionary<string, IndicesStats>;
	shards: ShardStatistics;
	stats: IndicesStats;
}
