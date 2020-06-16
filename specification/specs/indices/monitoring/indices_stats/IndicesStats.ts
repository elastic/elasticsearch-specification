class IndicesStats {
	primaries: IndexStats;
	@prop_serializer("VerbatimInterfaceReadOnlyDictionaryKeysFormatter`2")
	shards: Dictionary<string, ShardStats[]>;
	total: IndexStats;
	uuid: string;
}
