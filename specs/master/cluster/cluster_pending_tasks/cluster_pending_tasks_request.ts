
/**namespace:Cluster.ClusterPendingTasks */
interface ClusterPendingTasksRequest extends Request {
	/**ambiguous_origin*/
	Local: boolean;
	/**ambiguous_origin*/
	MasterTimeout: Time;
	/**ambiguous_origin*/
	Source: string;
	/**ambiguous_origin*/
	FilterPath: string;
}