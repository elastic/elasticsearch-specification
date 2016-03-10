
/**namespace:Modules.SnapshotAndRestore.Restore */
interface RestoreRequest extends Request {
	indices: Indices;
	ignore_unavailable: boolean;
	include_global_state: boolean;
	rename_pattern: string;
	rename_replacement: string;
	index_settings: UpdateIndexSettingsRequest;
	ignore_index_settings: string[];
	/**ambiguous_origin*/
	MasterTimeout: Time;
	/**ambiguous_origin*/
	WaitForCompletion: boolean;
	/**ambiguous_origin*/
	Source: string;
	/**ambiguous_origin*/
	FilterPath: string;
}