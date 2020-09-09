class ClusterStatsResponse extends NodesResponseBase {
  cluster_name: string;
  cluster_uuid: string;
  indices: ClusterIndicesStats;
  nodes: ClusterNodesStats;
  status: ClusterStatus;
  timestamp: long;
}
