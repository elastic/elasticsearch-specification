
/**namespace:Modules.SnapshotAndRestore.Repositories.VerifyRepository */
interface VerifyRepositoryRequest extends Request {
	/**ambiguous_origin*/
	MasterTimeout: Time;
	/**ambiguous_origin*/
	Timeout: Time;
	/**ambiguous_origin*/
	Source: string;
	/**ambiguous_origin*/
	FilterPath: string;
}