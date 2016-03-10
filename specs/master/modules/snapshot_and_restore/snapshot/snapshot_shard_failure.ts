
/**namespace:Modules.SnapshotAndRestore.Snapshot */
interface SnapshotShardFailure {
	node_id: string;
	index: string;
	shard_id: string;
	reason: string;
	status: string;
}