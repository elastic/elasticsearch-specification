@rest_spec_name("tasks.cancel")
class CancelTasksRequest extends RequestBase {
	@request_parameter()
	actions: string[];
	@request_parameter()
	nodes: string[];
	@request_parameter()
	parent_task_id: string;
}
