class NodeJvmStats {
	@prop_serializer("VerbatimInterfaceReadOnlyDictionaryKeysFormatter`2")
	buffer_pools: Dictionary<string, NodeBufferPool>;
	classes: JvmClassesStats;
	gc: GarbageCollectionStats;
	mem: MemoryStats;
	threads: ThreadStats;
	timestamp: long;
	uptime: string;
	uptime_in_millis: long;
}
