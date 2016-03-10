
/**namespace:Cluster.ClusterHealth */
interface ClusterHealthRequest extends Request {
	/**ambiguous_origin*/
	Level: Level;
	/**ambiguous_origin*/
	Local: boolean;
	/**ambiguous_origin*/
	MasterTimeout: Time;
	/**ambiguous_origin*/
	Timeout: Time;
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