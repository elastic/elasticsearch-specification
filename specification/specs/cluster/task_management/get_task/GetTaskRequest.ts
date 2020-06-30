@rest_spec_name("tasks.get")
class GetTaskRequest extends RequestBase {
	query_parameters: {
		timeout: Time;
		wait_for_completion: boolean;
	}
	body: {
	}
}
