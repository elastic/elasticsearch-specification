class IndicesStats {
	primaries: IndexStats;
	shards: Dictionary<string, ShardStats[]>;
	total: IndexStats;
	u_u_i_d: string;
}
