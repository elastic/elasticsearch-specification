
/**namespace:Cluster.ClusterStats */
interface ClusterStatsRequest extends Request {
	/**ambiguous_origin*/
	FlatSettings: boolean;
	/**ambiguous_origin*/
	Human: boolean;
	/**ambiguous_origin*/
	Timeout: Time;
	/**ambiguous_origin*/
	Source: string;
	/**ambiguous_origin*/
	FilterPath: string;
}