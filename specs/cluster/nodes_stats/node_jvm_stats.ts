
/**namespace:Cluster.NodesStats */
interface node_jvm_stats {
	timestamp: long;
	uptime: string;
	uptime_in_millis: long;
	mem: memory_stats;
	threads: thread_stats;
	gc: garbage_collection_stats;
	/**custom_serialization */
	buffer_pools: map<string, node_buffer_pool>[];
	classes: jvm_classes_stats;
}