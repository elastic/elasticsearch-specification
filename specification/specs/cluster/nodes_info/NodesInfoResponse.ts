class NodesInfoResponse extends NodesResponseBase {
  cluster_name: string
  /** @prop_serializer VerbatimInterfaceReadOnlyDictionaryKeysFormatter`2 */
  nodes: Dictionary<string, NodeInfo>
}
