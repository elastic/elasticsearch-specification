
/**namespace:Cluster.NodesStats */
interface NodesStatsResponse extends Response {
	cluster_name: string;
	/**custom_serialization */
	nodes: Map<string, NodeStats>;
}