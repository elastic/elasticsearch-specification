class ReindexNode {
	name: string;
	transport_address: string;
	host: string;
	ip: string;
	roles: string[];
	attributes: Map<string, string>;
	tasks: Map<TaskId, ReindexTask>;
}
