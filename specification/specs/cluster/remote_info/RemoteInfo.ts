class RemoteInfo {
	connected: boolean;
	skip_unavailable: boolean;
	initial_connect_timeout: Time;
	max_connections_per_cluster: integer;
	num_nodes_connected: long;
	seeds: string[];
}
