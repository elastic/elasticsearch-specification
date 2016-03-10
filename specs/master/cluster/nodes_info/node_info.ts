
/**namespace:Cluster.NodesInfo */
interface NodeInfo {
	name: string;
	transport_address: string;
	host: string;
	ip: string;
	version: string;
	build: string;
	http_address: string;
	/**custom_serialization */
	settings: string[];
	os: NodeOperatingSystemInfo;
	process: NodeProcessInfo;
	jvm: NodeJvmInfo;
	/**custom_serialization */
	thread_pool: Map<string, NodeThreadPoolInfo>;
	network: NodeInfoNetwork;
	transport: NodeInfoTransport;
	http: NodeInfoHttp;
	plugins: PluginStats[];
}