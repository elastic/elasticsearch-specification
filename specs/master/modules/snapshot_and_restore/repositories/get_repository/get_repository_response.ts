
/**namespace:Modules.SnapshotAndRestore.Repositories.GetRepository */
/**custom_serialization*/
interface get_repository_response extends response {
	Repositories: map<string, snapshot_repository>[];
}