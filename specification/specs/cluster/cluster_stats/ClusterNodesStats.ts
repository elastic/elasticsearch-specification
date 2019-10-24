class ClusterNodesStats {
	count: ClusterNodeCount;
	discovery_types: Dictionary<string, integer>;
	file_system: ClusterFileSystem;
	jvm: ClusterJvm;
	network_types: ClusterNetworkTypes;
	operating_system: ClusterOperatingSystemStats;
	packaging_types: NodePackagingType[];
	plugins: PluginStats[];
	process: ClusterProcess;
	versions: string[];
}
