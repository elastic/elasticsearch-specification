
/**namespace:Modules.SnapshotAndRestore.Repositories.CreateRepository */
/**custom_serialization*/
interface create_repository_request extends request {
	Repository: snapshot_repository;
	/**ambiguous_origin*/
	MasterTimeout: time;
	/**ambiguous_origin*/
	Timeout: time;
	/**ambiguous_origin*/
	Verify: boolean;
	/**ambiguous_origin*/
	Source: string;
	/**ambiguous_origin*/
	FilterPath: string;
}