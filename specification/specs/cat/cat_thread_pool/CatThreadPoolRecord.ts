class CatThreadPoolRecord implements ICatRecord {
	active: integer;
	completed: long;
	core: integer;
	ephemeral_node_id: string;
	host: string;
	ip: string;
	keep_alive: Time;
	largest: integer;
	maximum: integer;
	name: string;
	node_id: string;
	node_name: string;
	pool_size: integer;
	port: integer;
	process_id: integer;
	queue: integer;
	queue_size: integer;
	rejected: long;
	size: integer;
	type: string;
}
