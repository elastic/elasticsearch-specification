
/**namespace:Cluster.ClusterState */
interface RoutingShard {
	allocation_id: AllocationId;
	state: string;
	primary: boolean;
	node: string;
	relocating_node: string;
	shard: integer;
	version: long;
	index: string;
}