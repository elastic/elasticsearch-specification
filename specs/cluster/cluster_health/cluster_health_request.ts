
/**namespace:Cluster.ClusterHealth */
interface cluster_health_request extends request {
	/**ambiguous_origin*/
	Level: Level;
	/**ambiguous_origin*/
	Local: boolean;
	/**ambiguous_origin*/
	MasterTimeout: time;
	/**ambiguous_origin*/
	Timeout: time;
	/**ambiguous_origin*/
	WaitForActiveShards: long;
	/**ambiguous_origin*/
	WaitForNodes: string;
	/**ambiguous_origin*/
	WaitForRelocatingShards: long;
	/**ambiguous_origin*/
	WaitForStatus: WaitForStatus;
	/**ambiguous_origin*/
	Source: string;
	/**ambiguous_origin*/
	FilterPath: string;
}