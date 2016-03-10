
/**namespace:Cluster.NodesInfo */
interface NodesInfoResponse extends Response {
	cluster_name: string;
	/**custom_serialization */
	nodes: Map<string, NodeInfo>;
}