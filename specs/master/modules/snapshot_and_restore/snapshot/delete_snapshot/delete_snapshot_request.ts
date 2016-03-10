
/**namespace:Modules.SnapshotAndRestore.Snapshot.DeleteSnapshot */
interface DeleteSnapshotRequest extends Request {
	/**ambiguous_origin*/
	MasterTimeout: Time;
	/**ambiguous_origin*/
	Source: string;
	/**ambiguous_origin*/
	FilterPath: string;
}