
/**namespace:Cluster.ClusterSettings.ClusterPutSettings */
interface cluster_put_settings_request extends request {
	persistent: map<string, any>[];
	transient: map<string, any>[];
	/**ambiguous_origin*/
	FlatSettings: boolean;
	/**ambiguous_origin*/
	MasterTimeout: time;
	/**ambiguous_origin*/
	Timeout: time;
	/**ambiguous_origin*/
	Source: string;
	/**ambiguous_origin*/
	FilterPath: string;
}