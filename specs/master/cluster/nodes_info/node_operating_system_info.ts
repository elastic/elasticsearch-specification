
/**namespace:Cluster.NodesInfo */
interface NodeOperatingSystemInfo {
	name: string;
	arch: string;
	version: string;
	refresh_interval_in_millis: integer;
	available_processors: integer;
	cpu: NodeInfoOSCPU;
	mem: NodeInfoMemory;
	swap: NodeInfoMemory;
}