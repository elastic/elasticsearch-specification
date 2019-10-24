class ClusterStatsResponse extends NodesResponseBase implements IResponse {
	cluster_name: string;
	cluster_u_u_i_d: string;
	indices: ClusterIndicesStats;
	nodes: ClusterNodesStats;
	status: ClusterStatus;
	timestamp: long;
}
