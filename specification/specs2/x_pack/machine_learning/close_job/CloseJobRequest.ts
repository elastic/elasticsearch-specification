class CloseJobRequest extends RequestBase {
	@request_parameter()
	force: boolean;
	@request_parameter()
	timeout: Time;
}
