
/**namespace:Modules.SnapshotAndRestore.Snapshot.Snapshot */
interface SnapshotResponse extends Response {
	accepted: boolean;
	snapshot: Snapshot;
}