
/**namespace:Cluster.NodesStats */
interface ProcessStats {
	timestamp: long;
	open_file_descriptors: integer;
	cpu: CPUStats;
	mem: ProcessMemoryStats;
}