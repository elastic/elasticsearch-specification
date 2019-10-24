class NodeStats {
	adaptive_selection: Dictionary<string, AdaptiveSelectionStats>;
	breakers: Dictionary<string, BreakerStats>;
	file_system: FileSystemStats;
	host: string;
	http: HttpStats;
	indices: IndexStats;
	ingest: NodeIngestStats;
	ip: string[];
	jvm: NodeJvmStats;
	name: string;
	operating_system: OperatingSystemStats;
	process: ProcessStats;
	roles: NodeRole[];
	script: ScriptStats;
	thread_pool: Dictionary<string, ThreadCountStats>;
	timestamp: long;
	transport: TransportStats;
	transport_address: string;
}
