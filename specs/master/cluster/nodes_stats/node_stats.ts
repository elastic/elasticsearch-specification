
/**namespace:Cluster.NodesStats */
interface NodeStats {
	timestamp: long;
	name: string;
	transport_address: string;
	host: string;
	ip: string[];
	indices: IndexStats;
	os: OperatingSystemStats;
	process: ProcessStats;
	script: ScriptStats;
	jvm: NodeJvmStats;
	/**custom_serialization */
	thread_pool: Map<string, ThreadCountStats>;
	/**custom_serialization */
	breakers: Map<string, BreakerStats>;
	fs: FileSystemStats;
	transport: TransportStats;
	http: HttpStats;
}