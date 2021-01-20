enum RemoteInfoConnectionMode {
  SNIFF = "sniff",
  PROXY = "proxy"
}

class RemoteInfo {
  connected: boolean;
  initial_connect_timeout: Time;
  max_connections_per_cluster: integer;
  num_nodes_connected: long;
  seeds: string[];
  skip_unavailable: boolean;
  mode?: RemoteInfoConnectionMode;
  proxy_address?: string[];
  num_proxy_sockets_connected: long;
  max_proxy_socket_connections: long;
}
