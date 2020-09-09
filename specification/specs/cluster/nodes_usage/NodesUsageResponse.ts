class NodesUsageResponse extends NodesResponseBase {
  cluster_name: string;
  nodes: Dictionary<string, NodeUsageInformation>;
}
