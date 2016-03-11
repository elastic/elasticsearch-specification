
/**namespace:Modules.SnapshotAndRestore.Restore */
interface restore_request extends request {
	indices: indices;
	ignore_unavailable: boolean;
	include_global_state: boolean;
	rename_pattern: string;
	rename_replacement: string;
	index_settings: update_index_settings_request;
	ignore_index_settings: string[];
	/**ambiguous_origin*/
	MasterTimeout: time;
	/**ambiguous_origin*/
	WaitForCompletion: boolean;
	/**ambiguous_origin*/
	Source: string;
	/**ambiguous_origin*/
	FilterPath: string;
}