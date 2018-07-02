class SnapshotIndexStats {
	shards_stats: SnapshotShardsStats;
	stats: SnapshotStats;
	shards: Dictionary<string, SnapshotShardsStats>[];
}
