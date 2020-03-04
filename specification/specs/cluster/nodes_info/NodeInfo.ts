class NodeInfo {
	build_hash: string;
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
	thread_pool: Dictionary<string, NodeThreadPoolInfo>;
	transport: NodeInfoTransport;
	transport_address: string;
	version: string;
}
