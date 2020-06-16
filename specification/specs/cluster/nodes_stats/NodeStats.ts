class NodeStats {
	@prop_serializer("VerbatimInterfaceReadOnlyDictionaryKeysFormatter`2")
	adaptive_selection: Dictionary<string, AdaptiveSelectionStats>;
	@prop_serializer("VerbatimInterfaceReadOnlyDictionaryKeysFormatter`2")
	breakers: Dictionary<string, BreakerStats>;
	fs: FileSystemStats;
	host: string;
	http: HttpStats;
	indices: IndexStats;
	ingest: NodeIngestStats;
	@prop_serializer("SingleOrEnumerableFormatter`1")
	ip: string[];
	jvm: NodeJvmStats;
	name: string;
	os: OperatingSystemStats;
	process: ProcessStats;
	roles: NodeRole[];
	script: ScriptStats;
	@prop_serializer("VerbatimInterfaceReadOnlyDictionaryKeysFormatter`2")
	thread_pool: Dictionary<string, ThreadCountStats>;
	timestamp: long;
	transport: TransportStats;
	transport_address: string;
}
