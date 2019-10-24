class TaskExecutingNode {
	attributes: Dictionary<string, string>;
	host: string;
	ip: string;
	name: string;
	roles: string[];
	tasks: Dictionary<TaskId, TaskState>;
	transport_address: string;
}
