
/**namespace:Modules.SnapshotAndRestore.Snapshot.Snapshot */
interface snapshot_request extends request {
	/**custom_serialization */
	indices: indices;
	ignore_unavailable: boolean;
	include_global_state: boolean;
	partial: boolean;
	/**ambiguous_origin*/
	MasterTimeout: time;
	/**ambiguous_origin*/
	WaitForCompletion: boolean;
	/**ambiguous_origin*/
	Source: string;
	/**ambiguous_origin*/
	FilterPath: string;
}