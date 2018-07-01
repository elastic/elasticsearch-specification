@rest_spec_name("xpack.ml.close_job")
class CloseJobRequest extends RequestBase {
	@request_parameter()
	force: boolean;
	@request_parameter()
	timeout: Time;
}
