
/**namespace:Modules.SnapshotAndRestore.Snapshot.SnapshotStatus */
interface snapshot_shards_stats {
	initializing: long;
	started: long;
	finalizing: long;
	done: long;
	failed: long;
	total: long;
}