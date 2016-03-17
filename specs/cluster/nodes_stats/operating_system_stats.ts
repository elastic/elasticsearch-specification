
/**namespace:Cluster.NodesStats */
interface operating_system_stats {
	timestamp: long;
	load_average: float;
	mem: extended_memory_stats;
	swap: os_memory_stats;
}