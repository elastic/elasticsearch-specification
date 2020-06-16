class IndicesStatsResponse extends ResponseBase implements IResponse {
	@prop_serializer("VerbatimInterfaceReadOnlyDictionaryKeysFormatter`2")
	indices: Dictionary<string, IndicesStats>;
	_shards: ShardStatistics;
	_all: IndicesStats;
}
