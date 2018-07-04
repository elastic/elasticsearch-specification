class CatThreadPoolRecord implements ICatRecord {
	node_name: string;
	node_id: string;
	ephemeral_node_id: string;
	pid: integer;
	host: string;
	ip: string;
	port: integer;
	name: string;
	type: string;
	active: integer;
	size: integer;
	queue: integer;
	queue_size: integer;
	rejected: long;
	largest: integer;
	completed: long;
	min: integer;
	max: integer;
	keep_alive: Time;
}
