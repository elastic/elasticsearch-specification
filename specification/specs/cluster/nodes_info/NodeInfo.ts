class NodeInfo {
	name: string;
	transport_address: string;
	host: string;
	ip: string;
	version: string;
	build_flavor: string;
	build_type: string;
	build_hash: string;
	total_indexing_buffer: long;
	roles: NodeRole[];
	attributes: Dictionary<string, string>;
	settings: string[];
	os: NodeOperatingSystemInfo;
	process: NodeProcessInfo;
	jvm: NodeJvmInfo;
	http: NodeInfoHttp;
	network: NodeInfoNetwork;
	plugins: PluginStats[];
	@prop_serializer("VerbatimInterfaceReadOnlyDictionaryKeysFormatter`2")
	thread_pool: Dictionary<string, NodeThreadPoolInfo>;
	transport: NodeInfoTransport;
}
