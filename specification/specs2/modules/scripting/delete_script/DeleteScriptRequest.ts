@rest_spec_name("delete_script")
class DeleteScriptRequest extends RequestBase {
	@request_parameter()
	timeout: Time;
	@request_parameter()
	master_timeout: Time;
}
