
/**namespace:Modules.SnapshotAndRestore.Repositories.CreateRepository */
/**custom_serialization*/
interface CreateRepositoryRequest extends Request {
	Repository: SnapshotRepository;
	/**ambiguous_origin*/
	MasterTimeout: Time;
	/**ambiguous_origin*/
	Timeout: Time;
	/**ambiguous_origin*/
	Verify: boolean;
	/**ambiguous_origin*/
	Source: string;
	/**ambiguous_origin*/
	FilterPath: string;
}