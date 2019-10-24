class NodeJvmStats {
	buffer_pools: Dictionary<string, NodeBufferPool>;
	classes: JvmClassesStats;
	garbage_collection: GarbageCollectionStats;
	memory: MemoryStats;
	threads: ThreadStats;
	timestamp: long;
	uptime: string;
	uptime_in_milliseconds: long;
}
