
/**namespace:Cluster.NodesInfo */
interface node_operating_system_info {
	name: string;
	arch: string;
	version: string;
	refresh_interval_in_millis: integer;
	available_processors: integer;
	cpu: node_info_o_s_c_p_u;
	mem: node_info_memory;
	swap: node_info_memory;
}