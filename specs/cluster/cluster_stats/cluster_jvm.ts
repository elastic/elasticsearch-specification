
/**namespace:Cluster.ClusterStats */
interface cluster_jvm {
	max_uptime: string;
	max_uptime_in_millis: long;
	versions: cluster_jvm_version[];
	mem: cluster_jvm_memory;
	threads: long;
}