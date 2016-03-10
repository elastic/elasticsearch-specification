
/**namespace:Cluster.ClusterSettings.ClusterPutSettings */
interface ClusterPutSettingsRequest extends Request {
	persistent: Map<string, any>;
	transient: Map<string, any>;
	/**ambiguous_origin*/
	FlatSettings: boolean;
	/**ambiguous_origin*/
	MasterTimeout: Time;
	/**ambiguous_origin*/
	Timeout: Time;
	/**ambiguous_origin*/
	Source: string;
	/**ambiguous_origin*/
	FilterPath: string;
}