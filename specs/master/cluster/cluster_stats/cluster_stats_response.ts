
/**namespace:Cluster.ClusterStats */
interface ClusterStatsResponse extends Response {
	cluster_name: string;
	timestamp: long;
	status: ClusterStatus;
	indices: ClusterIndicesStats;
	nodes: ClusterNodesStats;
}