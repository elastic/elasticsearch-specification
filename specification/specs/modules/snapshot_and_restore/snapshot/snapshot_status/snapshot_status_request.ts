
/**namespace:Modules.SnapshotAndRestore.Snapshot.SnapshotStatus */
interface snapshot_status_request extends request {
	/**ambiguous_origin*/
	MasterTimeout: time;
	/**ambiguous_origin*/
	Source: string;
	/**ambiguous_origin*/
	FilterPath: string;
}