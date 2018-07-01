@rest_spec_name("tasks.get")
class GetTaskRequest extends RequestBase {
	@request_parameter()
	wait_for_completion: boolean;
}
