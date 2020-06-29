class RemoteInfo {
	connected: boolean;
	initial_connect_timeout: Time;
	max_connections_per_cluster: integer;
	num_nodes_connected: long;
	seeds: string[];
	skip_unavailable: boolean;
}
