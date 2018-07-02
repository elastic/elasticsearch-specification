class TaskExecutingNode {
	name: string;
	transport_address: string;
	host: string;
	ip: string;
	tasks: Dictionary<TaskId, TaskState>[];
}
