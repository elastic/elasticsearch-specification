@rest_spec_name("tasks.list")
class ListTasksRequest extends RequestBase {
	@request_parameter()
	actions: string[];
	@request_parameter()
	detailed: boolean;
	@request_parameter()
	group_by: GroupBy;
	@request_parameter()
	nodes: string[];
	@request_parameter()
	parent_task_id: string;
	@request_parameter()
	timeout: Time;
	@request_parameter()
	wait_for_completion: boolean;
}
