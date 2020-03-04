class ClusterStatsResponse extends NodesResponseBase implements IResponse {
	cluster_name: string;
	cluster_uuid: string;
	indices: ClusterIndicesStats;
	nodes: ClusterNodesStats;
	status: ClusterStatus;
	timestamp: long;
}
