class IndicesStats {
	primaries: IndexStats;
	shards: Dictionary<string, ShardStats[]>;
	total: IndexStats;
	uuid: string;
}
