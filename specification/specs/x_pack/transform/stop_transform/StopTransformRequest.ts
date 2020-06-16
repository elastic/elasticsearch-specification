@rest_spec_name("transform.stop_transform")
class StopTransformRequest extends RequestBase {
	@request_parameter()
	allow_no_match: boolean;
	@request_parameter()
	force: boolean;
	@request_parameter()
	timeout: Time;
	@request_parameter()
	wait_for_checkpoint: boolean;
	@request_parameter()
	wait_for_completion: boolean;
}
