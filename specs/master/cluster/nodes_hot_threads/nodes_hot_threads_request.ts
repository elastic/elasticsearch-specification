
/**namespace:Cluster.NodesHotThreads */
interface nodes_hot_threads_request extends request {
	/**ambiguous_origin*/
	Interval: time;
	/**ambiguous_origin*/
	Snapshots: long;
	/**ambiguous_origin*/
	Threads: long;
	/**ambiguous_origin*/
	IgnoreIdleThreads: boolean;
	/**ambiguous_origin*/
	ThreadType: ThreadType;
	/**ambiguous_origin*/
	Timeout: time;
	/**ambiguous_origin*/
	Source: string;
	/**ambiguous_origin*/
	FilterPath: string;
}