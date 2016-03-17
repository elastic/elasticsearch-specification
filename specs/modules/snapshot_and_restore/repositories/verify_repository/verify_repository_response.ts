
/**namespace:Modules.SnapshotAndRestore.Repositories.VerifyRepository */
interface verify_repository_response extends response {
	/**custom_serialization */
	nodes: map<string, compact_node_info>[];
}