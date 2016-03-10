
/**namespace:Cluster.ClusterSettings.ClusterPutSettings */
interface ClusterPutSettingsResponse extends Response {
	acknowledged: boolean;
	persistent: Map<string, any>;
	transient: Map<string, any>;
}