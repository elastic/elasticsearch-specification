
/**namespace:Cluster.ClusterHealth */
interface shard_health_stats {
	status: string;
	primary_active: boolean;
	active_shards: integer;
	relocating_shards: integer;
	initializing_shards: integer;
	unassigned_shards: integer;
}