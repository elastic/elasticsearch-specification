
/**namespace:Modules.SnapshotAndRestore.Repositories.VerifyRepository */
interface verify_repository_request extends request {
	/**ambiguous_origin*/
	MasterTimeout: time;
	/**ambiguous_origin*/
	Timeout: time;
	/**ambiguous_origin*/
	Source: string;
	/**ambiguous_origin*/
	FilterPath: string;
}