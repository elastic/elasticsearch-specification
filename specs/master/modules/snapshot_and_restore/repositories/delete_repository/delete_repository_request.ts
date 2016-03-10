
/**namespace:Modules.SnapshotAndRestore.Repositories.DeleteRepository */
interface DeleteRepositoryRequest extends Request {
	/**ambiguous_origin*/
	MasterTimeout: Time;
	/**ambiguous_origin*/
	Timeout: Time;
	/**ambiguous_origin*/
	Source: string;
	/**ambiguous_origin*/
	FilterPath: string;
}