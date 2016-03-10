
/**namespace:Cluster.ClusterHealth */
interface ShardHealthStats {
	status: string;
	primary_active: boolean;
	active_shards: integer;
	relocating_shards: integer;
	initializing_shards: integer;
	unassigned_shards: integer;
}