
/**namespace:Cluster.ClusterReroute */
/**custom_serialization*/
interface cluster_reroute_request extends request {
	commands: cluster_reroute_command[];
	/**ambiguous_origin*/
	DryRun: boolean;
	/**ambiguous_origin*/
	Explain: boolean;
	/**ambiguous_origin*/
	Metric: string[];
	/**ambiguous_origin*/
	MasterTimeout: time;
	/**ambiguous_origin*/
	Timeout: time;
	/**ambiguous_origin*/
	Source: string;
	/**ambiguous_origin*/
	FilterPath: string;
}