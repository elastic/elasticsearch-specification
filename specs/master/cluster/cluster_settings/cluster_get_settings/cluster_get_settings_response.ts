
/**namespace:Cluster.ClusterSettings.ClusterGetSettings */
interface cluster_get_settings_response extends response {
	persistent: map<string, any>[];
	transient: map<string, any>[];
}