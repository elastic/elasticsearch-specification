
/**namespace:Cluster.ClusterReroute */
interface ClusterRerouteResponse extends Response {
	Version: integer;
	state: ClusterRerouteState;
	explanations: ClusterRerouteExplanation[];
}