
/**namespace:Cluster.ClusterStats */
interface cluster_nodes_stats {
	count: cluster_node_count;
	versions: string[];
	os: cluster_operating_system_stats;
	process: cluster_process;
	jvm: cluster_jvm;
	fs: cluster_file_system;
	plugins: plugin_stats[];
}