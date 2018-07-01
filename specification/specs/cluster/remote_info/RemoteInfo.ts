class RemoteInfo {
	connected: boolean;
	num_nodes_connected: long;
	max_connections_per_cluster: integer;
	initial_connect_timeout: Time;
	seeds: string[];
	http_addresses: string[];
}
