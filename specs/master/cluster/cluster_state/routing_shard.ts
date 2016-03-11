
/**namespace:Cluster.ClusterState */
interface routing_shard {
	allocation_id: allocation_id;
	state: string;
	primary: boolean;
	node: string;
	relocating_node: string;
	shard: integer;
	version: long;
	index: string;
}