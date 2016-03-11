
/**namespace:Cluster.ClusterReroute */
interface cluster_reroute_response extends response {
	Version: integer;
	state: cluster_reroute_state;
	explanations: cluster_reroute_explanation[];
}