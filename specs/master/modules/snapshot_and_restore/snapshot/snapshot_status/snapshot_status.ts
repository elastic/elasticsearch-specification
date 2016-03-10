
/**namespace:Modules.SnapshotAndRestore.Snapshot.SnapshotStatus */
interface SnapshotStatus {
	snapshot: string;
	repository: string;
	state: string;
	shards_stats: SnapshotShardsStats;
	stats: SnapshotStats;
	indices: Map<string, SnapshotIndexStats>;
}