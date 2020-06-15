@rest_spec_name("transform.start_transform")
class StartTransformRequest extends RequestBase {
	@request_parameter()
	timeout: Time;
}
