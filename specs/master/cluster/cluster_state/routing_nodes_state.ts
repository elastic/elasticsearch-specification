
/**namespace:Cluster.ClusterState */
interface routing_nodes_state {
	unassigned: routing_shard[];
	nodes: map<string, routing_shard[]>[];
}