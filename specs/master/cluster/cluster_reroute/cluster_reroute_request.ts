
/**namespace:Cluster.ClusterReroute */
/**custom_serialization*/
interface ClusterRerouteRequest extends Request {
	commands: ClusterRerouteCommand[];
	/**ambiguous_origin*/
	DryRun: boolean;
	/**ambiguous_origin*/
	Explain: boolean;
	/**ambiguous_origin*/
	Metric: string[];
	/**ambiguous_origin*/
	MasterTimeout: Time;
	/**ambiguous_origin*/
	Timeout: Time;
	/**ambiguous_origin*/
	Source: string;
	/**ambiguous_origin*/
	FilterPath: string;
}