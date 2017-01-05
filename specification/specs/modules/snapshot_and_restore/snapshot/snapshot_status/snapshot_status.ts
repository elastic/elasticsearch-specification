
/**namespace:Modules.SnapshotAndRestore.Snapshot.SnapshotStatus */
interface snapshot_status {
	snapshot: string;
	repository: string;
	state: string;
	shards_stats: snapshot_shards_stats;
	stats: snapshot_stats;
	indices: map<string, snapshot_index_stats>[];
}