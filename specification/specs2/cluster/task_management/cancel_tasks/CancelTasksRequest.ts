class CancelTasksRequest extends RequestBase {
	@request_parameter()
	nodes: string[];
	@request_parameter()
	actions: string[];
	@request_parameter()
	parent_node: string;
	@request_parameter()
	parent_task_id: string;
}
