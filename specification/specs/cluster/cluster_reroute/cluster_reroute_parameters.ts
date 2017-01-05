
/**namespace:Cluster.ClusterReroute */
interface cluster_reroute_parameters {
	index: string;
	shard: integer;
	from_node: string;
	to_node: string;
	node: string;
	allow_primary: boolean;
}