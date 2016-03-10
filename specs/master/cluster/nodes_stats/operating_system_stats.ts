
/**namespace:Cluster.NodesStats */
interface OperatingSystemStats {
	timestamp: long;
	load_average: float;
	mem: ExtendedMemoryStats;
	swap: OsMemoryStats;
}