class IndicesStatsResponse extends ResponseBase implements IResponse {
	indices: Dictionary<string, IndicesStats>;
	_shards: ShardStatistics;
	_all: IndicesStats;
}
