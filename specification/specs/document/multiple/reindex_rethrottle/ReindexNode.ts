class ReindexNode {
	name: string;
	transport_address: string;
	host: string;
	ip: string;
	roles: string[];
	attributes: Dictionary<string, string>;
	tasks: Dictionary<TaskId, ReindexTask>;
}
