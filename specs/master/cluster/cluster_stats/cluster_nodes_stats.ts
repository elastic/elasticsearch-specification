
/**namespace:Cluster.ClusterStats */
interface ClusterNodesStats {
	count: ClusterNodeCount;
	versions: string[];
	os: ClusterOperatingSystemStats;
	process: ClusterProcess;
	jvm: ClusterJvm;
	fs: ClusterFileSystem;
	plugins: PluginStats[];
}