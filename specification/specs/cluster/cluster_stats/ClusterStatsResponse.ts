class ClusterStatsResponse extends ResponseBase {
	cluster_name: string;
	timestamp: long;
	status: ClusterStatus;
	indices: ClusterIndicesStats;
	nodes: ClusterNodesStats;
}
