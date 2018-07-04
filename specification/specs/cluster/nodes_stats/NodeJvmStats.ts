class NodeJvmStats {
	timestamp: long;
	uptime: string;
	uptime_in_millis: long;
	mem: MemoryStats;
	threads: ThreadStats;
	gc: GarbageCollectionStats;
	buffer_pools: Dictionary<string, NodeBufferPool>;
	classes: JvmClassesStats;
}
