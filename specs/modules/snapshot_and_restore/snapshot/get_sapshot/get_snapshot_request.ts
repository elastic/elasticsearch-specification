
/**namespace:Modules.SnapshotAndRestore.Snapshot.GetSapshot */
interface get_snapshot_request extends request {
	/**ambiguous_origin*/
	MasterTimeout: time;
	/**ambiguous_origin*/
	Source: string;
	/**ambiguous_origin*/
	FilterPath: string;
}