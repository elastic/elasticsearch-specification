class TaskState {
	action: string;
	cancellable: boolean;
	description: string;
	headers: Dictionary<string, string>;
	id: long;
	node: string;
	parent_task_id: TaskId;
	running_time_in_nano_seconds: long;
	start_time_in_milliseconds: long;
	status: TaskStatus;
	type: string;
}
