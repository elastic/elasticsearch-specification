
/**namespace:Modules.SnapshotAndRestore.Snapshot.Snapshot */
interface SnapshotRequest extends Request {
	/**custom_serialization */
	indices: Indices;
	ignore_unavailable: boolean;
	include_global_state: boolean;
	partial: boolean;
	/**ambiguous_origin*/
	MasterTimeout: Time;
	/**ambiguous_origin*/
	WaitForCompletion: boolean;
	/**ambiguous_origin*/
	Source: string;
	/**ambiguous_origin*/
	FilterPath: string;
}