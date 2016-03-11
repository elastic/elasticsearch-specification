
/**namespace:Cluster.ClusterSettings.ClusterPutSettings */
interface cluster_put_settings_response extends response {
	acknowledged: boolean;
	persistent: map<string, any>[];
	transient: map<string, any>[];
}