class ReindexNode {
	attributes: Dictionary<string, string>;
	host: string;
	ip: string;
	name: string;
	roles: string[];
	tasks: Dictionary<TaskId, ReindexTask>;
	transport_address: string;
}
