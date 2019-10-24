class TaskInfo {
	action: string;
	cancellable: boolean;
	children: TaskInfo[];
	description: string;
	headers: Dictionary<string, string>;
	id: long;
	node: string;
	running_time_in_nanoseconds: long;
	start_time_in_milliseconds: long;
	status: TaskStatus;
	type: string;
}
