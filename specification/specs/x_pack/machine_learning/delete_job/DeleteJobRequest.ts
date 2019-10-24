@rest_spec_name("ml.delete_job")
class DeleteJobRequest extends RequestBase {
	@request_parameter()
	force: boolean;
	@request_parameter()
	wait_for_completion: boolean;
}
