
/**namespace:Cluster.ClusterHealth */
interface index_health_stats {
	status: string;
	number_of_shards: integer;
	number_of_replicas: integer;
	active_primary_shards: integer;
	active_shards: integer;
	relocating_shards: integer;
	initializing_shards: integer;
	unassigned_shards: integer;
	/**custom_serialization */
	shards: map<string, shard_health_stats>[];
}