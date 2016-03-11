
/**namespace:Cluster.ClusterState */
interface node_state {
	name: string;
	transport_address: string;
	/**custom_serialization */
	attributes: map<string, string>[];
}