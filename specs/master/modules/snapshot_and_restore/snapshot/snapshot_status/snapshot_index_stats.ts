
/**namespace:Modules.SnapshotAndRestore.Snapshot.SnapshotStatus */
interface SnapshotIndexStats {
	shards_stats: SnapshotShardsStats;
	stats: SnapshotStats;
	shards: Map<string, SnapshotShardsStats>;
}