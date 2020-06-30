@rest_spec_name("transform.stop_transform")
class StopTransformRequest extends RequestBase {
	query_parameters: {
		allow_no_match: boolean;
		force: boolean;
		timeout: Time;
		wait_for_checkpoint: boolean;
		wait_for_completion: boolean;
	}
	body: {
	}
}
