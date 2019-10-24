@rest_spec_name("get_script")
class GetScriptRequest extends RequestBase {
	@request_parameter()
	master_timeout: Time;
}
