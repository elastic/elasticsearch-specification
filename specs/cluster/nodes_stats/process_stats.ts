
/**namespace:Cluster.NodesStats */
interface process_stats {
	timestamp: long;
	open_file_descriptors: integer;
	cpu: c_p_u_stats;
	mem: process_memory_stats;
}