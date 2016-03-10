
/**namespace:Cluster.NodesStats */
interface FileSystemStats {
	timestamp: long;
	total: TotalFileSystemStats;
	data: DataPathStats[];
}