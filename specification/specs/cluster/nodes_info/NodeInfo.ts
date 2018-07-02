class NodeInfo {
	name: string;
	transport_address: string;
	host: string;
	ip: string;
	version: string;
	build_hash: string;
	roles: NodeRole[];
	settings: string[];
	os: NodeOperatingSystemInfo;
	process: NodeProcessInfo;
	jvm: NodeJvmInfo;
	thread_pool: Dictionary<string, NodeThreadPoolInfo>[];
	network: NodeInfoNetwork;
	transport: NodeInfoTransport;
	http: NodeInfoHttp;
	plugins: PluginStats[];
}
