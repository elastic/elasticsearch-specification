class NodeInfo {
  attributes: Dictionary<string, string>;
  build_flavor: string;
  build_hash: string;
  build_type: string;
  host: string;
  http: NodeInfoHttp;
  ip: string;
  jvm: NodeJvmInfo;
  name: string;
  network: NodeInfoNetwork;
  os: NodeOperatingSystemInfo;
  plugins: PluginStats[];
  process: NodeProcessInfo;
  roles: NodeRole[];
  settings: string[];
  /** @prop_serializer VerbatimInterfaceReadOnlyDictionaryKeysFormatter`2 */
  thread_pool: Dictionary<string, NodeThreadPoolInfo>;
  total_indexing_buffer: long;
  transport: NodeInfoTransport;
  transport_address: string;
  version: string;
}
