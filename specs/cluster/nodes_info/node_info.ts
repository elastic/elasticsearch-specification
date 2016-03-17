
/**namespace:Cluster.NodesInfo */
interface node_info {
	name: string;
	transport_address: string;
	host: string;
	ip: string;
	version: string;
	build: string;
	http_address: string;
	/**custom_serialization */
	settings: string[];
	os: node_operating_system_info;
	process: node_process_info;
	jvm: node_jvm_info;
	/**custom_serialization */
	thread_pool: map<string, node_thread_pool_info>[];
	network: node_info_network;
	transport: node_info_transport;
	http: node_info_http;
	plugins: plugin_stats[];
}