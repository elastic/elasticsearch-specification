
/**namespace:Cluster.ClusterPendingTasks */
interface cluster_pending_tasks_request extends request {
	/**ambiguous_origin*/
	Local: boolean;
	/**ambiguous_origin*/
	MasterTimeout: time;
	/**ambiguous_origin*/
	Source: string;
	/**ambiguous_origin*/
	FilterPath: string;
}