class NodeStats {
	adaptive_selection: Dictionary<string, AdaptiveSelectionStats>;
	breakers: Dictionary<string, BreakerStats>;
	fs: FileSystemStats;
	host: string;
	http: HttpStats;
	indices: IndexStats;
	ingest: NodeIngestStats;
	ip: string[];
	jvm: NodeJvmStats;
	name: string;
	os: OperatingSystemStats;
	process: ProcessStats;
	roles: NodeRole[];
	script: ScriptStats;
	thread_pool: Dictionary<string, ThreadCountStats>;
	timestamp: long;
	transport: TransportStats;
	transport_address: string;
}
