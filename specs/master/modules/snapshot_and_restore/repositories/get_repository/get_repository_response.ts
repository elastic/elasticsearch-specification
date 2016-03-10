
/**namespace:Modules.SnapshotAndRestore.Repositories.GetRepository */
/**custom_serialization*/
interface GetRepositoryResponse extends Response {
	Repositories: Map<string, SnapshotRepository>;
}