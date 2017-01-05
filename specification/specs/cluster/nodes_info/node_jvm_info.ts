
/**namespace:Cluster.NodesInfo */
interface node_jvm_info {
	pid: integer;
	version: string;
	vm_name: string;
	vm_version: string;
	vm_vendor: string;
	memory_pools: string[];
	gc_collectors: string[];
	start_time_in_millis: long;
	mem: node_info_j_v_m_memory;
}