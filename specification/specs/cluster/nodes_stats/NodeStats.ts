class NodeStats {
	timestamp: long;
	name: string;
	transport_address: string;
	host: string;
	ip: string | string[];
	roles: NodeRole[];
	indices: IndexStats;
	os: OperatingSystemStats;
	process: ProcessStats;
	script: ScriptStats;
	jvm: NodeJvmStats;
	thread_pool: Dictionary<string, ThreadCountStats>;
	breakers: Dictionary<string, BreakerStats>;
	fs: FileSystemStats;
	transport: TransportStats;
	http: HttpStats;
}
