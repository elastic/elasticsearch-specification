
/**namespace:Cluster.ClusterState */
interface NodeState {
	name: string;
	transport_address: string;
	/**custom_serialization */
	attributes: Map<string, string>;
}