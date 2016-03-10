
/**namespace:Cluster.ClusterSettings.ClusterGetSettings */
interface ClusterGetSettingsRequest extends Request {
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