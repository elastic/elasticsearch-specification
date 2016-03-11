
/**namespace:Modules.SnapshotAndRestore.Snapshot.SnapshotStatus */
interface snapshot_index_stats {
	shards_stats: snapshot_shards_stats;
	stats: snapshot_stats;
	shards: map<string, snapshot_shards_stats>[];
}