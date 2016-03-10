
/**namespace:Cluster.ClusterHealth */
interface ClusterHealthResponse extends Response {
	cluster_name: string;
	status: string;
	timed_out: boolean;
	number_of_nodes: integer;
	number_of_data_nodes: integer;
	active_primary_shards: integer;
	active_shards: integer;
	relocating_shards: integer;
	initializing_shards: integer;
	unassigned_shards: integer;
	number_of_pending_tasks: integer;
	/**custom_serialization */
	indices: Map<string, IndexHealthStats>;
}