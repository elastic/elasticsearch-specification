
/**namespace:Modules.SnapshotAndRestore.Snapshot.SnapshotStatus */
interface SnapshotStatusRequest extends Request {
	/**ambiguous_origin*/
	MasterTimeout: Time;
	/**ambiguous_origin*/
	Source: string;
	/**ambiguous_origin*/
	FilterPath: string;
}