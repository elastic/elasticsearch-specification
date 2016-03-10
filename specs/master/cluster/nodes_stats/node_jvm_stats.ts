
/**namespace:Cluster.NodesStats */
interface NodeJvmStats {
	timestamp: long;
	uptime: string;
	uptime_in_millis: long;
	mem: MemoryStats;
	threads: ThreadStats;
	gc: GarbageCollectionStats;
	/**custom_serialization */
	buffer_pools: Map<string, NodeBufferPool>;
	classes: JvmClassesStats;
}