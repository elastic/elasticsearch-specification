@rest_spec_name("xpack.usage")
class XPackUsageRequest extends RequestBase {
	@request_parameter()
	master_timeout: Time;
}
