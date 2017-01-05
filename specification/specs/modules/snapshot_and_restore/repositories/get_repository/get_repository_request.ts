
/**namespace:Modules.SnapshotAndRestore.Repositories.GetRepository */
interface get_repository_request extends request {
	/**ambiguous_origin*/
	MasterTimeout: time;
	/**ambiguous_origin*/
	Local: boolean;
	/**ambiguous_origin*/
	Source: string;
	/**ambiguous_origin*/
	FilterPath: string;
}