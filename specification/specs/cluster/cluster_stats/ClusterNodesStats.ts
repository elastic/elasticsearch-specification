class ClusterNodesStats {
	count: ClusterNodeCount;
	discovery_types: Dictionary<string, integer>;
	fs: ClusterFileSystem;
	ingest: ClusterIngestStats;
	jvm: ClusterJvm;
	network_types: ClusterNetworkTypes;
	os: ClusterOperatingSystemStats;
	packaging_types: NodePackagingType[];
	plugins: PluginStats[];
	process: ClusterProcess;
	versions: string[];
}
