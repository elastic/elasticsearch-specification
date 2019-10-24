class ConnectionPool {
	last_update: Date;
	max_retries: integer;
	nodes: Node[];
	sniffed_on_startup: boolean;
	supports_pinging: boolean;
	supports_reseeding: boolean;
	using_ssl: boolean;
}
