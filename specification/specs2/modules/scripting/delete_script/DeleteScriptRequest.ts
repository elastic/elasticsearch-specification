class DeleteScriptRequest extends RequestBase {
	@request_parameter()
	timeout: Time;
	@request_parameter()
	master_timeout: Time;
}
