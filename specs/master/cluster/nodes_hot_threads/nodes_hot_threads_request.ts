
/**namespace:Cluster.NodesHotThreads */
interface NodesHotThreadsRequest extends Request {
	/**ambiguous_origin*/
	Interval: Time;
	/**ambiguous_origin*/
	Snapshots: long;
	/**ambiguous_origin*/
	Threads: long;
	/**ambiguous_origin*/
	IgnoreIdleThreads: boolean;
	/**ambiguous_origin*/
	ThreadType: ThreadType;
	/**ambiguous_origin*/
	Timeout: Time;
	/**ambiguous_origin*/
	Source: string;
	/**ambiguous_origin*/
	FilterPath: string;
}