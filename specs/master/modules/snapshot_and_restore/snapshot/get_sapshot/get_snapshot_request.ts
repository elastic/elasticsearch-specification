
/**namespace:Modules.SnapshotAndRestore.Snapshot.GetSapshot */
interface GetSnapshotRequest extends Request {
	/**ambiguous_origin*/
	MasterTimeout: Time;
	/**ambiguous_origin*/
	Source: string;
	/**ambiguous_origin*/
	FilterPath: string;
}