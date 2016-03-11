
/**namespace:Cluster.NodesStats */
interface node_stats {
	timestamp: long;
	name: string;
	transport_address: string;
	host: string;
	ip: string[];
	indices: index_stats;
	os: operating_system_stats;
	process: process_stats;
	script: script_stats;
	jvm: node_jvm_stats;
	/**custom_serialization */
	thread_pool: map<string, thread_count_stats>[];
	/**custom_serialization */
	breakers: map<string, breaker_stats>[];
	fs: file_system_stats;
	transport: transport_stats;
	http: http_stats;
}