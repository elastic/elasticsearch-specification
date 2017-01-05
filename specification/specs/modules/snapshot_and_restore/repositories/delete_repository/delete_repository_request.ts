
/**namespace:Modules.SnapshotAndRestore.Repositories.DeleteRepository */
interface delete_repository_request extends request {
	/**ambiguous_origin*/
	MasterTimeout: time;
	/**ambiguous_origin*/
	Timeout: time;
	/**ambiguous_origin*/
	Source: string;
	/**ambiguous_origin*/
	FilterPath: string;
}