
/**namespace:Cluster.ClusterState */
interface RoutingNodesState {
	unassigned: RoutingShard[];
	nodes: Map<string, RoutingShard[]>;
}