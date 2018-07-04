class IndicesStatsResponse extends ResponseBase {
	_shards: ShardStatistics;
	_all: IndicesStats;
	indices: Dictionary<string, IndicesStats>;
}
