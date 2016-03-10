
/**namespace:Cluster.ClusterSettings.ClusterGetSettings */
interface ClusterGetSettingsResponse extends Response {
	persistent: Map<string, any>;
	transient: Map<string, any>;
}