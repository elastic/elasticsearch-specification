
/**namespace:Modules.SnapshotAndRestore.Snapshot */
interface snapshot_shard_failure {
	node_id: string;
	index: string;
	shard_id: string;
	reason: string;
	status: string;
}